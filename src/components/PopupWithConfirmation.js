import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupConfirmationSelector, handleFormSubmit) {
    super(popupConfirmationSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popupElement.querySelector(".popup__form");
  }
  setEventListeners() {
    super.setEventListener();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._cardId, this.deleteCard);
      super.close();
    });
  }

  open(cardId, handleRemoveCardElement) {
    super.open();
    this._cardId = cardId;
    this.deleteCard = handleRemoveCardElement;
  }
}
