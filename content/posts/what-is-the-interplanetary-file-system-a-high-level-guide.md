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
Founded by **Juan Benet** the **Interplanetary File System (IPFS)** is a fancy, alien-like name used to refer to a distributed network of computers designed to store and share files in a more secure and reliable manner than traditional centralized systems.IPFS is an open-source project that is maintained and developed by a community of contributors.

We have relied on the web for many years when it comes to international communication, and learning skills and Juan thinks it could be in danger. As everything evolves, the web has silently been changing drastically these evolutions remain unknown to many. We are now moving to the third web, a decentralized web version, **Web3**. He later founded **Protocol Labs**.

## The IPFS explained.

The name "**IPFS**" was inspired by JCR Licklider's vision of the **ARPANET** as an "Intergalactic network" that could work on a massive scale.

The Hyper Text Transfer Protocol (HTTP)  does many things under the hood, including getting a response to a specific computer as a resource. _Benet argued that since servers sometimes go down causing outages, why don't I just send you what you need if at all I have it?_

**IPFS was then designed as a content-addressed, versioned, peer-to-peer file system.**

If you understand everything to this point, here is a cookie 🍪.

### How does the IPFS work?

When the human species becomes multi-planetary, many questions on latency arise. Traditionally, we have had only big tech companies owning huge server farms like Google, Amazon, and Microsoft to access information from these servers (Content Delivery Networks) CDNs are used to improve speed. These CDNs are located at different places in different locations. [Read more about CDNs](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/).

Since the IPFS allows serving files on a giant peer-to-peer scale, the latency becomes low. When a computer requests a resource (such as an image or text), it provides a hash code called a **CID** (Content Identifier) like this: `QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco`. This CID is unique to each file uploaded to the IPFS network and is used to locate a specific file or folder which is a fixed-length string of 46 characters (including the prefix 'Qm').

### Content Identifiers

Content identifiers are essential for organizing and managing large amounts of digital content, and their applications include ISBNs, and URLs generally used to locate a specific resource. When files are uploaded to the IPFS they are assigned a CID unique to them across the network this unique character is used to request a specific file or folder.

### IPFS Hashing

The Interplanetary File System uses the SHA-256 hash function to encode files, which outputs 256 bits (equivalent to 32 bytes). If a file is larger than 32 bytes, it is split into smaller pieces called blocks and served as one when a computer requests it. 

An object can be either a single file of 32 bytes or multiple objects that join to form a large file. These small objects are served by different computers (nodes) to the computer that made the request.

While content identifiers are essential for organizing and managing large amounts of digital content, they also present a new problem: Cloudflare for instance now has control over what you see and do not serve any reported files when you access the IPFS gateway using their service. This is to try to centralize the IPFS.

**However, It is important to note that Cloudflare does not have any control over any files already on the system and only controls what files are served through the Cloudflare IPFS gateway.**

For coming this far here is another cookie 🍪