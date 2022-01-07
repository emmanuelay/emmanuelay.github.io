---
date: 2021-02-01
author: Emmanuel Ay
draft: false
title: Getting started with Hugo - the basics
tags: ["hugo"]
---

I wrote this article because I wish somebody already had written it. 
For a total beginner, Hugo seems way more complicated than it actually is. In this article I will explain the core concepts you need to know of to get a basic site up and running - within minutes.

<!--more-->

Static website generators offer flexibility and performance. The trade-off is ofcourse ease of use.
If you have experience from common content management systems you know that there are certain concepts that are somewhat universal, such as **templates** and **content**. In Hugo, these concepts are a bit distorted under terms such as "archetypes", "pages", "themes" and "layouts". Im not a big fan of Wordpress, but I can tell there are conceptual overlaps and influences from it in Hugo. 

In this article I will walk you through the basics of generating a website using nothing but Hugo and your favorite texteditor. After completing this you should be able to continue into the more complicated concepts of Hugo by yourself. 

## Prerequisites & installation

I use mac and [Homebrew](https://brew.sh/) for package management and I assume you do too. 
If you dont - just ensure you have the Hugo CLI installed and ready before skipping to the next step.

If you have a Mac, fire up a terminal and install Hugo using Homebrew:

```sh
brew install hugo
```

This installs the Hugo CLI, which is actually all you need to generate websites. 

## Create a new site

Navigate to a suitable folder for your project, and from there you should be able to initialize a Hugo-project using the Hugo CLI:

```sh
hugo new site my-site
```

This creates the "my-site" folder and sets up the recommended folder structure for a Hugo site:

```sh
my-site
├─ archetypes
│ └- default.md
├─ content
├─ data
├─ layouts
├─ static
├─ themes
└- config.toml
```

## Remove unneccessary folders

I will walk you through the bare minimum to generate a basic website. Most of the folders that come with the "new site" command are not neccessary for our needs.

Go ahead and delete: **archetypes**, **data**, **themes**, and **static** from our "my-site" folder. You should end up with this:

```sh
my-site
├─ content
├─ layout
└- config.toml
```

From here its much easier to explain the basics and start building a website.

## Add content

Go ahead and create two markdown (.md) files in the **content** folder:

```sh
my-site
├─ content
│  ├─ hello.md
│  └- world.md
├─ layout
└- config.toml
```

Now add the following content to **hello.md**:

```sh
---
date: 2021-02-26
author: Your name
title: Hello
draft: false
---

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

This is the world.md file
```

You've created the content that our site contains. In the next steps you are going to create the **templates**.

## Create templates

Templates in Hugo are usually bundled into themes. Themes are usually located in the `themes` folder, but we deleted in order to simplify this tutorial. Truth is, themes are an optional construct. You can use the layout folder directly.

I will explain themes at a later stage, but for this tutorial I will just show you create a basic template to render your content. This template will be placed in the **layouts** folder.

### Layouts folder

The layouts folder has a special organization. 
There is one directory that is mandatory for all Hugo-sites: `_default`, go ahead and create it.
In this folder, there are two files that are mandatory for any Hugo-site: `baseof.html` and `single.html`.

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

### baseof.html

In baseof.html you define the foundational elements of a HTML-page: doctype, html, head, body and the primary navigation.

**baseof.html**
```html
<doctype html>
<html>
	<head>
		<title>{{ .Site.Title }}</title>
	</head>
<body>
	<nav>
		<ul>
			<li><a href="hello">Hello</a></li>
			<li><a href="world">World</a></li>
		</ul>
	</nav>
	{{ template "main" . }}
</body>
</html>
```

There are two template tags present in this file. As you can see they are surrounded with double curly brackets. These commands are evaluated when Hugo generates the site.

The first tag `{{ .Site.Title }}` is replaced with the title of your site. The value is retrieved from your site configuration file. 

The second tag is more interesting. 
It is a placeholder for a *templated area*, which we have named "main". You can call it whatever you like. The single dot `.` after `"main"` is a parameter that  tells Hugo to pass down the Page object to the templated area.

### single.html

**single.html**
```html
{{ define "main" }}

	<h1>{{ .Title }}</h1>
	{{ .Content }}

{{ end }}
```

In the single item template we begin by defining which templated areas this template contains.

In our `baseof.html` file we only had one templated area (called `main`) and we also passed down the Page context using the dot command.

## Site configuration

The **config.toml**-file located in the root of your project folder is where the global configuration of your site is located. This file contains the configuration of your site.
The default **config.toml**-file contains the following basic content:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'
```

You can use this file to hold global content, such as copyright, author information, key words etc.

For example, if you add the following to the `config.toml` file:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

[params]
	Author = "Your name"
```

..the values in the `params` block are available in your templates using:

```html
{{ .Site.Params.Author }}
```