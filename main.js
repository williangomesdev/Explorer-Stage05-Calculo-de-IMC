const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector(".modal .title span");
const modalBtnClose = document.querySelector(".modal button.close");

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

/* onsubmit = formulário toma uma ação */
form.onsubmit = function (event) {
  event.preventDefault();

  //pegando valores digitados no input
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

Modal.btnClose.onclick = () => {
  Modal.close();
};

//calculo imc
function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
