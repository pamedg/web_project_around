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
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add("form__input-error_active");
  }

  hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.settings.inputErrorClass);
    errorElement.textContent = "";
  }

  checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement);
    } else {
      this.hideInputError(inputElement);
    }
  };

  hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  toggleButtonState = (buttonElement) => {
    if (this.hasInvalidInput(this._inputList)) {
      buttonElement.classList.add(this.settings.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this.settings.inactiveButtonClass);
    }
  };

  setEventListeners() {
    const buttonElement = this._formElement.querySelector(
      this.settings.submitButtonSelector
    );
    this.toggleButtonState(buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState(buttonElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this.setEventListeners();
  }
}
