const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const number = document.querySelectorAll(".number");
const dot = document.querySelector(".dot")
const operator = document.querySelectorAll(".operator");
const result = document.querySelector(".result");

let numberOne = null;
let numberTwo = null;
let selectedOperation = null;
let repeatedNumber = false;

const calculadoraHtml = () => {
  addEventListeners();
};

const addEventListeners = () => {

clear.addEventListener("click", clearDisplay);

number.forEach((button) =>{
  button.addEventListener('click', () => {
    addNumber(button.innerText);
  })
});

dot.addEventListener("click", addDot);

operator.forEach((button) =>{
  button.addEventListener("click", () => {
    addOperator(button.innerText);
  })
});

result.addEventListener("click", makeOperation);

};

const clearDisplay = () => {
  display.innerText = "";
  reset();
};

const reset = () => {
  numberOne = null;
  numberTwo = null;
  selectedOperation = null;
  repeatedNumber = false;
}

const addNumber = (number) => {
   if(numberOne === null) {
      display.innerText += number; 
    } 
   else if (numberOne !== null && +display.innerText === numberOne) {
      if (repeatedNumber === false) {
       repeatedNumber = true;
       display.innerText = number;
       } 
      else if (repeatedNumber === true) {
       display.innerText += number; 
       }
     }
 else if (numberOne !== null && +display.innerText !== numberOne) {
      display.innerText += number;
    }
};

const addDot = () => {
  if(!display.innerText.includes(dot.innerText)){
    if(display.innerText === ""){
      display.innerText = 0 + dot.innerText;
    }
  else {display.innerText += dot.innerText;
  }
};
};

const addOperator = (operator) => {
  if(display.innerText === "") {
    numberOne = 0;
    };

  if(numberOne === null) {
    numberOne = +display.innerText;
  } 
  else if (numberOne !== null) {
    numberTwo = +display.innerText;
}
 
  if(operator === "+") {
     if(numberTwo !== null){
      display.innerText = operation(selectedOperation);
      numberOne = +display.innerText;
    }
    selectedOperation = "suma";
    return;
 } 
 else if(operator === "-") {
  if(numberTwo !== null){
    display.innerText = operation(selectedOperation);
    numberOne = +display.innerText;
   }
   selectedOperation = "resta";
   return;
 }  
 else if(operator === "*") {
  if(numberTwo !== null){
    display.innerText = operation(selectedOperation);
    numberOne = +display.innerText;
   } 
   selectedOperation = "multiplicacion";
   return;
} 
else if(operator === "/") {
  if(numberTwo !== null){
    display.innerText = operation(selectedOperation);
    numberOne = +display.innerText;
   }
   selectedOperation = "division";  
   return;
};
}

const makeOperation = () => {
 if(selectedOperation === null){
  return;
 } else {
  numberTwo = +display.innerText;
  display.innerText = operation(selectedOperation);
  numberOne = +display.innerText;
 }
};

const operation = (selectedOperation) => {
if (selectedOperation === "suma") {
  suma(numberOne, numberTwo);
}
else if (selectedOperation === "resta") {
  resta(numberOne, numberTwo);
}
else if (selectedOperation === "multiplicacion") {
  multiplicacion(numberOne, numberTwo);
}
else if (selectedOperation === "division") {
  division(numberOne, numberTwo);
}
}

const suma = (numberOne, numberTwo) => {
  let totSuma = numberOne + numberTwo;
  return totSuma;
};

const resta = (numberOne, numberTwo) => {
  let totResta = numberOne - numberTwo;
  return totResta;
};

const multiplicacion = (numberOne, numberTwo) => {
  let totMultiplicacion = numberOne * numberTwo;
  return totMultiplicacion;
};

const division = (numberOne, numberTwo) => {
  if(numberOne === 0) {
   return "ERROR";
  }
  else {
   let totDivision = numberOne / numberTwo;
   return totDivision;
  }
  };

calculadoraHtml();
