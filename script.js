
const num1=document.getElementById("number1");
const num2=document.getElementById("number2");
const output=document.getElementById("result");

let addResult=0;
function add(){
 
    addResult=Number(num1.value)+ Number(num2.value);
    result.textContent= `Sum = ${addResult}`;
}

let subResult=0;

function sub(){
  
    subResult=num1.value-num2.value;
    
    output.textContent=`Subtraction is ${subResult}`;

}
function mul(){
  
  output.textContent=`Multiplication is ${num1.value*num2.value}`
}
function div(){
 
  if(num2.value==0){
    output.textContent="You can not divide any number by 0";
    return;
  }
  output.textContent=`Division is ${num1.value/num2.value}`

}

function resetAll(){
    num1.value=" ";
    num2.value=" ";
    output.textContent=" ";
}
