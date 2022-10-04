export const Modal = {
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
Modal.btnClose.onclick = () => {
  Modal.close();
};

//fechar modal com a tecla esc
window.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  if (event.key === "Escape") {
    Modal.close();
  }
}
