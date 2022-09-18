const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear");
const numberButton = document.querySelectorAll(".number");
const dotButton = document.querySelector(".dot")
const operatorButton = document.querySelectorAll(".operator");
const resultButton = document.querySelector(".result");

let firstValue = null;
let secondValue = null;
let selectedOperation = null;
let repeatedNumber = false;

const calculadoraHtml = () => {
  addEventListeners();
};

const addEventListeners = () => {

clearButton.addEventListener("click", clearDisplay);

numberButton.forEach((button) =>{
  button.addEventListener('click', () => {
    addNumber(button.innerText);
  })
});

dotButton.addEventListener("click", addDot);

operatorButton.forEach((button) =>{
  button.addEventListener("click", () => {
    addOperator(button.innerText);
  })
});

resultButton.addEventListener("click", makeOperation);

};

const clearDisplay = () => {
  display.innerText = "";
  firstValue = null;
  secondValue = null;
  selectedOperation = null;
  repeatedNumber = false;
};

const addNumber = (number) => {
   if(firstValue === null) {
      display.innerText += number; 
    } 
   else if (firstValue !== null && parseFloat(display.innerText) === firstValue) {
      if (repeatedNumber === false) {
       repeatedNumber = true;
       display.innerText = number;
       } 
      else if (repeatedNumber === true) {
       display.innerText += number; 
       }
     }
 else if (firstValue !== null && parseFloat(display.innerText) !== firstValue) {
      display.innerText += number;
    }
};

const addDot = () => {
  if(!display.innerText.includes(dotButton.innerText)){
    if(display.innerText === ""){
      display.innerText = 0 + dotButton.innerText;
    }
  else {display.innerText += dotButton.innerText;
  }
};
};

const checkOperation = () => {
  repeatedNumber = false;

  if(display.innerText === "") {
    display.innerText = 0;
    firstValue = 0;
    return;
    };

  if(firstValue === null) {
    firstValue = parseFloat(display.innerText);
    return;
  } 
  else if (firstValue !== null) {
    secondValue = parseFloat(display.innerText);
    return;
};
};

const addOperator = (operator) => {
  checkOperation();
 
  if(operator === "+") {
     if(secondValue !== null){
      display.innerText = operation(selectedOperation);
      firstValue = parseFloat(display.innerText);
      secondValue = null;
    }
    selectedOperation = "suma";
    return;
 } 
 else if(operator === "-") {
  if(secondValue !== null){
    display.innerText = operation(selectedOperation);
    firstValue = parseFloat(display.innerText);
    secondValue = null;
   }
   selectedOperation = "resta";
   return;
 }  
 else if(operator === "*") {
  if(secondValue !== null){
    display.innerText = operation(selectedOperation);
    firstValue = parseFloat(display.innerText);
    secondValue = null;
   } 
   selectedOperation = "multiplicacion";
   return;
} 
else if(operator === "/") {
  if(secondValue !== null){
    display.innerText = operation(selectedOperation);
    firstValue = parseFloat(display.innerText);
    secondValue = null;
   }
   selectedOperation = "division";  
   return;
};
}

const makeOperation = () => {
 if(selectedOperation === null){
  return;
 } else {
  secondValue = parseFloat(display.innerText);
  display.innerText = operation(selectedOperation);
  firstValue = parseFloat(display.innerText);
  secondValue = null;
  return;
 }
};

const operation = (selectedOperation) => {
if (selectedOperation === "suma") {
  const result = suma(firstValue, secondValue);
  return result;
}
else if (selectedOperation === "resta") {
  const result = resta(firstValue, secondValue);
  return result;
}
else if (selectedOperation === "multiplicacion") {
  const result = multiplicacion(firstValue, secondValue);
  return result;
}
else if (selectedOperation === "division") {
  const result = division(firstValue, secondValue);
  return result;
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
