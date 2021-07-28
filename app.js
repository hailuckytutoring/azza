// DOM Manipulation

const counterBox = document.getElementById("counter");
const increaseButton = document.querySelector(".btn-1");
console.log(counterBox);

// Functions Syntax
// Normal
// function func() {}
// Arrow Function
// const func = () => {};

const clickHandler = () => {
  let number = parseFloat(counterBox.innerText);

  // number = number + 1
  number++;

  counterBox.innerText = number;
};

increaseButton.addEventListener("click", clickHandler);
