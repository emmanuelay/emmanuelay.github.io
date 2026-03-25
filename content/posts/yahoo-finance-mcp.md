---
date: 2026-02-18
author: Emmanuel Ay
draft: false
title: Stock data in your terminal
tags: ["go","mcp","ai"]
---

I wanted a way to pull stock data directly into Claude without leaving the terminal. So I built [yahoo-finance-mcp](https://github.com/emmanuelay/yahoo-finance-mcp) — an MCP server that connects Yahoo Finance to any LLM that supports the [Model Context Protocol](https://modelcontextprotocol.io/).

<!--more-->

Yahoo Finance has publicly available data and no API key required, which makes it a good starting point. This was my first MCP server — the experience ended up being smooth enough that I later built [borsdata-mcp](https://github.com/emmanuelay/borsdata-mcp) for Nordic-specific data.

The server exposes 14 tools — quotes, historical charts, financials, options chains, analyst recommendations, news, and more. You can ask Claude things like "compare AAPL and MSFT margins over the last year" and it just works.

Getting started is quick. Install via Homebrew:

```sh
brew tap emmanuelay/tap
brew install yahoo-finance-mcp
```

Then add it to Claude Code:

```sh
claude mcp add yahoo-finance -- yahoo-finance-mcp
```

That's it. No API keys, no configuration files to dig through.

One thing I appreciate about MCP is how it turns conversational prompts into structured API calls behind the scenes. Instead of building a dashboard or writing scripts to pull data, you just ask for what you need. It changes the workflow more than I expected.

The project is [on GitHub](https://github.com/emmanuelay/yahoo-finance-mcp) and MIT licensed.
