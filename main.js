const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

/* onsubmit = formulário toma uma ação */
form.onsubmit = function (event) {
  event.preventDefault();

  //pegando valores digitados no input
  const weight = inputWeight.value;
  const height = inputHeight.value;

  console.log(weight, height);
};
