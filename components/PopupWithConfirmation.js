class PopupWithConfirmation extends Popup {
  constructor(popupConfirmationSelector, handleFormSubmit) {
    super(popupConfirmationSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".popup__form");
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      super.close();
    });
  }
}
