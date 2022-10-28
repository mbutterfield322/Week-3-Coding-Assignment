console.log('Week 3 Coding Assignment')
// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// 1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
// •	Do not use numbers to reference the last element, find it programmatically, 
// •	ages[7] – ages[0] is not allowed!

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// 1c.	Use a loop to iterate through the array and calculate the average age. 
var ages = [3, 9, 23, 64, 2, 8, 28, 32, 93]; //declares a variable containing multiple ages
var firstElement = ages [0]
console.log(firstElement)
var lastElement = ages[ages.length - 1]
console.log(lastElement)
console.log(lastElement - firstElement)
var sum = 0
for (let i =0; i < ages.length; i++){
    console.log(ages[i])
    sum = sum + ages[i]
} console.log(sum)
console.log(sum/ages.length)

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log('lengthofmynames',names.length)
var sum2 = 0
for (let i =0; i < names.length; i++) {
console.log(i, names[i].length) 
sum2 = sum2 + names[i].length
}
console.log('sumofletters',sum2)
//3.	How do you access the last element of any array?
// You use a pop to access the last element of an array.

//4.	How do you access the first element of any array?
//You use a shift to access the first element of an array.

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

var nameLengths = []
var i
for (i = 0; i < names.length; i++){
    console.log(names[i].length)
    nameLengths.push(names[i].length)
}
console.log(nameLengths)

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

var sum4 = 0
for(i = 0; i < nameLengths.length; i++) {
    console.log(nameLengths[i])
    sum4 = sum4 + nameLengths[i]
}
console.log(sum4)
console.log(sum4/nameLengths.length)

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

var wordRepeat
function HelloHelloHello(word, n) {
wordRepeat = word.repeat(n)
console.log(wordRepeat)
}
HelloHelloHello('Hello', 3)

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
//•	The full name should be the first and the last name separated by a space.

var fullName
var firstName = 'Matthew'
var lastName = 'Butterfield'
function myName(firstNameparameter, lastNameparameter) {
console.log(firstNameparameter +' '+ lastNameparameter);

}
myName(firstName, lastName)
//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

var numbers2 = [18, 34, 53]
var sum5 = 0
var i = 0
function arrayNumbers2(parameter) {
    for (i = 0; i < parameter.length; i++) {
        sum5 = sum5 + parameter[i]
        //add all numbers in array to the sum
    }
console.log(sum5) 
    if (sum5 > 100) {
        console.log(true)
    }
    
  
}
arrayNumbers2(numbers2)

//10.	Write a function that takes an array of numbers and returns 
// the average of all the elements in the array.
var sum3 = 0
var agesofEmployees = [23, 27, 35, 44, 53];
function question10(){
    var i
    for (i = 0; i < agesofEmployees.length; i++) {
        sum3 = sum3 + agesofEmployees[i];
    }
    console.log(sum3);
    console.log(sum3/agesofEmployees.length);
}
console.log(agesofEmployees)

question10()

//11.	Write a function that takes two arrays of numbers 
//and returns true if the average of the elements in the
//first array is greater than the average of the elements
//in the second array.
const getTotal = function(numbers) {
  let total = 0;
  for(let number of numbers) {
    total += number;
  }
  return total;
};
const getAverage = function(numbers) {
  let total = getTotal(numbers);
  return total / numbers.length;
};
var sum6;
var arrayNumbers3 = [24, 29, 59];
var arrayNumbers4 = [19, 31, 67];
function question11() {
    //let total3 = getTotal(arrayNumbers3);
    //let total4 = getTotal(arrayNumbers4);
    let average3 = getAverage(arrayNumbers3);
    let average4 = getAverage(arrayNumbers4);

/*
    let total3 = arrayNumbers3.reduce(function(previous,current){
        return previous + current;
    },0);
    //console.log(total3);
    //console.log(total3/arrayNumbers3.length);
    let average3 = (total3/arrayNumbers3.length);
    
    let total4 = 0;
    for(let number of arrayNumbers4) {
       total4 += number;
    }
    let average4 = (total4 /arrayNumbers4.length);
*/
    console.log('Average3: ' + average3 + ', Average4: ' + average4);

    return average3 > average4
    // var i;
    // for (i = 0; i < arrayNumbers3; i++) {
    //     sum6 = sum6 + arrayNumbers3.length[i];
    // }
    // console.log(sum6);
    // console.log(sum6/arrayNumbers2.length);
}
question11();
//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

var moneyinPocket = 100
var isHotOutside = true
if (moneyinPocket >= 10.50) {
    console.log('willBuyDrink')
    if (isHotOutside) {
        console.log(true)
    }
}

//13.	Create a function of your own that solves a problem. 
//•	In comments, write what the function does and why you created it.

var color = 'green'
function isGreen(parameter) {
    if (parameter == 'green') {
        return true;
    }
    return false
}
console.log(isGreen ('green'))