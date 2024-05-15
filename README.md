Planning


declare variables like deck, players hand and dealers hand. Use arrays so that you can go through the 

need a newGame function

need a drawCard function

need a hit function

need a stand function

need a handValue function

need a endGame function

Start with declaring the deck, dealer, and player variables. Possibly a message varibale at the beginning or wait and do that later when necessary. 



Deal will be tied to a button that randomly picks through the deck of cards and then will end up dealing two initial cards to start.

the deal button will also just give the 'dealer' two cards to begin. but only one will be visible.

animations should be after thought.

get the buttons linked and start writing functions for the buttons. 

dont touch css until the engine is revin 

Hit will be a similar function picking randomly from the 'deck' and will give you a new card.

Stand will just progress the action of the turn. so the dealer would then finish the turn when the stand button is pressed.

maybe make it text based and then float the images in..

aces are going to be interesting

else if statements to determine what message shows up when the card values are determined. use value variables determine modul messages

write a function for end of game values when the player presses hit button

write a function to check if the end of the game is determined 

if dealer is less than 17 then they need to continue to hit. 

assign value to facecards but can let the actual number of lower cards just equal their value


Try to figure out a message system or text box or modul that will display when someone gets blackjack or when someone busts. 

could display messages in a flexbox container in the middle of the screen that is semi transparent

super important is trying to find a way to only show the value and visibility of one of the dealers cards

must implement wagering feature. could do this with tying $5 $10 $25 chips near player that would show a total value of the bet and how much you have left. 

# BlackJack

#### A full-stack web application built as first project.
<img src="cards/blackJack READ.me page.png" alt="BlackJack ScreenShot"/>

## Description
BlackJack: This is a two player game where you have to try to beat the dealer. You can beat the dealer by having a higher value than them but also less than or equal to a value of 21.

## Table of Contents
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Design](#design)
* [Project Next Steps](#nextsteps)
* [Deployed App](#deployment)
* [About the Author](#author)

## <a name="technologiesused"></a>Technologies Used
* JavaScript
* HTML
* CSS


## Features
User can play against the dealer by hitting cards or standing if you have been dealt.
User can bet chips based on how strong their hand is. 

## <a name="design"></a>Design
* Design elements implemented using HTML and CSS. 


## <a name="nextsteps"></a>Project Next Steps
* Allow the user to split cards when they deem it appropriate.
* Allow users to bet before cards are dealt.
* Add a 3 to 1 payout for first dealt player blackjack. 
* Add a total win vs loss text box to show how much money the user has won or lost in a session. 
* Implement CSS so the user can change the theme/background of the game.

## <a name="deployment"></a>Deployed Link
[Github](https://jafbath.github.io/blackjack/)

* You can view the repository:
[Github.com](https://github.com/jafbath/blackjack)
* If unable to view please go live locally through VS Code
    
## Works Cited:
*The map() function helped me tie in the specific suits of my cards to randomize when the actual card was called. This saved me a lot of time from writing "if" statements in my drawCard() function which in turn, helped me practice DRY code.
-https://www.w3schools.com/jsref/jsref_map.asp
 


