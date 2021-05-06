// A component in React is JS Function
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

function ExpenseItem(props) {
	// return <h2>Expense Item!</h2>;

	return (
		<Card className="expense-item">
			<ExpenseDate 
			dateOfExpense={props.dateOfExpense}></ExpenseDate>
			<div className="expense-item__description">
				<h2>{props.titleOfExpense}</h2>
				<div className="expense-item__price">
					$ {props.amountOfExpense}
				</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
