import "./ExpenseFilter.css";

/* --------- QUESTIONS/NOTES ----------------------------------------------------
 ExpenseFilter is a CONTROLLED COMPONENT: it receives & updates filter year value 
 from props defined in parent --> Expenses.js CONTROLS ExpenseFilter.js
------------------------------------------------------------------------------- */

function ExpenseFilter(props) {
	//console.log(props.defaultVal);

	const filterChangeHandler = (event) => {
		console.log("in ExpenseFilter now...");
		console.log(event.target.value);
		props.onUpdateFilter(event.target.value);
	};

	return (
		<div className="filter-container">
			<div className="filter-header">
				<label>Filter By Year</label>
				<select value={props.defaultVal} onChange={filterChangeHandler}>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="all">All</option>
				</select>
			</div>
			<div className="filter-graph"></div>
		</div>
	);
}

export default ExpenseFilter;
