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
    this._btnDelete = this._card.querySelector("card__bottom-trash");
    this._btnLike = this._card.querySelector(".card__bottom-like");
  }
  generateCard() {
    /*metodo que hace que se cree la carta*/
    this.setProperties();
    return this._card;
  }
}
