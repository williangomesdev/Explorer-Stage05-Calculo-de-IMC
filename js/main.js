import { Modal } from "./modal.js";
import { AlertError } from "./alertError.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

/* onsubmit = formulário toma uma ação */
form.onsubmit = function (event) {
  event.preventDefault();

  //pegando valores digitados no input
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notANumber(weight) || notANumber(height);
  if (showAlertError) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

//validar se é um numero que passamos
function notANumber(value) {
  return isNaN(value) || value === "";
}

//calculo imc
function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
