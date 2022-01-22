import "./Card.css";

//Basically a wrapper component to add rounded corners and drop-shadow
function Card(props) {
  const classes = "card " + props.className; //adds .card class to all Card components
  return <div className={classes}>{props.children}</div>; //props.children = all children of a given 'Card' component
}

export default Card;
