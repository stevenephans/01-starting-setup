import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // three separate states to manage each form field
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    //'event' object is automatically created by JS when 'onChange' listener is triggered
    setEnteredTitle(event.target.value); //grabs current form value, ALWAYS as a string, whenever onChange listener detects a change
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //console.log("this date was just selected: " + event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //onSubmit event triggers a page reload. This method disables any event default behavior

    //create object containing latest values of form entry states
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate), //parses date string back into date object
    };

    //Pass user input data to parent component, NewExpense
    props.onSaveExpenseData(expenseData);

    //if we add 'value' attribute to <input> elements, state updates input value...called two way binding...allows us to override user input values when form
    //is submitted, even though there was no state change to the form fields
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
