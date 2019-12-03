"use strict";
// console.log("hello from external js");

// alert("Welcome to my website");
//
// var userColor = prompt("What is you favorite color?");
// var alertMessage = "Great,"+ userColor + " is my favorite color too!";
// alert(alertMessage);

    // var rentalFee = number(prompt("What is the rental fee"));
    // var littleMermaid = number(prompt("how many days would you like to rent Little Mermaid for?"));
    // var brotherBear = number(prompt("how many days would you like to rent Brother Bear for?"));
    // var hercules = number(prompt("how many days would you like to rent Hercules for?"));
    // var totalPrice = (littleMermaid + brotherBear + hercules) * rentalfee;
    //
    // alert("Total amount is "+totalPrice);

// var google = Number(prompt("Please input google service hours completed?"));
// var googlePay = Number(prompt("how much is your hourly rate at Google?"));
//
// var amazon = Number(prompt("Please input amazon service hours completed"));
// var amazonPay = Number(prompt("how much is your hourly rate at Amazon?"));
//
// var facebook = Number(prompt("Please input facebook hours completed"));
// var facebookPay = Number(prompt("how much is your hourly rate at Amazon?"));
//
// var totalPay = (("$")+(google*googlePay)+(amazon*amazonPay)+(facebook*facebookPay)+(".00"));
//
// alert(totalPay);



// var classSize = confirm("Is the class full");
//
//     if (classSize === true) {
//         alert("class is full");
//     }else{
//
//
//         var classMax = parseInt(prompt("what Is the maximum class size"));
//         var currClass = parseInt(prompt("What is the current class size"));
//
//         if (parseInt(currClass) < parseInt(classMax)) {
//             alert("You may enroll");
//         }else{
//             alert("class is full")
//         }
//     }

var numberOfItems = Number(prompt("How Many items for checkout?"));//number
var offerVaild = confirm("Is the offer Valid?");//boolean
var isPremuimMember = confirm("Are you a premium member?");//boolean

var discountApplied = offerVaild && (isPremuimMember || numberOfItems > 2);

alert("Can use discount : " + discountApplied)






