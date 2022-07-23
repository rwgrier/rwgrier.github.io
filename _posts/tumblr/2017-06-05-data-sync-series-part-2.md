---
layout: post
title: Data Sync Series - Part 2
date: '2017-06-05T17:30:28-04:00'
categories: [ios, app development]
tumblr_url: http://ryan.grier.co/post/161480570104/data-sync-series-part-2
---
This is the second blog post in my new blog series on data syncing in an app. You can read the first one [here](/2017/05/12/data-sync-series-part-1/). This took me a little longer than I wanted, I got busy with the kids and end of year school stuff for them. Sorry for any delay.

In this post, I’m going to take a look at the various types of data synchronization that exist and outline which one I’ll be using in the new app that I develop.

A lot of the data synchronization technique information listed here is taken from this excellent article on [Objc.io](https://www.objc.io) called [Data Synchronization](https://www.objc.io/issues/10-syncing-data/data-synchronization/) by [Drew McCormack](https://twitter.com/drewmccormack). He does a great job of explaining this topic. Some of the example services in his post no longer exist, but the concepts are solid.

## Synchronization Types

At a very high level, there are two types of data synchronization. Both of the synchronization types can be either synchronous or asynchronous. This technically makes four types of synchronization methods. The two types are Client-Server and Peer-to-Peer synchronization.

## Client-Server Synchronization

The client-server approach means that there is a server which acts as the source of truth. Not only does the server act as the source of truth, it also has some “smarts” built in to handle any conflicts that may come up.

In many of the applications that I have developed as an iOS Engineer have used a Synchronous Client-Server model. The server (or set of servers) act as a source of truth. The clients request the latest data from the server. But any changes to the data are immediately sent to the server for processing.

An Asynchronous Client-Server model works just like the synchronous version, except there is an in-app (local) copy of the data. This is usually a third party solution that gets integrated into your app. Any third party solution here, takes care of syncing with a server. The application’s interaction with the data should remain the same as the synchronous version of this model.

## Peer-to-Peer Synchronization

Peer-to-Peer synchronization means that there isn’t a “smart” server in place, the syncing and any conflict resolution is handled by the clients.

Synchronous Peer-to-Peer is old school. It was used largely for syncing things like devices (iPods, etc). Clients (or peers) communicate with each other synchronously.

In an Asynchronous Peer-to-Peer model, the clients communicate with each other, figure out the most accurate data (or “truth”) and deal with any conflicts that may arise. The only data that is often passed between clients (and “the cloud”) are transactional logs, or what’s changed in the data.

## Conflict Resolution

I mentioned conflicts a few times earlier. What are they? A conflict is when the same data is changed in two different locations. The server or clients, need to know how to resolve the conflict. There are a few ways to do that, but I’ll save that for another post.

## Our Synchronization

For the exercise that I outlined in my [previous post](/2017/05/12/data-sync-series-part-1/), I’ll be using an asynchronous peer-to-peer model. I think that this model is ideal for iOS (and other mobile) clients. This allows for the most flexibility in a (still) questionably connected world.

The cloud storage mechanism we’ll be using is CloudKit. In the past, I’ve wanted to use Core Data iCloud Sync. Using CloudKit isn’t a huge departure from that desire to stick with Apple technologies. CloudKit has been reported as a solid technology.

## Wrapping Up

I did not go into great detail about the various synchronization types. Drew already did a very good job of that in his article. I wanted to give  much briefer overview.

This is how I understand these syncing types. If I’m wrong, or misguided, please feel free to let me know. I’ll be happy to make any corrections.

In the next post, I’ll be discussing the app itself. I have the rough idea for a new app in my mind. The details haven’t been completely worked out yet, but I’m OK with the details changing.

Soon enough the real work (and fun) will begin.

## Other Posts in the Series
[Part 1](/2017/05/12/data-sync-series-part-1/) | [Part 3](/2017/06/23/data-sync-series-part-3/) | [Part 4](/2017/09/01/data-sync-series-part-4/)
