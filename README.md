# Kurt Hammen

Email: khammen@udel.edu

My name is Kurt Hammen, and I'm a Junior at the University of Delaware. This repository will be used to document my progress in learning the skills covered in CISC275, an introduction into Software Engineering and Web Development. There will be frequent updates throughout the semester as I continue to test and develop new skills.

[Repository Link](https://github.com/khammen/khammen.github.io)


#### Weekly Progress Reports
##### Week of 9/2: Learning HTML and Web Basics: 
Sources used: Almost every link on [this page](https://sun.iwu.edu/~mliffito/cs_codex/posts/web-development-basics/)

A rather disappointing start, to be honest. Spent too much time fighting with Git setup and HTML images, without much success on the latter front. Will need to make significant progress next week, probably utilize office hours. Also added images of Git setup to repository.

##### Week of 9/9

Unfortunately, almost nothing was accomplished this week, due to a surge in other classwork and assorted band events putting this on the backburner. I've managed to get the HTML site up and running, though it's rather barebones at the moment. I admittedly have not yet figured out how to get it run on any machine other than where it's saved, but here's the link to it in the repository: https://github.com/khammen/khammen.github.io/blob/main/HTMLtake2/khammen.html.

I have a lot to accomplish next week, and thankfully should have the time to do it. See the Weekly Goals section for what I'm going to accomplish.

##### Week of 9/16

9/19 Touched up the HTML site a tad, integrated the linked video directly. After reading feedback from the TA, disregarded my previous plan and decided to work on React. It's proving to be less of a challenge than I anticipated; I hadn't really realized it was just a sort of extension on Javascript. Particularly interesting in the tutorial though, was the section on the importance of immutability; while it's something I thought about a little during past classes, the ability to reference prior states (beyond just returning to a specific turn in tic-tac-toe) suddenly seems commonplace and important everywhere, as it's the same way that things like text editors can Undo and Redo. (It also probably makes debugging easier, since you can see exactly what happended at any given point, or compare directly to a prior iteration to see what changed). It's also rather reminiscent of the version control that Git provides!

9/21 Seemed like there's a lot you can do with React, and it incorporates some of the other things, so I'm setting out on making a Hangman game through it. Progress updates will be listed here. 

9/22: Started working on a React hangman game. Have an idea of what I want it to be, and set out with the objective of first just having a series of hangman images that updated on click. Had issues with it always displaying the last image instead of actually working, so on 9/23 I started following along with Dr. Bart's video of the TA trainer app, but for some reason nothing's rendering on my site. Hopefully bashing my head against the keyboard for the next hour will yield something, but we'll see.

Follow up: I'm absolutely losing my mind. I had a somewhat functional base: Images were rendering, the site was loading properly, I was making progress. Having trouble updating the images properly, I followed along for ~30 minutes to the TA Trainer App video, and now everything is horribly, horribly broken. For some reason, nmp start won't even do anything anymore, giving me the error "'react-scripts' is not recognized as an internal or external command, operable program, or batch file", so I can't even see what my program is doing. It's been two hours and I can't get anything to work. I may just delete the program and start from scratch, but I'm in no state right now to do that. I also have learned a lesson in the value of frequent commits: I figured I'd commit it to the repo once it was a functional program, but I missed my very brief window, and now I don't have a past commit of my image-loading version.

npm-start is working again, so huzzah for that. Code is completely nonfunctional at the moment (displays no errors, oddly enough, yet doesn't actually display the elements I have in render). At this point, the code's just a hot mess of my own work and elements from the video, and at this point I'm willing to call npm-start working a big enough success for now. We'll see what I can do tomorrow.

##### Week of 9/23

9/28: Figured out that the issues were from using a JS version of React, as opposed to a TS version. I'll be keeping the old repository around as "hangman", but I won't be publishing it as a React app or further updating it. The new version will be "tshangman". 

Continued working on tshangman. Attempted to use Bootstrap to get some spiffy formatting, but having trouble getting rows and columns to actually work. Put formatting aside for a while and worked on adding the word bank, though now I'm trying to figure out how to pass a TS variable into HTML, since I'm planning on concatenating wrong guesses onto a string variable that then gets rendered. Might have to change my approach if that's not possible.

#### Weekly Goals (TODO)
Week of 9/9:

-Finish and polish the HTML site

-Learn JavaScript and incorporate JS elements into the HTML site (or maybe CSS? Will have to look into which is a more logical next step)

Week of 9/16:

-Get HTML site as a proper website that I can link from here

-Include a video directly on the site (doesn't link to an outside site)

-Create a "Note Identification Game" and add it to the site with JS (and possibly React? I'm not yet sure what all I'll need for this), where an image of a note on a staff is displayed and the player can either type the note into a box or click a button to choose it. The game will then display a message indicating whether it was right or wrong. (If React is used, [this](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f) should be a good resource:

-Work with CSS to change the website layout to something other than "aligned left" and make it look more visually appealing. [Here's](https://runestone.academy/runestone/books/published/webfundamentals/CSS/toctree.html) a source I may use.

Week of 9/23:

- Finish the Hangman site. I have a diagram of what it should look like,as well as a series of goals to accomplish on the way to finishing it:
- Fix the fact that it's broken and displaying nothing
- Update the image depicting number of wrong guesses on a click
- Receive word as input from user, display number of blanks equal to number of letters
- Receive letter guesses, display correct letter guesses in correct places, display incorrect guesses below
- Update image on incorrect guess
- Restart button
- Implemenation of different modes! Player vs Player (base mode), Player vs CPU, etc. Will be lowest priority.
- To accomplish this, I really need to stop by office hours or ask for help; I was off to a good start, but after breaking things I've spent incredibly long making zero progress, and that needs to change. I think I can reasonably set a goal to accomplish one of these tasks a day for Friday/Saturday/Sunday, leaving me with time during the week to wrap up any issues and have a rough but functional base game going.
#### Repository Changelog
8/31/21 - Creation of README 

9/7/21 - Started work on an HTML website, to a general lack of success. 

9/9/21 - Finished setup of Git on my local computer, documented progress. Trying to work with HTML again. Updated README with Weekly Goals/Reports

9/16/21 - Somehow got the previously-broken HTML page to work perfectly fine? Not really sure what I did (was accomplished the 14th, but forgot to push). Got a rough outline completed for the site. Updated weekly progress reports and TODO.

9/19/21 - Reorganized some image files, started working with the tic-tac-toe React tutorial.

9/19/21 - Finished React Tutorial

9/21/21 - Started working on Hangman game.

9/23/21 - Attempted to fix images not properly updating in hangman game, instead broke everything. Sigh. 

9/28/21 - Ceasing work on hangman, replacing with new React app tshangman to fix the issues associated with not having typescript. Continued developing the app, running into roadblocks documented in the weekly reports section.

9/30/21 - Finished hangman app! It's fully functional now, though kind of ugly. Will polish it a little bit if I get the app published to ghpages in time, but we'll see if that happens.
