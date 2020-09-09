---
layout: post
title: Setting up Charles Proxy on Apple TV (tvOS)
date: '2016-09-28T18:23:46-04:00'
categories: [tools, development]
tumblr_url: http://ryan.grier.co/post/151072009679/setting-up-charles-proxy-on-apple-tv-tvos
---
I use [Charles Proxy](https://www.charlesproxy.com) as one of my development tools. I have done so for years. It’s invaluable to me. If you do any sort of client development that calls any sort of web service, you should look into Charles Proxy too.

This blog post is mostly taken from this excellent post on [WillowTree development blog](https://willowtreeapps.com/ideas) post called: [12 Steps For Setting Up Charles Proxy With tvOS](https://willowtreeapps.com/ideas/12-steps-for-setting-up-charles-proxy-with-tvos/). I recently tried to follow their steps, but was unable to get the SSL cert I needed from the the URL outlined ([www.charlesproxy.com/getssl](http://www.charlesproxy.com/getssl/)). You can now get the SSL cert directly from the Charles Proxy app. This post includes most of their steps, but have an updated step for getting the SSL cert. They deserve all of the credit here for the original post.

## Set up a profile

In order to set up tvOS, you need to use a profile to setup a proxy.

1. Download and install Apple Configurator.
1. Open Apple Configurator and navigate to _File -> New Profile_.
1. Give your profile a name and a unique identifier. Typically you’ll be setting it up to go through the same PC you’re using, so indicating this is encouraged (e.g. _Charles-JoeLaptop_).
1. Select Global HTTP Proxy* on the left and click configure.
1. Input your IP address of the machine running Charles and 8888 (default) for the port.*
1. If you need SSL, you need to add the Charles SSL cert. (if you’re not tracking SSL you can ignore this part):

- Open Charles and navigate to _Help -> SSL Proxying -> Save Charles Root Certificate_. 
- This will save a *.pem file containing the certificate you need. You need the certificate in a different format to add to your profile. (There are different ways you can do this, I found the simplest way was to add it to my keychain then export it as a *.cer file.)
- Back in Configurator, select _Certificates_ on the left and click _Configure_.
- This brings up a dialog to select the relevant certificate, select the one described above and click Open.
- It may say, _"This root certificate is not trusted."_ This just reflects the status of the user you’re using on the Mac.
- Save and close the Profile.

# Prepare Apple TV in Configurator

In order to be able to install profiles onto your Apple TV, the device needs to be prepared and supervised.

1. With the Apple TV turned on, connect it to your Macbook using the USB-C adapter.
1. Open Apple Configurator.
1. The Apple TV should show up under All Devices.
1. Select the device and click on the _Prepare_ button at the top of the window.
1. Follow the On Screen prompts. At the “Enroll in MDM Server” prompt, I selected “Do not enroll in MDM”. I selected the defaults for everything else.

## Install the profile

1. Now you will need to load the Profile onto the Apple TV. This requires a USB-C adapter.
1. With the Apple TV turned on, connect it to your Macbook using the USB-C adapter.
1. Open up Apple Configurator.
1. The Apple TV should show up under All Devices.
1. Select the device and click on the _Add_ button at the top of the window.
1. Select _Profiles_ and find the profile you created above, then click _Add Profiles_.

You should start to see web traffic in Charles Proxy from your Apple TV.

I’ve got another blog post about Charles Proxy and using it in a development/QA process. I hope to have that post out shortly, it’s still a work in progress. 

_Updated June 9th, 2017: Added the Prepare Apple TV in Configurator section._
