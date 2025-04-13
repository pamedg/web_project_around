// utils/constants.js

export const data = [
  {
    name: "cat",
    image: new URL("../assets/animals/cat.png", import.meta.url).href,
  },
  {
    name: "dog",
    image: new URL("../assets/animals/dog.png", import.meta.url).href,
  },
  // etc..
  {
    name: "default",
    image: new URL("../assets/animals/default.png", import.meta.url).href,
  },
];
