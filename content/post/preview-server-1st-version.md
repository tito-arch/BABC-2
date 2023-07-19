---
title: Preview server 1st version.
date: 2023-07-19T12:53:09.831+03:00
draft: true
description: As you can see, you are able to perfectly see the blog and also view drafts.
cover-photo: bunnie abc
categories: App Updates
tags:
  - "#beyondBABC-blog"
  - bunnie
  - Preview server
  - Internal
author: M.I.Titus
---
In this internal document, I take you through the preview version (preview server).

**Preview sever summary**

| | |
|---|---|
|Preview server:|[[https://beyond-babc.web.app/](https://beyond-babc.web.app/)](https://beyond-babc.web.app/)|
|CMS Guide:|[See here](https://scribehow.com/shared/Guide_to_Adding_Editing_and_Formatting_Content_in_CMS__ELLOXI4uQweyk3BjwlhnpQ)|
|The time it takes to update:|**54 seconds**|

Preview because you can view posts that are not yet released to the general public and hence accessible through search.

Basically, there is one thing that changes, -the build command.

Generally, when you write a post it's saved as a draft and ignored at build time, refer to the CMS guide, to make drafts visible which is necessary to preview the post to avoid publishing errors to the live site, the same version of the site is deployed to Firebase in an unscale-able fashion as modifications are made at build time.

one of the modifications made is the build command:

while deploying to the live site we use the build command  `build` which builds all files whose draft value is set to false ie: `draft = false`.

For the preview server two flags are added, `— build drafts` and `—baseURL` deploy is handled by a Github action so that when a push is detected everything is rebuilt and deployed to Firebase.

![](/uploads/screenshot-from-2023-07-19-13-16-02.png)
Feel free to edit this post.

| | |
|---|---|
| | |




