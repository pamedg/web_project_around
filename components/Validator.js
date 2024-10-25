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

  checkInputValidity = (inputElement) => {
    console.log("3,se ejecuta check inputValidity");
    if (!inputElement.validity.valid) {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        settings
      );
    } else {
      hideInputError(inputElement);
    }
  };

  hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  toggleButtonState = (buttonElement) => {
    console.log(hasInvalidInput(this._inputList));
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
    }
  };

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
