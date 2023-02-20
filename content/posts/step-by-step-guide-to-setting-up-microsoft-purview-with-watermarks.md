+++
author = "P.Gitau"
categories = "Emerging Issues & Trends"
date = 2023-02-20T14:20:06Z
description = "This new microsoft feature will save companies from data breach and protect sensitive information from leaking to unwanted hands"
draft = true
tags = ["Purview labels", "Microsoft"]
title = "Step-by-Step Guide to Setting up Microsoft Purview with Watermarks"
[cover]
alt = "Step-by-Step Guide to Setting up Microsoft Purview with Watermarks"
caption = "image credits: Microsoft"
image = "/uploads/3-watermarking.png"

+++
According to research done by sharfshark and comparitech the study showed that every year there are millions of data leaked every year, e.g. California has suffered the most data breaches than other states in a 15-year period the results also showed that in these breaches more than 5.6 sensitive billion records were exposed between 2005 and 2020. But 2021 was so far the worst year for big companies like Microsoft where 10.8 billion top secret records were leaked.

Other notable breaches in 2021. were

> * Facebook (533 million) records
> * Comcast (1.5 billion) records
> * Byeka (400 million) records
> * Brazilian resident data leak (660 million) records
> * LinkedIn (500 million) records

But since all this is happening we have to ask ourselves who leaks this data, how can we protect our company data from being such victims, and let's say our data is leaked can we trace it back to whoever leaked it. so join me in this journey as we talk a look at some of the new protection features Microsoft has put into place to keep companies' information safe.

# What is Microsoft Purview?

It's an intelligent solution that helps protect your data from loss and govern your data whenever you share it. Remember you need to have Microsoft E5 llicense to enjoy full capabilities and protections.

Data is the most valuable asset in every organization and when data is not safe or falls in the wrong hands it can be very dangerous, Microsoft knows this that's why they have several measures that you can take. to make sure your organization's data is safe. one method is setting up **Microsoft Teams meeting protection with watermarks.** This makes sure that all the sensitive information cannot be leaked since the screen is filled with watermarks that show your email address on the presentation feed. This simple but helpful feature helps organizations keep their conversation safe and private. But also in case of data leakages, it can be used to trace back the leak because of the email watermarks all over the screen.

## How to set up Microsoft purview with watermarks

As I said before you need to have a premium subscription to an E5 license. After being approved, navigate to the Microsoft purview portal. Under the **information protection page** click **labels** and then below you will see an option to Simply set up a **new sensitivity label**. You will also be required to put a name and meeting description which will enable other users to know what the label is all about.

Under the **define scope,** make sure you include meetings since this helps configure protection in all your files automatically without having to do it again. You can leave the other options as default. 

and click next where you will be redirected to the configure encryption page. Make sure you choose **protect teams and meetings** chats, which is exactly what we want in this tutorial. Remember this setting will apply to this meeting. and you will have to redo it again for other meetings. I also love what Microsoft has done here under settings for **teams and meetings** since the admin can control end-to-end encryption for video and audio meetings. 

This is the same place we are going to apply watermarks to shared content or in every user presentation feed. Make sure all these options are checked and leave the other ones as default. Remember to prevent users from copying chat content from the clipboard Since that option is there why not use it because the main aim here is to make sure all the data shared is encrypted and safe.

After checking everything is fine, click the publish button and share the label with all your organization users.

## How to use Microsoft purview labels from the user's perspective

Navigate to the Outlook app and since I am assuming it's not your first time using outlook, go to meetings where you will be provided with options to select the label you want to use for your meeting. It's purely optional, but make sure you choose the encrypted label which was provided by your meeting admins.