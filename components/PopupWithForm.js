import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector); /* Herencia */
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  setEventListeners() {
    this._formElement.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      super.close();
    });
  }
}
