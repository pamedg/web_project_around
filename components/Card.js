import { template } from "../scripts/utils.js";

export default class Card {
  constructor(data, handleCardClick, handleLike, handleRemoveCard) {
    this._name = data.name;
    this._link = data.link;
    this._card = this.getTemplate();
    this._isLiked = data.isLiked;

    this.handleCardClick = handleCardClick;
    this.handleLike = handleLike;
    this.handleLike = handleRemoveLike;
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
  }

  handleLike() {
    this._btnLike.classList.toggle("card__bottom-like_active");
    if (this._isLiked) {
      console.log("se debe llamar al quitar like");
    } else {
      console.log("se debe llamar al dar like");
    }
  }

  handleRemoveCard() {
    this._card.remove();
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
