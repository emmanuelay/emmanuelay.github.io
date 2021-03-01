---
date: 2021-02-01
author: Emmanuel Ay
draft: false
title: Getting started with Hugo - the basics
tags: ["hugo"]
---

I wrote this article because I wish somebody already had written it. Instead I had to spend a weekend to learn the basics of Hugo. Because initially - Hugo seems way more complicated than it actually is! I believe that the documentation plays a large part in that. After tinkering with Hugo for a while and grasping the core concepts - I think that Hugo lives up to the promise of static website generators: flexibility, simplicity and performance.

<!--more-->

If you have experience from other content management systems you know that there are certain concepts that are somewhat universal, such as **templates** and **content**. In Hugo, these concepts are distorted under terms such as "archetypes", "pages", "themes" and "layouts". Im not a big fan of Wordpress, but I can tell there are conceptual overlaps and influences from it in Hugo.

In this article I will walk you through the basics of generating a website using nothing but Hugo and your favorite IDE. After completing this you should be able to continue into the more complicated concepts of Hugo by yourself. 

## Installation and set up

Prerequisites:
* Unix-based OS (macOS preferred)
* Homebrew package manager

Start a terminal and install Hugo using Homebrew:

```sh
brew install hugo
```

This installs the Hugo CLI, which is all you need to generate websites. 

Navigate to a suitable folder for your project,  and from there you should be able to initialize a Hugo-project using the Hugo CLI:

```sh
hugo new site my-site
```

This creates the "my-site" folder and sets up the recommended folder structure for a Hugo site. Its quite a handful:

```sh
my-site
├─ archetypes
├─ content
├─ data
├─ layouts
├─ resources
├─ static
├─ themes
└- config.toml
```

## Remove the unneccessary

I will walk you through the bare minimum to generate a basic website, most of these folders are not neccessary for our needs.

Go ahead and delete the following folders **archetypes**, **data**, **themes**, and **static** from our "my-site" folder. You should end up with this:

```sh
my-site
├─ content
├─ resources
├─ layout
└- config.toml
```

From here its much easier to explain the basics and start building a website.

## Add content

Go ahead and create two markdown files in the **content** folder:

```sh
my-site
├─ content
│  ├─ hello.md
│  └- world.md
├─ resources
├─ layout
└- config.toml
```

Add the following content to **hello.md**:

```sh
---
date: 2021-02-26
author: Your name
title: Hello
draft: false
---

# Hello
This is the hello.md file
```
..and this to the **world.md** file:

```sh
---
date: 2021-02-26
author: Your name
title: World
draft: false
---

# World
This is the world.md file
```

You've created the content that our site contains. In the next steps you are going to create the **templates**.

Hugo has a templates concept, and it can optionally encapsulate templates into themes aswell.
But for our example, I will not explain themes but just show you a basic template in the default template folder: **layouts**.

## Basic templating in Hugo: layouts and _default

The layouts folder has a special organization. 
There is one directory that is mandatory for all Hugo-sites: **_default**, go ahead and create it.
In this folder, there are two files I consider mandatory for any Hugo-site: baseof.html and single.html.

You should have a folder structure that looks like this:

```sh
my-site
├─ content
│  ├─ hello.md
│  └- world.md
├─ resources
├─ layout
│  └- _default
│    ├─ baseof.html
│    └- single.html
└- config.toml
```

## baseof.html

In baseof.html you should define the foundational elements of a HTML-page: doctype, html, head, body and the primary navigation.

**baseof.html**
```html
<doctype html>
<html>
	<head>
		<title></title>
	</head>
<body>
	<nav>
		<ul>
			<li><a href="/hello">Hello</a></li>
			<li><a href="/world">World</a></li>
		</ul>
	</nav>
	{{ template "primary" . }}
</body>
</html>
```

**single.html**
```html
<h1>{{ .Title }}</h1>
{{ .Content }}
```

## Site configuration - config.toml

The **config.toml**-file located in the root of your project folder is where the global configuration of your site is located. This file contains the base URL along with a range of global settings for your site.


