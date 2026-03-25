---
date: 2026-03-25
author: Emmanuel Ay
draft: false
title: Börsdata meets Claude
tags: ["go","mcp","ai"]
---

After building [yahoo-finance-mcp](/posts/yahoo-finance-mcp/) last month, I wanted to do the same thing for Nordic data. I've been using [Börsdata](https://borsdata.se/) for a while to keep tabs on Swedish stocks, so it was the obvious next target.

<!--more-->

The result is [borsdata-mcp](https://github.com/emmanuelay/borsdata-mcp), an MCP server written in Go that gives Claude direct access to the Börsdata API. Stock prices, financial reports, KPIs, insider transactions, dividend calendars — all queryable through conversation.

Setting it up is straightforward. Download the `.mcpb` file from the [latest release](https://github.com/emmanuelay/borsdata-mcp/releases) and double-click it, or install via Homebrew:

```sh
brew tap emmanuelay/tap
brew install borsdata-mcp
```

You'll need a [Börsdata API key](https://borsdata.se/) — some features require Pro+ access.

What makes this interesting is how natural it becomes to explore market data. Instead of clicking through dashboards, you just ask. "Show me insider buys for the last month." "Compare margins for these three companies." Claude handles the API calls behind the scenes.

The project is open source and available on [GitHub](https://github.com/emmanuelay/borsdata-mcp).
