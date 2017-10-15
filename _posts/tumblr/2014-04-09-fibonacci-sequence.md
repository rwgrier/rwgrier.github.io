---
layout: post
title: Fibonacci Sequence
date: '2014-04-09T11:48:00-04:00'
tags: []
tumblr_url: http://ryan.grier.co/post/82199655993/fibonacci-sequence
---
The [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number) is a special sequence of numbers. The first two numbers are 0 and 1. The numbers in the sequence after that build on these first two numbers. The pattern is the next number in the sequence is the sum of the two previous numbers.

The Fibonacci sequence begins like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, etc…

Last summer I was interviewing at multiple companies. One interviewer asked me how I would generate a Fibonacci number at a given index.

For example:

	Given 0; return 0.
	Given 1; return 1.
	Given 2; return 1.
	...
	Given 6; return 8.


I started by writing a method that would solve the problem through brute force using [recursion](https://en.wikipedia.org/wiki/Recursion), but it wasn’t really what the interviewer was looking for. I fumbled through the question and didn’t get an offer from that company.

Once the interview was over, I made a few half-hearted attempts to figure this out (which I had on Github), but wasn’t happy with anything. I forgot about this entirely until a few weeks ago, when I decided to figure it out.

I did more research into the Fibonacci Sequence and discovered that you can calculate these numbers using the [Golden ratio](https://en.wikipedia.org/wiki/Golden_ratio).

The Golden ratio is defined mathematically as:

	    (1 + √5)
	φ = -------
	       2


Or φ ≅ 1.618034…

It turns out you can use the Golden ratio to calculate numbers in the Fibonacci sequence. This is [Binet’s Fibonacci number formula](http://mathworld.wolfram.com/BinetsFibonacciNumberFormula.html):

	         φ^n - (- φ)^-n
	F(n) =  ----------------
	               √5


This is a much cleaner approach to the brute force approach for calculating these numbers. Instead of dealing with recursion, which is tricky, this is a straightforward method to calculating Fibonacci numbers.

Here’s what that looks like in code:

## Obj-c code

	#define SQRT_5 sqrt(5)
	#define PHI ((1 + SQRT_5) / 2)

	...

	+ (unsigned long long) fibonacciAtIndex: (NSUInteger) index {

        if (index < 2) {
            // Save some cycles.
	        return index;
	    }

        // x(n) = (Phi^n - (-Phi)^-n) / √5
        long double numerator = powl(PHI, index) - powl((long double) (-1.0 * PHI), -1.0 * index);
        long double fibonacci = numerator / SQRT_5;

        return (unsigned long long) fibonacci;
	}


## Larger numbers?

This method above is accurate until an index of 71, after that the numbers drift enough to be noticeable. I haven’t spent much time figuring out how to handle larger numbers. I could probably try NSDecimalNumber or BIGNUM.

I don’t know if this is the best way to generate Fibonacci numbers for a given index. If/When I look into handling larger numbers may find this to be a terrible approach.

