
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