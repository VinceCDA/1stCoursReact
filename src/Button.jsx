function Button({text = "Texte Manquant", color = "black", fontSize = 20, handleClick}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };
  return (
    <>
      <button onClick={handleClick} style={buttonStyle}>{text}</button>
    </>
  );
}


export default Button;
