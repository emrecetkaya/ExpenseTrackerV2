import React from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
  const handleSaveExpenseData = (savedExpenseData) => {
    const newExpenseData = {
      ...savedExpenseData,
      id: Math.random().toString()
    };
    props.onNewExpenseData(newExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  )
}

export default NewExpense