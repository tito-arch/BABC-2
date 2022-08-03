---
title: Hello world my name is netlify cms
date: 2022-08-03T10:12:05.980Z
image: https://source.unsplash.com/random
---
hello don't mind  me am just bieng moved around[](https://unsplash.com/photos/jrb9JCmD01w) <https://source.unsplash.com/random>

backend:

name: git-gateway

branch: master

media_folder: "static/images" # Folder where user uploaded files should go

public_folder: "images"

collections:

\- name: "posts" # Used in routes, e.g., /admin/collections/post

label: "Posts" # Used in the UI

folder: "content/posts" # The path to the folder where the documents are stored

```
backend:
  name: git-gateway
  branch: master
media_folder: "static/images" # Folder where user uploaded files should go
public_folder: "images"
collections:
  - name: "posts" # Used in routes, e.g., /admin/collections/post
    label: "Posts" # Used in the UI
    folder: "content/posts" # The path to the folder where the documents are stored
```