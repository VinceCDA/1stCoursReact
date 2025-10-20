function List(props) {
  if (!props.planetes) {
    return <li>Chargement...</li>;
  }
  if (props.planetes.length === 0) {
    return <div>Il n'y a aucune planète.</div>;
  }
  return (
    <ul>
      {props.planetes.map((value) => {
        return <ListItem key={value} planete={value} />;
      })}
    </ul>
  );
}

function ListItem(props) {
  return <li>{props.planete}</li>;
}
function Planetes() {
  const planetes = ["Terre", "Mercure", "Vénus", "Mars", "Jupiter", "Saturne"];
  return (
    <>
      <h1>Planetes :</h1>
      <List planetes={planetes} />
    </>
  );
}

export default Planetes;
