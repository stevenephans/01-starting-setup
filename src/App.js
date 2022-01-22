import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14), //Date() is JS constructor that generates a Date Object
	},
	{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const [papyrusState, setPapyrusState] = useState({
		font: '"Noto Sans JP", sans-serif',
		text: "PAPYRIFY",
		backgroundColor: "#40005d",
	});

	const togglePapyrusHandler = () => {
		setPapyrusState({
			font: '"Papyrus", sans-serif',
			text: "Perfection",
			backgroundColor: "rgb(31, 31, 31)",
		});
	};

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
			// When we pass a function to a setState method, the function automatically receives
			// the latest state snapshot (prevExpenses) as an argument
		});
	};

	return (
		<div style={{ fontFamily: papyrusState.font }}>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses
				items={expenses}
				togglePapyrus={togglePapyrusHandler}
				buttonText={papyrusState.text}
				buttonColor={papyrusState.backgroundColor}
			/>
		</div>
	);
}

export default App;
