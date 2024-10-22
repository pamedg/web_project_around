export default class Validator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this.settings = settings;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this.settings.inputSelector)
    );
  }

cshowInputError = (errorMessage) {
  this.errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this.settings.inputErrorClass);
  this.errorElement.textContent = errorMessage;
  this.errorElement.classList.add("form__input-error_active");
};

hideInputError(){}

setEventListeners(){}

enableValidation(){}

}