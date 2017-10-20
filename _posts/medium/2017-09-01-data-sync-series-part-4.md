---
layout: post
title: Data Sync Series - Part 4
date: '2017-09-01T17:00:00-04:00'
tags:
- swift
- sync
- data
- ios
---

This is the fourth blog post in my new blog series on data syncing in an app. Links to all of the posts in the series are at the bottom of this post. 

## Where Have I Been?
I know it’s been a while since I’ve posted anything or done any work on this series. Life has gotten in the way. This Summer has been a pretty rough ride for my family. I thought that I would have this series finished by now. But family is more important than any blog series that I could work on. 

Sorry for the delay. I should be able to get back on track now

## App Update
I’ve pushed up the initial version of [ListsApp](https://github.com/rwgrier/listsApp) to GitHub. It’s a very very bare bones iOS app. It was built with various versions of the Xcode 9 beta and Swift 4. 

The app has a series of lists. Each list contains items. You can add/delete lists and items. Very simple, I know. It’s supposed to be simple(ish). I don’t want to complexities of an app to get in the way of the syncing mechanism. But I also wanted the app to be a bit more than something I can store in something like iCloud’s [NSUbiquitousKeyValueStore](https://developer.apple.com/documentation/foundation/nsubiquitouskeyvaluestore). 

The data within the app is all stored in memory, so nothing is persisted. When you restart the app, the sample data reloads. There is also no syncing mechanism in place. Baby steps. I wanted to get the bones of the app in place. Now I can start with the next steps. 

## What’s Next?
The next step is for me to remove the in-memory data source and replace it with an actual persistence layer. I think I’m going to move forward with Realm for my persistence layer.

I also need to clean up the code a bit. I worked on this code in a very haphazard fashion. I worked on it when I could this Summer. 30 minutes here and there. This means that I could have missed something or committed something that was meant to be temporary (or sloppy). 

At some point in this project, I want to add unit testing. I used to be a real proponent of unit testing (back in my enterprise Java days). Since I’ve moved to iOS, Objective-C and Swift I’ve really gotten bad about unit testing. I need to learn how to do this properly. 

## Realm? Why?
We use Realm at my work for our persistence layer. I’ve used Core Data in the past, but I want to (and should) get more experience with Realm. 

I could start down this path and change my mind. Or I could get adventurous and develop multiple persistence layers that you can pick. But if it took me this long to get where I am, I wouldn’t get my hopes up. That’s just a long way of saying I may change my mind.  

## My Hope
I really hope this next phase takes less time than it did to develop the base app. I feel pretty bad about this series taking this long. But sometimes life just gets in the way. 

## Other Posts in the Series
[Part 1](/2017/05/12/data-sync-series-part-1/) | [Part 2](/2017/06/05/data-sync-series-part-2/) | [Part 3](/2017/06/23/data-sync-series-part-3/)