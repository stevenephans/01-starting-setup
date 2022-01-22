import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [formState, setFormState] = useState(1);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData); //takes added expense data from ExpenseForm and passes it up to App.js
    toggleFormState();
  };

  const toggleFormState = () => {
    setFormState((prevState) => {
      return prevState * -1;
    });
  };

  return (
    <div className="new-expense">
      {formState > 0 && ( // CONDITIONAL RENDER: {condition && doIfTrue}
        <button onClick={toggleFormState}>Add New Expense</button>
      )}

      {formState < 0 && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleFormState}
        />
      )}
    </div>
  );
}

export default NewExpense;
