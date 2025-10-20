import "./App.css";
import Button from "./Button";
import Planetes from "./Planetes";
import Etat from "./Etat";

function App() {
  const nom = "Vincent";

  //const planetesList = planetes.map((value) => <li key={value}>{value}</li>);
  const handleClick = (url) => {
    window.location.href = "http://www.wikipedia.org"
  }
  return (
    <>
      <Button text="Cliquez ici!" color="green" fontSize={20} handleClick={() => handleClick("http://www.wikipedia.org")}/>
      <Button text="Ne Cliquez pas ici!" color="red" fontSize={30} handleClick={handleClick}/>
      <Button handleClick={handleClick}/>
      <Planetes />
      <Etat/>
    </>
  );
}

export default App;
