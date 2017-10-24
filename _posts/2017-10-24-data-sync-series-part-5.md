---
layout: post
title: Data Sync Series - Part 5
date: '2017-10-24T17:00:00-04:00'
tags:
- Swift
- sync
- data
- iOS
---	

This is the fifth blog post in my new blog series on data syncing in an app. Links to all of the posts in the series are at the bottom of this post. 

## App Update
I’ve pushed up a new revision of [ListsApp](https://github.com/rwgrier/listsApp) to GitHub. In this revision, I’ve replaced the in-memory version of the persistence layer with a version that uses [Realm](https://realm.io). 

The app itself hasn’t changed at all. The only thing in the app that has changed is the persistence layer. 

I thought about using [CocoaPods](https://cocoapods.org) to do the Realm integration. I’ve used CocoaPods for the last few years. Instead I went with [Carthage](https://github.com/Carthage/Carthage). I wanted to try something new and see how Carthage works. So far I am happy with it. The framework compile times are long, but you only do it once per version, which is nice. 

One thing of note with my use of Carthage. I only committed the `Cartfile` and `Cartfile.resolved`. I did not include the `Carthage/Checkouts` or `Carthage/Build`. I’m not quite sure of what the best practice is there. I just decided to go this way. If this is the wrong way of handling the Carthage files, please let me know.  

## What’s Next?
Ok. Now comes the fun part. It’s time to (finally) start integrating with [CloudKit](https://developer.apple.com/icloud/). Finally, I know!

This has kind of been the entire point of this exercise and I’m finally getting to it. This is also the point in my previous data syncing encounters where I decided to work on something else. I really need to power through this. It’ll probably take me longer than I want, but I want to make sure I get it done. 

## Slowpoke

I know I said I would try to speed things up, I’m trying. It’s tough. We have a lot going on.

This update has actually been done for a little while. I have been sitting on it while I [decide what I do with my site](https://ryan.grier.co/2017/10/20/site-update-my-move-from-tumblr/). The code has been sitting in a branch for over two weeks. I just needed to write this post and move on. 

## Other Posts in the Series
[Part 1](/2017/05/12/data-sync-series-part-1/) | [Part 2](/2017/06/05/data-sync-series-part-2/) | [Part 3](/2017/06/23/data-sync-series-part-3/) | [Part 4](/2017/09/01/data-sync-series-part-4/)