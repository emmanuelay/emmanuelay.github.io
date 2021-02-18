---
title: "Getting started with Hugo - part 1"
author: Emmanuel Ay
date: 2021-02-18T09:04:41+01:00
draft: true
tags: []
---

# Getting started 

Prerequisites:
* Unix-based OS (macOS preferred)
* Homebrew

"Hugo is simple"... thats what I was told.
Well it should be, I mean, if we are supposed to drop our wysiwyg-drag-and-drop-rdbms-backed-CMS'es for something more rudimentary the least we can expect is for it to be simple and easy to use.

The problem is, Hugo __doesn't look__ simple.

## Traditional CMS conventions vs Hugo
If you have any experience at all from more than one CMS you know that there are certain conventions that are somewhat common - like **Templates** and **Content**. In Hugo, these conventions that we are used to are buried under terms such as "archetypes", "leaf bundles", "layouts" and what-not.

I don't know about you, but there are heaps of new stuff coming out every day that begs for my attention. And I do not always have the luxury of time to learn completely new things from scratch. So until now, 2021, I haven't used Hugo. 

Hugo has obviously passed the test of time and has become a common tool in any self-respecting web developers toolbelt. I don't identify as a web developer, but I do identify as a dude who loves Golang - and from time to time, needs to publish stuff online. I've been using wordpress out of convenience, but those days are over.

## Enough already, spill the beans

Installing Hugo using Homebrew:

```sh
brew install hugo
```

..and from there you should be able to initialize a Hugo-project. 

```sh
hugo new site my-site
```

This creates the "my-site" folder and sets up the folder structure for a Hugo site.

```sh
my-site
|- archetypes
|- content
|- data
|- layouts
|- resources
|- static
|- themes
|- config.toml
```