// console.log("File is attached");
// let userName = "arjit";
//Truthy and Falsy Values
// 0 , '',undefined,null,NaN => Falsy Values

// if(userName){
//     console.log("Username Exists")
// }else{
//     console.log("Username does not exists")
// }

// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))

// console.log(Boolean([]))

// const money = 0;
// if (money > 100) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// == vs ===
// let a = 1; //num
// let b = "1"; //string
// console.log(a == b);
// console.log(a === b);

//The switch case

// const day = "frday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

// FUNCTIONS ***************

// console.log("Hey there")
// console.log("How are you??")

// function logger(name,age){
//   console.log("My name is "+ name + " and My age is " + age)
// }

// logger("Arjit",31);
// logger("Rahul",23);
// logger("Ketan",28);

// console.log("40")

// console.log(Number("40"))

// function addNumbers(a,b){
//     return a+b
// }

// let sum = addNumbers(34,78);
// console.log("The sum of numbers is", sum)

//Function declaration and function expression
//Function declaration

// let age = calcAge(1992);
// console.log(age);

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }

// //function expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// let age2 = calcAge2(1999);
// console.log(age2);

//Arrow Functions

// const calcAge3 = (birthYear)=>{
//    return 2023 - birthYear
// }

// const calcAge3 = birthYear => 2023 - birthYear;

// //Functions calling another function
// const introduction = function(name,birthYear){
//     let age = calcAge3(birthYear);
//     console.log(`My name is ${name} and my age is ${age}`)
// }

// introduction("Arjit",1991)

//Arrays
// const friend1 = "Ankit";
// const friend2 = "Rahul";
// const friend3 = "Abhishek";

// const friend = ["Ankit","Rahul","Abhishek"];
// console.log(friend);

// const years = new Array(1993,1994,1999);
// console.log(years)

// console.log(friend.length);
// //Accessing by index
// console.log(friend[0])
// console.log(years[2])
// console.log(years[years.length -1])

// friend[1] = "Aman"
// console.log(friend)

// //Array Operations
// //Push => to add to the end of an array
// let newFriendsLength = friend.push("Pawan")

// console.log(newFriendsLength)

// //Unshift => to add an element to the beginning of an array
// // friend.unshift("Arun");
// console.log(friend.unshift("Arun"))

// //POP => To remove an element from the end of an array
// let popped = friend.pop();
// console.log(popped)

// //Shift => To remove an element from the beginning of an array
// let shifted = friend.shift()
// console.log(shifted)
// console.log(friend)

//indexOf
// console.log(friend.indexOf("Ankit"))
// console.log(friend.indexOf("Abhishek"))
// console.log(friend.indexOf("Arjit"))

// //included
// console.log(friend.includes("Ankit"))
// console.log(friend.includes("Arjit"))

// if(friend.includes("Kishan")){
//     console.log("you have a friend called Kishan")
// }else{
//     console.log("you DONT have a friend called Kishan")

// }

//Object Methods
// const aboutMe = {
//     firstName : "Arjit",
//     lastName:"Verma",
//     birthYear : 1991,
//     job: 'Developer and Trainer',
//     techStack : ["HTML", "JS","CSS","React","React native","Docker"],
//     address: {
//         location:"Lucknow",
//         country:"India",
//         pinCode:226901
//     },
//     hasDriversLicense:true
// }
// console.log(aboutMe)

// //Dot notation
// console.log(aboutMe.address)
// console.log(aboutMe.address.country)

// console.log(aboutMe['birthYear'])

// const nameKey = "Name";
// // console.log(aboutMe.first+nameKey) => will give error
// console.log(aboutMe["first"+nameKey])
// console.log(aboutMe["last"+nameKey])

// aboutMe.instagram = 'codewitharjit'
// aboutMe['linkedin'] = 'arjitverma'

// console.log(aboutMe)

// const aboutMe = {
//   firstName: "Arjit",
//   lastName: "Verma",
//   birthYear: 1991,
//   job: "Developer and Trainer",
//   techStack: ["HTML", "JS", "CSS", "React", "React native", "Docker"],
//   address: {
//     location: "Lucknow",
//     country: "India",
//     pinCode: 226901,
//   },
//   hasDriversLicense: true,
//   introduction: function () {
//     console.log(this);
//     // return `Hey! my name is ${aboutMe.firstName} ${aboutMe.lastName}. I am a ${aboutMe.job}, living in ${aboutMe.address.location}`

//     return `Hey! my name is ${this.firstName} ${this.lastName}. 
//     I am a ${this.job}, living in ${this.address.location} and 
//     my age is ${this.calcAge()}`;
//   },
//   calcAge: function () {
//     // return 2023 - aboutMe.birthYear;
//     return 2023 - this.birthYear
//   },
// };

// console.log(aboutMe.introduction());
// console.log(aboutMe.calcAge());


//Global Context
// console.log(this)

// const openingHours = {
//     Thursday: { open: 12, close: 22 },
//     Friday: { open: 11, close: 23 },
//     Saturday: { open: 10, close: 24 }
// };

// console.log(Object.keys(openingHours))
// console.log(Object.keys(aboutMe))
// // For- OF 
// for(const day of Object.keys(openingHours)){
//     console.log(`Restaurant is open on ${day}`)
// }



// const friend = ["Ankit","Rahul","Abhishek"];

// for(let item of friend){
//     console.log(item)
// }
//Will return and array of all the values
// console.log(Object.values(openingHours))

// console.log(Object.entries(openingHours))
// [
//     [key,value],
//     [key,value],
//     [key,value],
//     [key,value]
// ]

// DOM 

console.log(document.querySelector('.heading').innerHTML)
console.log(document.querySelector('.heading').textContent)

// console.log(document.querySelector('#text').textContent)


document.querySelector('.heading').innerHTML = "JS 101"