# Brennan's Website

https://brennanarvo.com

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)

## About <a name = "about"></a>

This is the repository for my personal website. At first, I was manually creating HTML files for each page on my site. This usually entailed copying and pasting the HTML boilerplate from existing pages into new pages so that they could inherit their metadata and styling. However, a couple of redesigns and blog posts later, I've finally converted this project to [Eleventy](https://www.11ty.dev/).

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

You will [need to install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Installing the Project

These steps will get my personal website running on your machine.

First, create a directory for the project and navigate into it:

```console
mkdir brennvo

cd ./brennvo
```

Next, clone the repository and install dependencies:

```console
git clone https://github.com/Brennvo/personal-website.git

npm install
```

Finally, run the project:

```console
npm run dev
```

You should now be able to see the website in any browser by visiting `http://localhost:8080`
