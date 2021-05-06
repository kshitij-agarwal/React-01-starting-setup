// A component in React is JS Function
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
	// return <h2>Expense Item!</h2>;

	return (
		<div className="expense-item">
			<ExpenseDate 
			dateOfExpense={props.dateOfExpense}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{props.titleOfExpense}</h2>
				<div className="expense-item__price">
					$ {props.amountOfExpense}
				</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
