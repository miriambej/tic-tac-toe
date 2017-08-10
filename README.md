# Project 0
## Tic Tac Toe
- This application is a Tic Tac Toe game.
- The folder contains an index.html file, an audio folder which contains the guitar and piano sounds, a css folder which contains the style.css file, an images folder which contains the background picture and instruments pictures, a js folder which contais the jquery.js and the Javascript file, and a README.md file.
- This application was created by Miriam Espinsosa for Project 0 - WDi23 General Assembly.

### Online version
An online version of the game can be accessed using this  [Link  :link:](https://miriambej.github.io/tic-tac-toe/)

### Objective of the game:
- In the game, there are 2 players who take turns selecting a space in a 3×3 grid. Every time a player selects a space, the space changes to their selected image. In order to win, players should place three of their images in a horizontal, vertical, or diagonal row.

## Specifications:
For this application, the code has been written in 3 files: one html file (index.html), one javascript file (js/main.js), and one css file (css/style.css).


#### main.js
* Logic code is written at the top and DOM updating code is written at the bottom.
* Object tictactoe - Includes the data of each player(player number, name, image and score), an empty board use to track players' movements, a play function (reviews the board in game and checks if anybody has won),two prompt messages (alertWinMessage and alertDrawMessage) to notify the players the winner or a draw.
* Other functions. Includes reset (function used to clear the board inside the game object and the one displayed to players), play function to count the turns, a switch to change player turns and turns which keeps the number of turns.

## Comments on the project and its development:
* The game is working for 2 players.
* During the development process I found that in the beginning I had an idea on how to create the application but once I had more code, my plan had to be adapted and I started adding other functions to achieve the result I wanted. Also, the easy fix solutions I used at the beginning were not handy anymore when adding more functions, so I had to change the code to be able to expand it. Also, when adding the video, the reason it was not working was because the solution I found on the internet was not supported anymore on chrome newest version. I learned that I have to always check for any updates in the code I am writing, as it might work today but I might have to change it tomorrow.
* The biggest problem I had was that after adding various functions and variables, I started getting confused with the functions and when I had bugs, it was hard to find the solution because many functions were linked and depended on each other.
