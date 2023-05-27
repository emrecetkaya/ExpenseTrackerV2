import React from 'react'
import './NewExpense.css'

const NewExpenseButton = (props) => {
  return (
    <div>
      <button type="button" onClick={props.onNewExpenseClick}>Add New Expense</button>
    </div>
  )
}

export default NewExpenseButton