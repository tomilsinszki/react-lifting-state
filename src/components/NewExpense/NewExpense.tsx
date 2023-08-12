import React from "react";
import ExpenseForm from "./ExpenseForm";

// TODO: set props type
const NewExpense = (props : any) => {
    return (
        <div>
            <ExpenseForm onSaveExpenseData={props.onSaveExpenseData} />
        </div>
    );
};

export default NewExpense;
