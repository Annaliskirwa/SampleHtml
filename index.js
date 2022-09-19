
function add(){
   let name = "anna"
    let firstNum = parseInt(document.getElementById("number").value);
    let secondNum = parseInt(document.getElementById("number1").value);
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

// Arrays ina Js
const teams = ["arsenal", "manU", "chelsea", "totenham"]
teams.length;
// teams[0]
// teams[teams.length -1]
console.log(teams.length)
console.log(teams[0])
console.log(teams[teams.length -1])
