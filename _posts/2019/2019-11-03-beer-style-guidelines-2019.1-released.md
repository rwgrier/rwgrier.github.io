---
layout: post
title: Beer Style Guidelines 2019.1 Released
date: '2019-11-03T14:30:00-05:00'
categories: [ios, app development, beer]
---

This past week, I released a new version of [Beer Style Guidelines](https://apps.apple.com/us/app/beer-styles-bjcp-2015/id998139111?ls=1). It’s the first update to the app in almost two years (Nov 6, 2017). Talk about a neglected app! 

## What’s since the last version
Here’s a full list of the things I’ve changed in the app since the last release. Most of it happening in the last month or so. 

- Tore out [Fabric](https://get.fabric.io)/[Crashlytics](https://fabric.io/kits/ios/crashlytics) (good riddance)
- Set the deployment target for iOS 13+.
- Added Light/Dark mode support. 
- Fixed the search bar (it was broken in iOS 13).
- Fixed a slew of compiler warnings (but not all 😔).
- Fixed a stupid iOS 13 Navigation (title) bar issue.
- Changed the versioning scheme from `major.minor` to `year.release`. 

### Fabric/Crashlytics
This was one of the first things I did in this release. I actually tore it out in March of this year. 

I tore out Fabric/Crashlytics for several reasons. It always made me feel a little gross using it. It’s not owned by me (it’s now owned by Google). I don’t _really_ know what they do with the data. And what they do with the data can change at any moment. They are also shutting Fabric/Crashlytics down early next year, so it’s going away anyway. 

I have written my own analytics reporting engine. I think it’s mostly ready to go. But I’m not certain about it yet and I didn’t want to hold up an already two-year old release for this. For this release (at least), I rely on Apple’s [App Analytics](https://developer.apple.com/app-store-connect/analytics/).  I’m still not certain if/when my own analytics reporting engine will be put in place. For now, I’m focusing on other things. 

### iOS 13+ 
I think this is pretty self explanatory. I want to be able to support the latest and greatest that Apple has to offer. I will probably continue this every year by moving to the latest/greatest iOS version. 

### Light/Dark Mode
I’ve been wanting to add this for a long time. I’ve been tinkering with this off and on (mostly off) for three years. I have a really old branch in my GitHub repo called `themes`. I’ve been wanting to do this for a long time. It’s finally here. 

### Misc iOS 13 Issues/Warnings
This release also has bunch of iOS 13 specific fixes. 

For example, when I upgraded to iOS 13, the search bar was acting silly. I think it was the way I had the list of Style Guide Chapters setup. I had to re-work a number of things to make this work correctly. But it’s all for the better now. 

I also fixed a number of compiler warnings (deprecations mostly) that were introduced since I last worked on the project. I still have 4 or 5 warnings left. I plan on tackling these soon™.

### Version Number Change
My last version was 1.9. This version is 2019.1. This makes sense to me. It’s the first release in 2019. The next version (if this year) will be 2019.2. I took cues from [Curtis Herbert](https://blog.curtisherbert.com) and [Marco Arment](https://marco.org). I think (a small) part of the reason I waited so long for a release was I knew I wanted to call it 2.0, but I wasn’t sure when was a good time to call it done. Now I just plan on adding a new feature or fixing some bugs and shipping it. No more fretting over what’s “enough” for a major release. 

## Website Re-Launch
There was a point in time when I had a website for Beer Style Guidelines. I just don’t know why I 1: let the domain lapse and 2: let it die. 

So, I relaunched the site as [https://beerstyleguidelines.app](https://beerstyleguidelines.app). I’m using the really old design for it. I have plans to update it. But I wanted to get something together for the launch of this version. I also needed to have a privacy policy page together for Apple and the App Store (which is a good thing).

## What’s Next?
I’ve already started on the next version of the app. 

In the app now, I’m using a [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview) to display the guide chapter contents. `UIWebView` has been deprecated by Apple (as of iOS 12) and will eventually be removed from the OS. 

Apple suggests moving to [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) instead which is currently supported by them. However, I’m not sure I want to do that. I was never a fan of using a web view to display the heart of the content to users. There is also a very slight delay in displaying the content for the first time. This slight delay also exists in `WKWebView`. I’ve been toying around with other ways of displaying the data and I think I have a pretty good solution. It currently has some drawbacks that I need to fix before I can even think about shipping this. 

After a few more releases like this (modernizing the app in many places), I also want to start thinking about a macOS app. I also need to get new guides into the app. I currently have 3, but the last “new” guide was added in 2017. It’s almost 2020. Time to get more recent guides in place. 

I already have a short mental list of what I want to change on the website. For starters, I need to add dark mode support. I hope to get that into place in the next week or two. 
