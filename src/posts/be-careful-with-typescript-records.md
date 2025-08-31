---
date: 2025-08-31
layout: layouts/code-blog-post.njk
tags: post
title: Be Careful With TypeScript Records
permalink: /blog/be-careful-with-typescript-records/index.html
---

Suppose we have the following TypeScript code that defines an object map for grocery items using the `Record` utility:

```typescript
interface Item {
  id: string;
  category: string;
}

type Items = Record<string, Item>;

const items: Items = {
  apple: {
    id: 'apple',
    category: 'produce',
  },
  bread: {
    id: 'bread',
    category: 'bakery',
  },
};
```

As you might expect, when we access `apple` (or `bread`) from `items`, TypeScript knows we are talking about the `Item` type:

```typescript
const apple = items.apple; // apple is of type Item
console.log(apple.category); // produce
```

Now, suppose we try to access an item that isn't in the object map, e.g. `milk`. How does TypeScript handle it? It _also_ types it as an `Item`:

```typescript
const milk = items.milk; // ❗ milk is of type Item
console.log(milk.category); // oops
```

TypeScript has no issues with this code; `Record<string, Item>` literally means _every_ string key on `items` is an `Item`

Given this usage of the object map, `Items` should be typed like this:

```typescript
type Items = Record<string, Item | undefined>;
```

Now, TypeScript will enforce that we check for a truthy value from `items` before moving forward:

```typescript
const milk = items.milk; // milk can be undefined

if (milk) {
  console.log(milk.category);
}
```

## `noUncheckedIndexedAccess`

If you enable `noUncheckedIndexedAccess` in your TSConfig, TypeScript [will add `undefined` to any un-declared field in the type](https://www.typescriptlang.org/tsconfig/#noUncheckedIndexedAccess). This means that adding `undefined` to the `Items` record from earlier would be unnecessary.
