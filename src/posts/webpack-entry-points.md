---
date: 2026-02-21
layout: layouts/code-blog-post.njk
tags: post
title: Webpack Entry Points
permalink: /blog/webpack-entry-points/index.html
---

I've been going through the [Webpack guides](https://webpack.js.org/guides/). One section that caught me by surprise was [Output Management](https://webpack.js.org/guides/output-management/), specifically regarding multiple entry points. In there, the following source code is defined:

**`src/print.js`**

```js
export default function printMe() {
  console.log('I get called from print.js!');
}
```

**`src/index.js`**

```js
import _ from 'lodash';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
```

**`webpack.config.js`**

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Now, given the following HTML file:

**`dist/index.html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Output Management</title>
    <script src="./print.bundle.js"></script>
  </head>
  <body>
    <script src="./index.bundle.js"></script>
  </body>
</html>
```

When executing `webpack`, we get the following output artifacts:

```md
dist/
├── index.bundle.js
├── print.bundle.js
└── index.html
```

Out of curiosity, I inspected `print.bundle.js`, which to my surprise, consisted of an immediately invoked function expression (IIFE) without any side effects:

<!-- prettier-ignore -->
```js
(()=>{"use strict"})();
```

This confused me; I was expecting to see a semblance of the `printMe` function.

After conversing with ChatGPT 5.2, I quickly realized that my mental model of an entry point was completely wrong. Here is the message from GPT that made everything click:

> An entry like `print: "./src/print.js"` produces a file (`print.bundle.js`) that is treated as its own program: it runs when included by `<script src="./print.bundle.js"></script>`. It is not emitted as “a module that other bundles can import from” in the ES-module sense.

Now, thinking of `print.js` as a _program_, it's apparent that running such a program (with merely a function declaration) would have zero side effects, _just like `print.bundle.js`_.

In other words, running `print.js` and `print.bundle.js` results in the same side effect(s): none. Hence, [webpack's optimizations](https://webpack.js.org/guides/tree-shaking/) outputted a minimal webpack wrapper: an IIFE that does nothing.

## Adding Side Effects to `print.js`

Next, I tinkered with `print.js` to give it a side effect:

```js
export default function printMe() {
  console.log('I get called from print.js!');
}

printMe();
```

Running `webpack` again, we're given the following `print.bundle.js` artifact:

<!-- prettier-ignore -->
```js
(()=>{"use strict";console.log("I get called from print.js!")})();
```

As was before, this version still doesn't contain the `printMe` function. However, it is still equivalent to the original `print.js` we just modified; they both log `"I get called from print.js!"`.

Then, where did the `printMe` function actually go?

At this point, it's important to remember what webpack is: a module _bundler_. It bundles the modules ([files](https://webpack.js.org/concepts/modules/)) that a particular module (e.g. `src/index.js`) needs in order to run. Going back to our program analogy, this means `index.bundle.js` must consist of all of the code it needs to run as its own program.

With that being said, let's inspect `src/index.js` once more. There, we can see it holds a reference to the `printMe` function from the `src/print.js` module:

```js
btn.onclick = printMe;
```

Therefore, `index.bundle.js` _must_ include the `printMe` function itself, else it would not be able to run. If we inspect `index.bundle.js`, we can see it in its minified form:

<!-- prettier-ignore -->
```js
function e(){console.log("I get called from print.js!")}
```

## Caveats

The observations I've made here are based off the `webpack.config.js` configuration in the Output Management guide. In reality, webpack can be configured in such a way that many of the behaviors I've observed here can be altered.

I also made a [pull request](https://github.com/webpack/webpack.js.org/pull/7798) into the documentation site to help clarify this for future readers like myself.
