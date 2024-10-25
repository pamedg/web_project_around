export default class Validator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this.settings = settings;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this.settings.inputSelector)
    );
  }

  showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__input-error_active");
  }

  hideInputError(inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.settings.inputErrorClass);
    errorElement.textContent = "";
  }

  setEventListeners() {
    console.log("2ejecutamosevenlisteners");

    const buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );

    toggleButtonState(buttonElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(inputElement);
        toggleButtonState(buttonElement);
      });
    });
  }

  enableValidation() {
    console.log("ejecutamosenable");
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();

      setEventListeners();
    });
  }
}
