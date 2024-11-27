import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector); /* Herencia super llama al constructor de otra clase*/
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popupElement.querySelector();
  }

  getInputValues() {
    this.formValues = {};
    this._inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });
    console.log(this.formValues);
    return this.formValues;
  }
  setEventListeners() {
    this._formElement.addEventListener("submit", (evt) => {
      console.log("prueba");
      evt.preventDefault();
      this._handleFormSubmit(this.getInputValues());
      super.close();
    });
  }
}
