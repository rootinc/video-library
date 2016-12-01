# Video Library Sample Project

This is a sample project to test web development skills.

The project core is built using the static site generator [Harp.js](https://harpjs.com/). For this specific app, we use EJS for templating and SCSS for styles. To help speed up our styling we use [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/) from [thoughtbot](https://thoughtbot.com/).

## Installation

To get started, fork this repo and clone the repository.

Make sure we have Node and npm installed, and then we're ready to install Harp!

```
npm i -g harp
```

Once Harp is installed `cd` into the project directory and run:

```
harp server
```

Now you can visit the site at [http://localhost:9000](http://localhost:9000)! :tada:


## Project Requirements

1. Use responsive design to make this accessible for both mobile and desktop platforms (see mockups below). Remember that this project uses Bourbon and Neat for easier styling!

2. The video data is in a json file.  Dynamically load the json file with jQuery ajax and create the necessary dom elements from there.

3. Show the video in a "popup" by clicking on the thumbnail (the display should preferably be done with css animations). Hide pop up when user clicks away or video ends.

4. Use Javascript to play the video when the popup is opened.  Use Javascript to stop the video when the user clicks away.

5. Keep track of what videos have been watched, so when the page is reloaded, the browser remembers (use Local Storage for this).

![Desktop Mockup](http://rootincapps.s3.amazonaws.com/desktop.png)
