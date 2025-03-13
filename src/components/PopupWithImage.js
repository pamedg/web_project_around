import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this.popupImage = this._popupElement.querySelector(".popup__image");
    this.popupTitle = this._popupElement.querySelector(".popup__title");
  }

  open(name, link) {
    super.open();

    this.popupImage.src = link;
    this.popupTitle.textContent = name;
  }
}
