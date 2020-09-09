---
layout: post
title: Data Sync Series - Part 3
date: '2017-06-23T17:00:00-04:00'
categories: [development, sync-series]
---

This is the third blog post in my new blog series on data syncing in an app. Links to all of the posts in the series are at the bottom of this post. 

So. I’ve got an idea for an app. It’s not a great idea. It’s not original. It won’t make me a penny. But I think it will work well for this series on data syncing. 

My daughter gave me the idea for a shared family grocery list. She wanted fruit snacks from the grocery store. I kept forgetting to pick them up, and she said we should have a shared list for groceries. I know there are other apps out there for this, but I needed an idea for this series. 

## The App
The app will be a series of lists. You can use them as TODO lists, or shopping lists, etc.  

Lists can be either private and shared. Private lists will be your own thing that no one else can see. Shared lists will be able to edited by multiple people that you’ve shared the list with. 

Here’s a quick wireframe of what this simple app may end up looking like. 

![](/public/data_sync_images/lists-app-wireframe.png)

There’s not a lot going on. There doesn’t really need to be. The important part of this app is that there is data to be synced between devices and shared between users. 

## More App Details
The app will be written entirely in Swift 4 in Xcode 9. The deployment target for the app will be iOS 11. There’s really no need to work with anything else in this project. 

I’ll be using [CloudKit](https://developer.apple.com/icloud/) and either [Core Data](https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/CoreData/) or [Realm](https://realm.io). I haven’t fully committed to Core Data or Realm as the persistence model. I’ve used CoreData for numerous projects in the past. We use Realm at my day job, I would mind learning more about it. 

This will be an app for both iPhone and iPad. These days that should really be self explanatory, but I thought I would mention it anyway. Depending on how things go, I may make it available for the Apple Watch too. 

## What’s Next?
The next step is for me to start building this thing. Once I get something very basic in place, I’ll be publishing it to GitHub in my repo for this project calls [listsApp](https://github.com/rwgrier/listsApp). 

## Notes:
I used this Sketch Resource to build the wireframe above: [Mobile UI Wireframe Kit Sketch Resource](https://www.sketchappsources.com/free-source/2162-mobile-ui-wireframe-kit-sketch-freebie-resource.html)

## Other Posts in the Series
[Part 1](/2017/05/12/data-sync-series-part-1/) | [Part 2](/2017/06/05/data-sync-series-part-2/) | [Part 4](/2017/09/01/data-sync-series-part-4/)