import { useState } from "react";

const MyButton = (props) => {
  return <button onClick={props.handleClick}>Bouton cliqué {props.count} fois !</button>;
};

export default function Etat() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Hooks : useState</h1>
      <MyButton count={count} handleClick={handleClick}/>
      <MyButton count={count} handleClick={handleClick}/>
      <MyButton count={count} handleClick={handleClick}/>
    </>
  );
}
