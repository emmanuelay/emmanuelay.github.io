---
date: 2021-02-01
author: Emmanuel Ay
draft: false
title: Getting started with Hugo - the basics
tags: ["hugo"]
---

"Hugo is simple"... thats what I was told.
Well it must be, I mean, if we are to swap out wysiwyg, database-backed CMS'es for something more rudimentary the one thing I would expect is that the replacement is a lot simpler and easier to use. 

<!--more-->

Initially Hugo seems more complicated than it is. I don't know why, but I suspect that the documentation plays a large part in that. But after tinkering with Hugo for a while and scratching the surface a bit - I think that Hugo lives up to the promise of static website generators. Its dead simple. At least when you've get a hang of the core concepts.

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
I prefer to have my workspaces decluttered, go ahead and delete "archetypes", "data" and "static" from our "my-site" folder. I will reintroduce them at a later stage when we've got the basics locked down.

