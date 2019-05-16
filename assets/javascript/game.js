// GLOBAL VARIABLES
var game_RandomNum;
var losses = 0;
var wins = 0;
var sumOfCrystalsNum = 0;


//FUNCTION(FOR STARTING AND RESETING THE GAME FOR EVERY ROUND)===================================
var startGame = function() {

    $(".game-crystals").empty();

    sumOfCrystalsNum = 0;

    // GENERATING THE GAME RANDOM NUMBERS (*subtracting 19 from 120 to get 101, is so that the random numbers stays in the range between 19-120 since using Math.random starts counting from an index of 0)
    game_RandomNum = Math.floor(Math.random() * 101) + 19; 

    $("#game-random-number").html('Game Generated Number: ' + game_RandomNum);  //ADDING NUMBER TO THE INDEX.HTML FILE
        // console.log(game_RandomNum);

    // CREATING A FOR-LOOP TO RUN THE SAME CODE OVER & OVER AGAIN FOR THE 4 CRYSTALS WITH DIFF VALUES
    for(var i = 0; i < 4; i++) {

        var crystal_RandomNum = Math.floor(Math.random() * 11) + 1; // GENERATES CRYSTAL RANDOM NUMBERS 1-12
            //console.log(crystal_RandomNum);

        var crystal = $("<div>");   //THE CRYSTAL VARIABLE IS ASSIGNED A VALUE OF <DIV> SO THAT IT CAN BE USED TO INSIDE THE CRYSTALS TO CREATE 4 NESTED ELEMENTS 

            //BELOW, THE OBJECT(CRYSTAL) IS BEING SET WITH ATTR() TO ATTACH MULTIPLE ATTRIBUTE AND VALUES TO BE APPLIED TO THE OBJECT AS PROPERTIES OF THE CRYSTAL
            crystal.attr({ 
                "class": 'crystal', //CREATING A CLASS FOR THE OBJECT(CRYSTAL) WHICH CAN BE USED FOR STYLING IN CSS 
                "crystal-hidden-number": crystal_RandomNum //ADDING THE RANDOM NUMBERS TO EACH OF THE 4 CRYSTALS
            });
            
            crystal.html(crystal_RandomNum);  //SHOWS RANDOM NUMBER IN CRYSTAL BOXES  --TESTING GAME ONLY--

        $(".game-crystals").append(crystal);   //THIS WILL APPENDING THE 4 NEW CRYSTAL DIVS TO THE INDEX.HTML FILE 
            //console.log("crystal");
        }
    
}

//MAIN GAME=====================================================================================
startGame();
//FUNCTION(FOR ON CLICK)=========================================================================
//ADDING AN EVENT LISTENER OF "ON.CLICK" SO THAT ONCE CLICKED THE HIDDEN NUMBERS DISPLAY.
$(document).on("click", ".crystal", function() { 

    var hiddenNums = parseInt($(this).attr('crystal-hidden-number')); //ANALYZES OBJECT(HIDDENNUMS) STRING AND RETURNS AN INTERGER(WHOLE NUMBER)

    sumOfCrystalsNum += hiddenNums;  //THIS IS ADDING THE PREVIOUS UNLOCKED NUMBERS AND THE NEW UNLOCKED CRYSTAL HIDDEN NUMBER TOGETHER FOR SU
        console.log(sumOfCrystalsNum)

    //CONDITIONALS OF THE FUNCTION CALLED=========================================================
    if(sumOfCrystalsNum > game_RandomNum) {  //IF THE SUM OF ALL CLICKED CRYSTAL NUMBERS ARE GREATER THAN THE GAME RANDOM NUMBER .....
        losses++; //INCREMENT THE LOSE-COUNTER
        alert("YOU LOSE!");
        $(".lose-counter").html(losses)   //...ADD TO LOSE-COUNTER IN THE INDEX.HTML FILE

        startGame(); //RESETS THE GAME AGAIN AFTER LOST

    }
    else if(sumOfCrystalsNum === game_RandomNum) {   //BUT IF THE SUM OF ALL CLICKED CRYSTAL NUMBERS EQUAL THE GAME RANDOM NUMBER...
        wins++;  //INCREMENT THE WIN-COUNTER
        alert("YOU WIN!");
        $(".win-counter").html(wins) //...ADD TO WIN COUNTER IN THE INDEX.HTML FILE

        startGame(); //RESETS THE GAME AGAIN AFTER WIN

    }

});


// THE GAME HAS 4 CRYSTALS AND A THE GAME RANDOM GENERATED NUMBER
// EACH CRYSTAL HAS TO PRODUCE A RANDOM NUMBER BETWEEN 1 - 12
// A NEW RANDOM GAME NUMBER SHOULD BE GENERATED EVERY TIME WE WIN OR LOSE THE GAME
// WHEN THE PLAYER CLICKS ON ANY OF THE 4 CRYSTALS, IT SHOULD ADD ITS HIDDEN NUMBER TO THE PREVIOUS NUMBER UNTIL IT EQUALS THE RANDOM NUMBER OF THE GAME 
// IF THE PLAYER HIDDEN CRYSTAL NUMBERS TOTAL IS GREATER THAN THE GAME GENERATED RANDOM NUMBER, WE DECREMENT A LOST COUNTER
// IF THE PLAYER HIDDEN CRYSTAL NUMBERS TOTAL IS EQUAL TO THE GAME GENERATED RANDOM NUMBER, WE INCREMENT A WIN COUNTER 