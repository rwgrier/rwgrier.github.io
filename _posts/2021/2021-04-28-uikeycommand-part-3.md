---
layout: post
title: 'UIKeyCommand — Part 3: macOS Catalyst Menu Items'
date: '2021-04-28T19:30:00-04:00'
categories: [ios, app development]
---

This is the final post in a series on adding UIKeyCommands (keyboard shortcuts) to an iOS app. In this post, we’ll cover how to add menu bar items to a macOS Catalyst app using UIKeyCommands. 

This will not be a full tutorial on how to add menu items to macOS Catalyst apps. Instead, this post will demonstrate that you can use the same keyboard shortcuts created in [part two](/2021/04/26/uikeycommand-part-2/) and create menu items. 

In macOS Catalyst apps, your `UIApplicationDelegate` class (usually `AppDelegate`) will configure the menu bar. This is handled in the `func buildMenu(with builder: UIMenuBuilder) ` method ([documentation](https://developer.apple.com/documentation/uikit/uiresponder/3327317-buildmenu)). In this method, you can add and remove menu items and sub menu items. 

You can download the corresponding sample app [here](https://github.com/rwgrier/UIKeyCommand-series/tree/part-3-catalyst) (the branch is `part-3-catalyst`). I slightly refactored the code that creates the UIKeyCommand to be a class level variable on the two view controllers. They can now be easily accessed like: `TableViewController.showTableAlert`. 

Use the existing UIKeyCommand objects in a UIMenu initializer and then added to the builder object in the `buildMenu` method (from above) like this: 

```
let menu = UIMenu(title: "Show",
				  identifier: .show,
                  options: .displayInline,
                  children: [TableViewController.showTableAlert,
                             DetailViewController.showDetailAlert])

builder.insertChild(menu, atStartOfMenu: .file)
```

This little block of code adds the “Show Table” and “Show Detail” menu items. When you run the app, it will look like this. 

![Resulting menu](/public/images/2021-uikeycommand-3/menu.png)

That’s it. That’s really all there is to it to take existing keyboard shortcuts and add them to a macOS Catalyst app as menu items. 

UIKeyCommand object are incredibly versatile in the situations we’ve gone over in this series. They can be added to both simple and more complex apps. They can also be used in macOS Catalyst apps to provide menu bar items. 

## Other Posts in the Series
[Part 1](/2021/04/22/uikeycommand-part-1/) | [Part 2](/2021/04/26/uikeycommand-part-2/) 
