import { data } from "../utils/constants";

function Animal(selectedAnimal = "default") {
  const animal = data.find((item) => {
    return item.name === selectedAnimal;
  });
  return <img src={animal.image} alt={animal.name} />;
}

export default Animal;
