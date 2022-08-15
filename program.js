

// //The average of even integers from 2 to 100
// var sum = 0;
// var count = 0;
// for (var i = 2; i <= 100; i+=2) {
//     sum += i;
//     count++;

// }
// var average = sum / count;
// console.log(average);

// //The average of odd integers from 2 to 100
// var sum = 0;
// var count = 0;
// for (var i = 2; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         sum += i;
//         count++;
//     }
// }
// var average = sum / count;
// console.log(average);


// //valid password regular expression
// var password = "Dar!.12345";
// var regex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/; //^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$ 
// console.log(regex.test(password));




//write a functionn to validate a user
var user = "Dar";
var password = "Dar!.12345";
var regex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
var result = regex.test(password);
if (result) {
    console.log("Valid password");
}
else {
    console.log("Invalid password");
}
