---
layout: post
title: Summer 2019 Development Goals
date: '2019-07-19T12:30:00-05:00'
tags: []
---

I’ve made a set of goals for the Summer. In the recent past I have been bad about making goals. I’ve been so busy with life, that I’ve just tried hanging on and making it through. 

This Summer, I want to do some quality development work on both [MyCntdwn](https://apps.apple.com/us/app/mycntdwn/id293970065?ls=1) and [Beer Style Guidelines](https://apps.apple.com/us/app/beer-style-guidelines/id998139111?ls=1). The thing is that I say this every Summer. And for the last few Summers, I haven’t done enough quality work to ship anything.  I’ve even gone as far as committing to a [Data Sync Series](https://medium.com/@rwgrier/data-sync-series-part-1-bb492efebab9) which I eventually gave up on. 

It’s been tough the last few years. I have a lot of things that I want to do, but I haven’t made this development work a priority. Other things in life have been a higher priority (work, family, etc). They still are, but this Summer I am going to do a better job of removing the time wasters. Instead of vegging out and watching a series of stupid TV shows in the evening, I’m going to do more development work. 

I’ve decided that if I don’t do some good work and actually ship app updates this Fall, I’m going to stop development on these apps. It’s not fair to the small number of users I have to keep these apps in the Apps Store and not properly support them. 

So far I’ve made some nice progress. 

I’ve torn out all 3rd party analytic support in favor of one that I’ve written myself. This in itself has been a year-long project (with long breaks). This one I’ve written allows me to have much finer control over what’s being sent to my analytics backend. There’s no sneaky stuff going on there. And the users can easily turn all analytics tracking off. 

I’ve also enabled [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/) support for both apps. I already had support for this in MyCntdwn. But now that it’s supported at the OS level, I was able to rip out a bunch of code I no longer need. 

I’m currently tinkering with [SwiftUI](https://developer.apple.com/xcode/swiftui/) and seeing if I can replace a bunch of UI-based code and Storyboards with SwiftUI. Early indications are that I will be able to. I’m not 100% certain yet. I need to do more exploration with SwiftUI. 

Next on my list will be to support data sync. It looks like they’ve made that much easier in iOS 13. But I’m not there yet. So I’m not going to get my hopes up with it. 

And if this all works out nicely. I may even try to make them both macOS apps with [Catalyst](https://developer.apple.com/ipad-apps-for-mac/). But this is _way_ down the road for me. 

As you can see I’ve got some lofty development goals here. I just hope I can make them enough of a priority in my life to get them done. Honestly, I’d be happy shipping what I’ve done already when it’s time. But I want to do more. Stay tuned to see if I actually follow through on these plans.  

