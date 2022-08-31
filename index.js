
function add(){
   let name = "anna"
    let firstNum = parseInt(document.getElementById("number").value);
    let secondNum = parseInt(document.getElementById("number1").value);
    let thirNum = firstNum + secondNum;

    document.getElementById('answer').innerHTML = thirNum;
   console.log(typeof(firstNum))
//    alert(firstNum + secondNum)

     if (typeof(firstNum) && typeof(secondNum) != null){
        alert(firstNum + secondNum)
        alert(name)
        drinkMilk();
       
     }
     else{
          
        alert("Insert a number")  
    }
}

function tryVariabkes(){
   console.log(name);
}



function drinkMilk(){
   let cat = 5;
   // alert (cat);
   teachStudent();
   console.log(cat)
}

function teachStudent(){
   let studentName = "Brian";
   console.log(studentName);
   playFootball();
}

function playFootball(){
   let players = [4,4,4]
   console.log(players);
}
console.log("Anna is trying something")

function stringManipulation(){
   let word = "Learning Js";
   let numberPhone = "07 02 91 45"
   console.log(word.length);
   // we count from 0
   console.log(word.charAt(1));
   // removes trailing and leading white spaces
   console.log(word.trim());
   // returns true or false 
   console.log(word.includes("Learning"));
   console.log(word.includes("Anna"));

      // regular expression
   // d n  ^ a 
   let regexOurs = /^[a-zA-Z]+$/
   // null
   console.log(word.match(regexOurs));
   // old string, new string
   console.log(word.replace("Learning", "Listening"));
   console.log(word.split(" "));
   // returns from the first, doesnt return that last index
   console.log(word.substring(0,4));
   console.log(word.toUpperCase());
   console.log(word.toLowerCase());
}

// Assignment using = 
const number1 = parseInt(12);
const number2 = parseInt(12)

// check for equality
// strict inequality
console.log(number1 != number2);
// strict equality checks hadi data types
console.log(number1 === number2)
console.log(typeof(number2));


// and: both have to be true
// if one is false: returns false

 let a = 8;
 let b = 13;
 let c = 14

 if (a > 10 && b > 10 && c > 10){
   console.log("all numbers are greater than 10");
 }else{
   console.log("some number is less than 10")
 }

 if (a > 10 || b > 10 || c > 10){
   console.log("majority greater");
 }else{
   console.log("minority less")
 }

 function handleRequest() {
   axios.post("url", {name: "data"}).then(function (response) {
       console.log(response)
       // do whatever you want if console is [object object] then stringify the response
   })
}

function handleRequest() {
   axios.get("https://jsonplaceholder.typicode.com/comments").then(function (response) {
       console.log(response.data[0].body)
       // do whatever you want if console is [object object] then stringify the response
   })
}

// on page load
// https://www.codegrepper.com/code-examples/javascript/javascript+call+function+on+page+load

function displayOutput() {
   axios.get("https://api.openbrewerydb.org/breweries").then(function (response) {
       console.log(response.data)
   let drink = response.data[19].name
   document.getElementById('drink').innerHTML = drink;
   let name = response.data[10].city + response.data[10].country + response.data[9].address
   document.getElementById("city").innerHTML=name;
})
}