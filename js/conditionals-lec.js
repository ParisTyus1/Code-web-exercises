"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
// if (isAdmin){
    //Show admin nav bar
    //show admin nav bar ()--> function
// }

//TODO Together: Send a 20% off coupon if its users birthday
// if (isBirthday){
    //send coupon
    //sendBirthdayEmail() --> function
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRainy = true;
//
// if (isRainy === true){
//     alert('Its raining')
// }
// if (isRainy){
//     alert("get an umbrella")
// }


//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var itemCost = 10;
// var currentBalance = 20;
//
// if (itemCost <= currentBalance){
//     alert("you dont have enough money")
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 0
// if (numberOfLives === 0){
//     alert("Sorry, game over")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// var weather = "snowing";
// if(weather === "snowing"){
//     alert("Its snowing");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// var numberInput = 20
// if (numberInput > 10){
//     alert("number is greater that ten")
// }


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
// var isAdmin = true;
//     if (isAdmin){
//         //show admin nav bar
//         alert("User is Admin")
//     }else{
//         //show NonAdmin nav bar
//         alert("User is not admin");
//     }


//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"
// var isRainy = false;
//     if (isRainy){
//         alert("its Raining");
//     }else{
//         alert("it sunny");
//     }



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// var numberOfLives = 5;
//     if (numberOfLives === 0){
//         alert("Sorry, Game over!");
//     }else{
//         alert("Continue?");
//     }
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weather = "sunny";
//     if (weather === "snowing"){
//         alert("Its snowing");
//     }else{
//         alert("Check back for more details");
//     }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 1;
//     if (numberInput > 10){
//         alert("greater than ten")
//     }else{
//         alert("The number is less than 10")
//     }
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 
//     function checkIfGameIsOver(numberOfLives) {
//         if (numberOfLives === 0){
//             return "Sorry, game over"
//         } else {
//             return "Next Level";
//         }
//     }

// function checkIfGameIsOver(numberOfLives){
//     var returnMessage;
//      if (numberOfLives === 0){
//          returnMessage = "Sorry, Game Over";
//      }else{
//          returnMessage = "Next Level";
//      }
//      return returnMessage
// }
// console.log(checkIfGameIsOver(1));

//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

    
    
// SHOULD WE DELETE STUFF EXAMPLE

    // var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
    // console.log("the value of the confirm is: " + weShouldDeleteStuff);
    // if (weShouldDeleteStuff) {
    //     alert("delete everything");
    // } else {
    //     alert("Operation Canceled!");
    // }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "snowing";
// if (weather === "snowing"){
//     alert("it snowing")
// }else if (weather === "raining"){
//     alert("its raining")
// }else if (weather === "sunny"){
//     alert("its sunny")
// }else{
//     alert("have a nice day")
// }
//TODO Together: refactor the above statement as a function
//     function checkWeather(weather) {
//         var weather = "snowing";
//         if (weather === "snowing"){
//             return("it snowing")
//         }else if (weather === "raining"){
//             return("its raining")
//         }else if (weather === "sunny"){
//             return("its sunny")
//         }else{
//             return("have a nice day")
//         }



// Together: PIZZA PREFERENCE EXAMPLE 

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
// //
//     if (pizzaPreference === "pineapple and hot sauce") {
//         alert("What a coincidence, that's my favorite!");
//     } else if (pizzaPreference === "cheese") {
//         alert("Just plain cheese? Okay...");
//     }  else if (pizzaPreference === "ham"){
//         alert("Ham is easy to spell and awesome!");
//     } else {
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//     }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called,
// it should return a message informing the user what to do when approaching that color light at an intersection.
//     function trafficlight(color) {
//         if (color === "red"){
//         return "stop";
//     }else if (color === "yellow"){
//         return "slow down, light is turning red"
//     }else if (color === green) {
//             return "Go";
//     }else{
//         return "Obey right of way rules"
//     }
//
//     console.log(trafficlight(green));




// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit,
// else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit,
// if they are 16 or older and have a permit, they are eligible for license,
// if they are 16 or older and do not have a permit, they are not eligble for a license.

    // var userAge = 15;
    // var hasPermit = true;
    // if(userAge < 15){
    //     alert("Sorry, Your not old enough")
    // }else {
    //     if(userAge === 15){
    //         alert("you can have a permit!")
    //     }else if(userAge >= 16 && hasPermit){
    //         alert("you can have a license")
    //     }else if (userAge >= 16 && !hasPermit){
    //         alert("Sorry need to go to drivers ed!")
    //     }else {
    //         alert("please see front desk")
    //     }
    // }





// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message);


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!
// var weather = "sunny";
// var weatherMessage = (weather === "rainy") ? "Its raining!" : "Have a nice day!";
//
// console.log(weatherMessage);


// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
//     if (pizzaPreference === "pineapple and hot sauce") {
//         alert("What a coincidence, that's my favorite!");
//     } else if (pizzaPreference === "cheese") {
//         alert("Just plain cheese? Okay...");
//     }  else if (pizzaPreference === "ham"){
//         alert("Ham is easy to spell and awesome!");
//     } else {
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//     }









// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {//can only be used when a condition = whatever variable//
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     case "ham":
//         alert("ham is nice and easy to spell");
//     default: //catch all block like else//
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;//is like return, it stops the action from running//
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
// var weather = "rainy";
//     switch(weather) {
//         case "rainy":
//             alert("its rainy");
//             break;
//         case "sunny":
//             alert("its sunny");
//         case "snow":
//             alert("its snowing");
//             break;
//         default:
//             alert("have a nice day");
//             break;
// }

// function checkWeather(weather) {
//     var weatherMessage;//
//
//     switch (weather) {
//         case "rainy":
//             weatherMessage = "its rainy";
//             break;
//         case "sunny":
//             weatherMessage = "its sunny";
//         case "snow":
//             weatherMessage = "its snowing";
//             break;
//         default:
//             weatherMessage = "have a nice day";
//             break;
//     }
//     return weatherMessage;
// }
//
// console.log(checkWeather("sunny"));

//TODO: Rewrite the intersection function from earlier as a switch statement.
// function checkTrafficLight(trafficLight){
//     if(trafficLight === "green"){
//         return "keep going!";
//     } else if (trafficLight === "yellow"){
//         return "slow down";
//     } else if (trafficLight === "red"){
//         return "stop";
//     } else {
//         return "proceed with caution";
//     }
// }
// console.log(checkTrafficLight("green"));


function checkTrafficLight(trafficLight) {
    var trafficMessage;

    switch (trafficLight) {
        case "green":
            trafficMessage = "you may proceed";
            break;
        case "yellow":
            trafficMessage = "caution";
            break;
        case "red":
            trafficMessage = "stop";
            break;
        default:
            trafficMessage = "have a nice day";
            break;
    }
    return trafficMessage;
}

console.log(checkTrafficLight("red"));



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

