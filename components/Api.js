fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
  headers: {
    method: "GET",
    authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
  },
});

fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
  headers: {
    authorization: "4d663130-4b47-4922-8d66-781f1a22d9e5",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
