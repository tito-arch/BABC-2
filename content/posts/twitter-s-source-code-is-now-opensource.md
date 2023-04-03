+++
author = "BABC"
categories = "Emerging Issues & Trends"
date = 2023-04-03T18:48:47Z
description = "As promised by Elon, Part of Twiter's code is now Open Source. Twitter is now the Linux of Social Media."
tags = ["Open Source", "Twitter", "Elon Musk"]
title = "Twitter's Source code is now OpenSource"
[cover]
alt = "bunnie abc"
caption = ""
image = "/uploads/twitter-banner.png"

+++
About six months ago, Elon Musk paid 44 Billion Dollars for the Twitter acquisition, since then Elon Twitter's CEO has done and said a lot of bizarre things: He fired half of the employees -some of them in the comment section gave blue check marks to the underserved and unbanned some accounts -like Donald Trump.

With all this happening, the platform seemed to tank daily making its value $20 billion or in simple words, -24 Billion Dollars of its initial worth.

## You have  to pay for a Twitter checkmark

Elon announced that everyone would have to pay $8 for a blue checkmark and businesses would have to pay $1,000 for a golden checkmark. However, a couple of people and companies declined the idea of paying for a verification badge. The New York Times for example declined to pay stating that it no longer represented authority and expertise and rather represents something someone just paid to acquire.

Elon commented on this saying that The New York Times was being hypocritical as it also asks people to pay for subscriptions. He then jokingly said "**We'll take it off then**" he then added

> "**The real tragedy of** [@NYTimes](https://twitter.com/NYTimes) **is that their propaganda isn’t even interesting. Also, their feed is the Twitter equivalent of diarrhea. It’s unreadable. They would have far more real followers if they only posted their top articles. The same applies to all publications**"

and that's it NYTimes was stripped of its badge after a few days.

![](/uploads/screenshot-from-2023-04-03-23-12-56.png)

## Why is Elon the most Followed on Twitter?

Recently, Elon became the most followed on Twitter beating Barrack Obama. Some said that he ordered Engineers to hardcode everything. Before the Twitter acquisition deal, he had earlier indicated that twitter's source code should be Open Sourced and placed on GitHub so that anybody with doubts could check it out - which he did, exposing Twitter's clean code written in Scala, a JVM language that is kinda Java but concise and way better for building scalable applications.

## But why did Elon choose to expose the Twitter source code?

![](/uploads/screenshot-from-2023-04-03-23-52-26.png)

It makes him the cool guy, users can read the code and complain when it's unfair yet a marketing strategy to build trust. Many people consume news from Twitter, therefore, earning people's trust is very essential rather than them thinking of it as an app that boosts certain posts.

Here is part of the code.

### Twitter's Recommendation Algorithm

> Our recommendation system is composed of many interconnected services and jobs, which we will detail in this post. While there are many areas of the app where Tweets are recommended—Search, Explore, Ads—this post will focus on the home timeline’s For You feed.
>
> **_\~Twitter_**

![](/uploads/open-algorithm-png-img-fullhd-medium.png)

**Here is part of the code.**

{{< github-code-snippets 0c318ba491f926abbb194eb62ebeacdf >}}

Of course, this is just part of the code, the rest can be found in the file [TheAlgorithim/ForYouScoredTweetsMixerPipelineConfig](https://github.com/twitter/the-algorithm/blob/main/home-mixer/server/src/main/scala/com/twitter/home_mixer/product/for_you/ForYouScoredTweetsMixerPipelineConfig.scala) the repository is of course [the-algorithm ](https://github.com/twitter/the-algorithm)just don't get lost there that thing is wide, geez!