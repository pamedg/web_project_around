import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Animal from "./Animal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Animal selectedAnimal="cat" />
      <Animal selectedAnimal="dog" />
      <Animal />
    </>
  );
}

export default App;
