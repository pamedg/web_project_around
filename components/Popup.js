export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleEscClose = this.handleEscClose.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_show");
  }
  close() {
    /* cada que quiera cerrar un popup ahora llamo a close */
    this._popupElement.classList.remove("popup_show");
  }
  handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(); /*se llamo y se cerro */
    }
  }

  handleClickOutside(evt) {
    if (evt.target.classList.contains("popup_show")) {
      this.close();
    }
  }

  setEventListener() {
    document.addEventListener("keydown", this.handleEscClose);
    /*this._popupElement.addEventListener("click", this.handleClickOutside);*/
    const buttonClose = this._popupElement.querySelector(
      'img[alt="boton para cerrar"]'
    );
    buttonClose.addEventListener("click", (e) => {
      e.preventDefault();
      this.close();
    });

    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup") === true) {
        this.close();
      }
    });
  }
}
