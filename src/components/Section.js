export default class Section {
  constructor(items, renderer) {
    this.cardContainer = document.querySelector(".card-grid");
    this._items = items;
    this._renderer = renderer;
  }

  addItem(cardElement) {
    this.cardContainer.append(cardElement);
  }

  renderer() {
    this._items.forEach((item) => {
      this.addItem(this._renderer(item));
    });
  }
}
