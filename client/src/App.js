import React from "react";
import HomeLayoutHOC from "./HOC/Home.Hoc";
import Temp from "./Components/temp";

function App() {
  return (
    <>

      <HomeLayoutHOC path="/" exact component={Temp} />
    </>
  );
}

export default App;
