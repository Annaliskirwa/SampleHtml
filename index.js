function add(){
    let firstNum = parseInt(document.getElementById("number").value);
    let secondNum = parseInt(document.getElementById("number1").value);

   console.log(typeof(firstNum))
//    alert(firstNum + secondNum)

     if (typeof(firstNum) && typeof(secondNum) != null){
        alert(firstNum + secondNum)
       
     }
     else{
          
        alert("Insert a number")  
    }
}