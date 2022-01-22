import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // one state with an object containing all three form fields
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput, //grabs existing user input object
      enteredTitle: event.target.value, //updates enteredTitle key/value in userInput
      //without '...userInput' function would replace useState 3 value array with just the updated title
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  //???? WHY IS prevState EQUAL TO CURRENT userInput OBJECT ???????
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
    //IMPORTANT: when state value depends on a previous state, it is better to handle change as shown
    //in 'dateChangeHandler' rather than 'amountChangeHandler'
  };

  const submitHandler = (event) => {
    event.preventDefault(); //onSubmit event defaults to re-loading page. This method disables any event default behavior

    //creates object containing latest values of form entry states
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //parses date string back into date object
    };

    //PASSING DATA FROM CHILD TO PARENT
    //passes form data values up to parent, NewExpense, through the prop onSaveExpenseData (which is defined in parent component and points to method in parent component)
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
      </div>
    </form>
  );
};

export default ExpenseForm;
