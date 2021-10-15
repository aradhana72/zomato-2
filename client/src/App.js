//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//Component
import Temp from "./Components/temp";
import Master from "./Components/master";

function App() {
  return (
    <>
    <HomeLayoutHOC path="/" exact component={Temp}/>
    <HomeLayoutHOC path="/:type" exact component={Master}/>
    </>
  )
}

export default App;
//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 token xyzzzzzzzzzz
