class Api {
  constructor(options) {
    // cuerpo del constructor
  }
  getUser() {
    return fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  getInitialCards() {
    return fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
      headers: {
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  patchUserInfo(name, about) {
    return fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
          name: "Lara",
          about: "Bailarina"
    })
  });

  postCards(name, link) {
    return fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
      method: "POST",
      headers: {
        authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "name",
        link: "link"
      })
}

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
    "Content-Type": "application/json",
  },
});
