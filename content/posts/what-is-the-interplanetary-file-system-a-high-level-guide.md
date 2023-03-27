+++
author = "BABC"
categories = "Blockchain & Web3"
date = 2023-03-25T21:20:36Z
description = "IPFS is designed as a content-addressed, versioned, peer-to-peer file system."
draft = true
tags = ["IPFS Tutorial", "IPFS explained", "Cryptography", "IPFS"]
title = "What is The Interplanetary File System: A High Level Guide"
[cover]
alt = "bunnie abc"
caption = ""
image = ""

+++
Founded by **Juan Benet** the **Interplanetary File System (IPFS)** is a fancy, alien-like name used to refer to a distributed network of computers to store and share files, providing a more secure and reliable alternative to traditional centralized systems. We have relied on the web for many years when it comes to international communication, and learning skills and Juan thinks it could be in danger. As everything evolves, the web has silently been changing drastically these evolutions remain unknown to many. We are now moving to the third web, a decentralized web version, **Web3**.

## The IPFS explained.

The name IPFS was motivated by what JCR Lick called the  ARPANET, which eventually turned into the Intergalactic network. A network that could work on an Intergalactic scale.

The Hyper Text Transfer Protocol (HTTP)  does many things under the hood, including getting a response to a specific computer as a resource. _Benet argued that since servers sometimes go down causing outages, why don't I just send you what you are asking for if at all I have it?_

**IPFS was then designed as a content-addressed, versioned, peer-to-peer file system.**

If you understand everything to this point, here is a cookie 🍪.

### How does the IPFS work?

When the human species becomes multi-planetary, many questions on latency arise. Since the IPFS allows serving files on a giant peer-to-peer scale, the latency becomes low. When one computer requests a certain resource (image, text) it provides a hash like this: `QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco`   with a hash like this called a **CID (Content Identifier).** Let's take a step back and understand what Content Identifiers are and how files are served.

### Content Identifiers

Content identifiers have been around for years some of them including ISBNs, and URLs generally used to locate a specific resource. When files are uploaded to the IPFS they are assigned a CID unique to them across the network the 