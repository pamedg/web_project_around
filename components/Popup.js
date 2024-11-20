export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
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
  handleClickOutside() {}
  setEventListener() {}
}
