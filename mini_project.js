let name = "Vijay";
let num = 31
function guess(){
    value= prompt("guess a number")
    if(value==num){
        console.log("WINNER")
    }
    else if(value>= num-5 && value<=num+5){
        console.log("You re close \n Try again")    
    }
    else if(num-5>value){
        
        console.log("way away -- \n Try again")
    }
    else if(num+5<value){
        console.log("way away ++ \n Try again")
       
    }
    else{
        console.log("Try Again")
    }
}
