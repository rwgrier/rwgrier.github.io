---
layout: post
title: 'UIKeyCommand — Part 2: Split View Controller'
date: '2021-04-26T19:45:00-04:00'
categories: [ios, app development]
---

In the [first post](/2021/04/21/uikeycommand-part-1/) in this UIKeyCommands series, we went over the basics of UIKeyCommands and adding keyboard shortcuts to an app. Adding keyboard shortcuts to a real app can be a little more complicated, but not much. 

## First, some background

My latest update of [Beer Style Guidelines](https://www.beerstyleguidelines.app) has these keyboard shortcuts reenabled. A long time ago, I had keyboard shortcuts enabled within the app. At that time, I didn’t have a clear understanding of how they worked. This lack of understanding meant that the keyboard shortcuts didn’t quite work the way I expected them to (or at all sometimes). 

I became frustrated with my lack of understanding and I just disabled the keyboard shortcuts. I didn’t have a lot of time to investigate and figure out what was wrong. But I was determined to figure it out. Recently, I had purchased an [iPad Air](https://www.apple.com/ipad-air/) (4th Generation) and an [Apple Magic Keyboard](https://www.apple.com/ipad-keyboards/). This gave me the kick in the butt to get the keyboard shortcuts working again. 

Getting the keyboard shortcuts working wasn’t a lot of work. I just lacked an understanding of how to put it all together. I hope to impart some of that wisdom in this post. 

Beer Style Guidelines has a [Split View Controller](https://developer.apple.com/documentation/uikit/uisplitviewcontroller) view architecture. 

![Split View Controller Wireframe](/public/images/2021-uikeycommand-2/wireframe.png)

In my first iteration of keyboard shortcuts, I had two or three commands. They were all triggered from the Detail View Controller (the large part of the screen). I wanted to add more keyboard shortcuts, but I was paralyzed with not knowing how to proceed.

Ok. So, what was holding me up? I wasn’t sure which view controller in the app I needed to implement the keyboard command. Did I need to add them all to my Split View Controller class? Did I need to implement the commands in one view controller or the other, based on a user’s focus? 

I started by adding the commands to the split view controller class. But it turns out that isn’t the correct answer. The correct answer is that you implement the keyboard commands wherever you need them, and let the [Responder Chain](https://developer.apple.com/documentation/uikit/touches_presses_and_gestures/using_responders_and_the_responder_chain_to_handle_events) take care of the rest.

## Responder Chain? What? 

In iOS, there is this thing called the responder chain. The responder chain is how iOS (and UIKit) determine how to handle events. This chain starts with the first responder and then traverses the rest of the chain looking to handle the event. In the case of UIKeyCommands, UIKit will traverse the responder chain and collect the UIKeyCommands for the current scenario. 

This WWDC video ([Support hardware keyboards in your app)](https://developer.apple.com/wwdc20/10109 "Support hardware keyboards in your app") does a fantastic job of explaining all of this. It’s also super short. I only discovered the video _after_ I figured out how this works. 

You may have noticed that the `UIApplicationDelegate` class (usually called AppDelegate) is a subclass of `UIResponder`. What you may not have noticed is that all `UIViewControllers` and even `UIViews` subclass `UIResponder`. 

## Back to UIKeyCommand
Getting back to where to implement the keyboard shortcuts. I ended up implementing the keyboard shortcuts for the list view (search, change guide, etc), in the list view controller. The keyboard shortcuts used in the detail view controller (like toggle favorite, next/previous section, etc) were implemented there. 

Like in part one, I’ve created a [sample app](https://github.com/rwgrier/UIKeyCommand-series/tree/part-2-splitview) to put this into practice. This sample app uses a Split View Controller and implements keyboard shortcuts where it makes sense. The sample app only has a few keyboard shortcuts. 

The list view controller has two keyboard shortcuts and so does the detail view controller. 

You may notice something strange about these keyboard shortcuts. Both have the “Show Info” keyboard shortcut. I did this as a test more than anything. I wanted to see what would happen if there are duplicate keyboard shortcuts. Likewise, I also wanted to see where this was called from when triggered. I discovered that found that the keyboard shortcut in the detail view controller usually wins. I think that’s because it’s the first responder in the chain that responds to this command.  

This may feel a bit overwhelming. But it’s not very difficult. The sample app should give you a better idea of how easy it is to implement keyboard shortcuts in a split view controller. 

There’s one more post in this series. Next time, we’ll stray away from iOS slightly to use UIKeyCommands to add menu items to a macOS Catalyst app. 

## Other Posts in the Series
[Part 1](/2021/04/21/uikeycommand-part-1/) 
