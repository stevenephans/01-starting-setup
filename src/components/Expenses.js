import React, { useState } from "react";
import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "./Card";

//---QUESTIONS & COMMENTS---------------------------------------------------------
//You can't lift/access state variable directly after setting it -->
//--> updateFilterHandler: console.log("Currently Selected Year: " + filterYear)
//returns previous state value
//--------------------------------------------------------------------------------

function Expenses(prop) {
	const [filterYear, setFilterYear] = useState("all");

	const updateFilterHandler = (selectedYear) => {
		//console.log("In expenses now...");
		setFilterYear(selectedYear);
	};

	const filteredExpenseList =
		filterYear === "all"
			? prop.items
			: prop.items.filter(
					(expense) => expense.date.getFullYear().toString() === filterYear //filters expense list (prop.items) to show only ones with same year as filter year
			  );

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					defaultVal={filterYear}
					onUpdateFilter={updateFilterHandler}
					//Another example of 2-way binding: value is LIFTED to parent component thru
					//prop 'onUpdateFilter' and RECEIVED from parent component thru prop 'defaultVal'
				/>
				<ExpensesChart expenses={filteredExpenseList} />
				{filteredExpenseList.length === 0 ? ( // ternary statement --> {condition ? doIfTrue : doIfFalse}
					<p>No Expenses Found</p>
				) : (
					filteredExpenseList.map((expense) => (
						<ExpenseItem
							key={expense.id}
							//ALWAYS add key when mapping lists of items
							//key prop lets React uniquely identify position of each item in the array
							//peep video 66 in course to see what kind of fuckery goes down without keys
							//basically allows list to be updated more efficiently and
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
						//map() takes in elements (expense) from array (items) and executes a function
						//on each element, in this case creating an ExpenseItem component
					))
				)}
				<button
					className="papyrify"
					onClick={prop.togglePapyrus}
					style={{
						backgroundColor: prop.buttonColor,
						border: "1px solid " + prop.buttonColor,
					}}
				>
					{prop.buttonText}
				</button>
			</Card>
		</div>
	);
}

export default Expenses;
