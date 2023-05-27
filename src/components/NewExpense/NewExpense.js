import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
import NewExpenseButton from "./NewExpenseButton"

const NewExpense = (props) => {
  const [newExpenseClicked, setNewExpenseClicked] = useState(false);

  const handleSaveExpenseData = (savedExpenseData) => {
    const newExpenseData = {
      ...savedExpenseData,
      id: Math.random().toString()
    };
    props.onNewExpenseData(newExpenseData);
    setNewExpenseClicked(false);
  }

  const handleNewExpenseClick = () => {
    setNewExpenseClicked(true);
  }

  const handleCancelClick = () => {
    setNewExpenseClicked(false);
  }

  return (
    <div className="new-expense">
      {newExpenseClicked === false && <NewExpenseButton onNewExpenseClick={handleNewExpenseClick} />}
      {newExpenseClicked === true && <ExpenseForm onCancelClick={handleCancelClick} onSaveExpenseData={handleSaveExpenseData} />}
    </div>
  )
}

export default NewExpense