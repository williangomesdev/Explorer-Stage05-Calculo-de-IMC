import { Modal } from "./modal.js";
import { AlertError } from "./alertError.js";
import { calculateIMC, notANumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

//Fechar a janela de erro quando digitar no campo
//oninput = saber se algo está sendo alterado no elemento
inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

/* onsubmit = formulário toma uma ação */
form.onsubmit = function (event) {
  event.preventDefault();

  //pegando valores digitados no input
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);
  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}
