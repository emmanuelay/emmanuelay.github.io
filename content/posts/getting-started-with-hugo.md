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

I will walk you through the bare minimums to generate a basic website. Most of the folders that come with the "new site" command are not neccessary for our needs.

Go ahead and delete: **archetypes**, **data**, **themes**, and **static** from our "my-site" folder. You should end up with this:

```sh
my-site
├─ content
├─ layout
└- config.toml
```

From here its much easier to explain the basics of building a website with Hugo.

## Content

Go ahead and create three markdown (.md) files in the **content** folder:

```sh
my-site
├─ content
|  ├─ _index.md
│  ├─ hello.md
│  └- world.md
├─ layout
└- config.toml
```

### _index.md
Now add the following content to **_index.md**:

```sh
---
date: 2021-02-26
author: Your name
title: Home
menu: main
draft: false
---

This is the _index.md file, which is the root page of your site.
```

### hello.md 

And add the following content to **hello.md**:

```sh
---
date: 2021-02-26
author: Your name
title: Hello
menu: main
draft: false
---

This is the hello.md file
```

### world.md

..and this to the **world.md** file:

```sh
---
date: 2021-02-26
author: Your name
title: World
menu: main
draft: false
---

This is the world.md file
```

You've created the content that your site contains. 
The metadata in the top of the markdown files is called `frontmatter` and Hugo has a [range of variables](https://gohugo.io/content-management/front-matter/) that lets you control different aspects of your content. 

In the content defined above, there are two notable frontmatter tags that deserves an explanation: `menu` and `draft`.
Menu defines which menu the content belongs to. I have used `main` just to explain the concept, but you could essentially call it whatever you like. 
Draft is a boolean which controls the state of the content, if its set to `true` - the content wont be rendered.

In the next steps you are going to create a template to render this content with.

## Themes & templates

Templates in Hugo are usually bundled into themes. Themes are located in the root `themes` folder of your project. But for the sake of simplicity we deleted that folder since it is an optional construct. 

Instead, we will use the **layout** folder to contain our templates.

I will explain themes at a later stage, but for this tutorial I will just show you create a basic template to render your content. 

### Layouts folder

The layouts folder has a special organization. 

In it there is one folder that is mandatory for all Hugo-sites: `_default`, go ahead and create it.
In this folder, there are two files that are needed: `baseof.html` and `single.html`.
And the last template file we need to create should be located in the root of your layout folder, it is for the home page of your site: `index.html`.

You should have a folder structure that looks like this:

```sh
my-site
├─ content
│  ├─ _index.md
│  ├─ hello.md
│  └- world.md
├─ layout
│  ├- _default
│  │ ├─ baseof.html
│  │ └- single.html
│  └- index.html
└- config.toml
```

### baseof.html

In baseof.html you usually put the foundational elements of a HTML-page: `doctype`, `html`, etc.

```html
<doctype html>
<html>
	<head>
		<title>{{ .Site.Title }}</title>
	</head>
<body>
	<nav>
		<ul>
			{{ range .Site.Menus.main }}
			<li><a href="{{ .URL }}">{{ .Name }}</a></li>
			{{ end }}
		</ul>
	</nav>
	{{ template "main" . }}
</body>
</html>
```

There are three template commands present in this file. As you can see they are surrounded with `{{` double curly brackets `}}`. These commands are evaluated when Hugo generates the site.

**Variable**

The first tag `{{ .Site.Title }}` is a variable, which is replaced with the title of your site. The value is retrieved from your site configuration file. 

**Range iterator**

The second tag is a range iterator. 
It iterates over the items in the `.Site.Menus.main` collection and renders the encapsulated `li`-element block.

Remember the `menu` frontmatter tag that was included in all content files? This is where its put to use, each piece of content that has the frontmatter tag `main` is included in the `.Site.Menus.main` collection.

**Templated area**

The third tag is a placeholder for a *templated area*, which we have named "main". You can call it whatever you like. The single dot `.` after `"main"` is a parameter that  tells Hugo to pass down the current page context to the templated area.

### single.html

Lets move on to the first actual template. 

```html
{{ define "main" }}

	<h1>{{ .Title }}</h1>
	{{ .Content }}

{{ end }}
```

In the single item template we begin by defining which templated areas this template contains.

In our `baseof.html` file we only had one templated area (called `main`) and we also passed down the Page object using the dot command. That is how the tag `{{ .Title }}` in this template gets its value.

### index.html

```html
{{ define "main" }}

	<h1>{{ .Title }}</h1>
	{{ .Content }}

{{ end }}
```

The index.html template relies on the same principles as the single.html template. 
The reason that we separate them is to be able to have different templates for the home page and content pages.

## Site configuration

The **config.toml**-file located in the root of your project folder is where the global configuration of your site is located. This file contains the configuration of your site.
Besides title and locale, it controls how your site is rendered.
By default, Hugo assumes you want to render RSS and sitemap with your site. Disable it by using the `disableKinds` parameter:

```toml
baseURL = 'http://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'

// Add this to your file 
disableKinds = ["rss", "sitemap"]
```


## Generating a site

You're now ready to start generating your site.

To try your site out, run the following command the root of your `new-site` folder:
```sh
hugo 
```

..the site is now generated and available in the `public` folder:
```sh
my-site
├─ content
│  └- ...
├─ layout
│  └- ...
├─ public
│  ├- index.html
│  │ ├─ hello
│  │ │ └- index.html
│  │ └- world
│  │ │ └- index.html
│  └- index.html
└- config.toml
```

To try the site out locally, Hugo has a development server you can use:

```sh
hugo server
```
..which will show you the build process and start the development server:
```sh 
Start building sites … 
hugo v0.91.0+extended darwin/amd64 BuildDate=unknown

                   | EN  
-------------------+-----
  Pages            |  4  
  Paginator pages  |  0  
  Non-page files   |  0  
  Static files     |  0  
  Processed images |  0  
  Aliases          |  0  
  Sitemaps         |  1  
  Cleaned          |  0  

Built in 5 ms
Watching for changes in /Users/.../{content,layouts}
Watching for config changes in /Users/.../config.toml
Environment: "development"
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

Open up a browser and navigate to the URL that the command returns (usually something like `http://localhost:1313/`)

