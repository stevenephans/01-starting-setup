import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  //props (conventional name but could be called anything) is autogenerated object...
  //...containing our custom ExpenseItem props - title, amount, date - defined in parent component, App.js

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* passes/copies ExpenseItem's props.date into a prop for ExpenseDate (also called date) */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
