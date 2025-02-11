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

  // otros métodos para trabajar con la API
}

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
    "Content-Type": "application/json",
  },
});

fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
  headers: {
    method: "GET",
    authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
  },
});
