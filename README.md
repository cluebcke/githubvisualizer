githubvisualizer
================

A little toy that makes a pretty browser display of repo descriptions. Terrible coding practices, abandoned experiments,
hardcoded values, and tremendous fun to hack out over a couple of days.

![Look at all these real projects. Not like this one](https://raw.github.com/cluebcke/githubvisualizer/master/public/img/lookatalltheserealprojects.png)

# Installation

Are you sure you want to do this? This isn't a real tool or anything. Plus if you up the poll rate you might make
the octolords angry at you, and we wouldn't want--okay, okay, fine, but proceed at your own risk.

1. Put is somewhere
2. Run `node app.js` from the project folder
3. Open a browser and point it at http://localhost:3000

# How does it work?

Again, just a toy, so I'm not going to put a lot of effort into this. But there are a few key pieces here that I really
wanted to play with and explore, which is why I made thte thing:

* WebSockets: This is how the server sends repo descriptions to the client. Via WebSockets. Does it need to be
WebSockets? Hell no. It's WebSockets because I wanted to play with WebSockets, because they're cool.
* Node + Express: To the extent anyone could call this an "app", it's the first one I've made from scratch with Node,
again something I just wanted to take a crack at. And I used a few bits of Express (mainly listening for HTTP requests
and serving static content) because I'm not a systems programmer and don't need to reinvent that wheel.
* Google WebFonts: **SO PRETTY**

# NB

In addition to the MIT license, it should be noted that if you leave the Node app unattended, it will cause you to
get permabanned from GitHub. It will then open all your mail, send a drunken text to an ex (or desired) lover, use the
last of the toilet paper without letting you know, and will leave the front door unlocked and slightly ajar.

You have been warned.
