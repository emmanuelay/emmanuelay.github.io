---
date: 2021-02-01
author: Emmanuel Ay
draft: false
title: Getting started with Hugo - the basics
tags: hugo
---

"Hugo is simple"... thats what I was told.
Well it must be, I mean, if we are supposed to swap out neat wysiwyg, drag-and-drop, database-backed CMS'es for something more rudimentary the least we can expect is for it to be a lot simpler and easier to use.

The problem is, Hugo __doesn't look__ simple.

<!--more-->

I don't know about you, but there are lots of new software being released every day that begs for my attention. And I for one don't always have the luxury of time to learn completely new things from scratch. So until now, 2020, I haven't used Hugo.
# Getting started 

Prerequisites:
* Unix-based OS (macOS preferred)
* Homebrew package manager installed

## Traditional CMS conventions vs Hugo
If you have any experience at all from more than one CMS you know that there are conventions that are somewhat common - like **Templates** and **Content**. In Hugo, these conventions that we are used to are buried under terms such as "archetypes", "leaf bundles", "layouts" and what-not. I suspect that the rationale behind it is Wordpress-legacy.

Hugo has obviously passed the test of time and has become a common tool in any self-respecting web developers toolbelt. I don't identify as a web developer, but I do identify as a person who loves Golang - and from time to time, feels the urge to make things public. I've been using wordpress out of convenience, but those days are over.

## Enough already, spill the beans

Install Hugo using Homebrew:

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

I will not walk you through each end every part of the structure of a Hugo-project, there are tons of tutorials for that. Instead I will take the "Hello world" approach and walk you through the bare minimums to generate a basic webpage using Hugo.
I prefer to have my workspaces decluttered, go ahead and delete "archetypes", "data" and "static" from our "my-site" folder. 

