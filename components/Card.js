import { template } from "../scripts/utils.js";

export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
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
  }

  setEventListeners() {
    this._btnLike.addEventListener("click", () => {
      this.handleLike();
    });
    this._btnDelete.addEventListener("click", function () {
      this._card.remove();
    });
  }

  generateCard() {
    /*metodo que hace que se cree la carta*/
    this.setProperties();
    this.setEventListeners();

    return this._card;
  }
}
