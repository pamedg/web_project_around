import { template } from "../scripts/utils.js";

export default class Card {
  constructor(
    data,
    handleCardClick,
    handleLike,
    handleRemoveCard,
    handleOpenConfirm
  ) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._card = this.getTemplate();
    this._isLiked = data.isLiked;

    this.handleCardClick = handleCardClick;
    this._handleLike = handleLike;
    this.handleDeleteLike = handleRemoveCard;
    this.handleOpenConfirm = handleOpenConfirm;
    this.handleRemoveCardElement = this.handleRemoveCardElement.bind(this);
  }

  getTemplate() {
    /* se creo un metodo */
    return template.cloneNode(true).content.querySelector(".card");
  }
  setProperties() {
    this._cardImage = this._card.querySelector(".card__image");
    this._cardTitle = this._card.querySelector(".card__footer");
    this._btnDelete = this._card.querySelector(".card__bottom-trash");
    this._btnLike = this._card.querySelector(".card__bottom-like");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
    this._isLiked
      ? this._btnLike.classList.add("card__bottom-like_active")
      : null;
  }

  handleLike() {
    this._btnLike.classList.toggle("card__bottom-like_active");
    if (!this._isLiked) {
      console.log("se debe llamar al quitar like");
      this._handleLike();
    } else {
      console.log("se debe llamar al dar like");
      this.handleDeleteLike();
    }
    this._isLiked = !this._isLiked;
  }

  handleRemoveCardElement() {
    this._card.remove();
  }

  handleRemoveCard() {
    //this._card.remove();
    this.handleOpenConfirm(this._id, this.handleRemoveCardElement);
  }

  setEventListeners() {
    this._btnLike.addEventListener("click", () => {
      this.handleLike();
    });
    this._btnDelete.addEventListener("click", () => {
      this.handleRemoveCard();
    });

    this._cardImage.addEventListener("click", () => {
      this.handleCardClick();
    });
  }

  generateCard() {
    /*metodo que hace que se cree la carta*/
    this.setProperties();
    this.setEventListeners();

    return this._card;
  }
}
