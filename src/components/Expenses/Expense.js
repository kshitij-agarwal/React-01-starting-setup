import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";

function Expense(props) {
	return (
		<Card className="expenses">
			<ExpenseItem
				titleOfExpense={props.items[0].title}
				amountOfExpense={props.items[0].amount}
				dateOfExpense={props.items[0].date}
			></ExpenseItem>

			<ExpenseItem
				titleOfExpense={props.items[1].title}
				amountOfExpense={props.items[1].amount}
				dateOfExpense={props.items[1].date}
			></ExpenseItem>

			<ExpenseItem
				titleOfExpense={props.items[2].title}
				amountOfExpense={props.items[2].amount}
				dateOfExpense={props.items[2].date}
			></ExpenseItem>

			<ExpenseItem
				titleOfExpense={props.items[3].title}
				amountOfExpense={props.items[3].amount}
				dateOfExpense={props.items[3].date}
			></ExpenseItem>
		</Card>
	);
}

export default Expense;
