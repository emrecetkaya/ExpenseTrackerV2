import React, { useState } from 'react'
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [enteredDate, setEnteredDate] = useState('2020');

  const handleDateChange = (selectedDate) => {
    setEnteredDate(selectedDate);

  };

  const filteredArray = props.expenses.filter((expense) => expense.date.getFullYear() == enteredDate);
  return (

    <Card className="expenses">
      <ExpensesFilter currentYear={enteredDate} onDateChangeHandler={handleDateChange} />
      {filteredArray.length === 0 && <p>No Expenses Found.</p>}
      {filteredArray.length > 0 &&
        filteredArray.map((expense) => { return <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} /> })}
    </Card>

  )
}

export default Expenses