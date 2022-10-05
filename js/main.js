import { Modal } from "./modal.js";
import { AlertError } from "./alertError.js";
import { IMC, notANumber } from "./utils.js";

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

