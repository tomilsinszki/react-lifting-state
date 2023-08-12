import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseData from "../types";

const NewExpense = (props : {onSaveExpenseData(data : ExpenseData) : void}) => {
    return (
        <div>
            <ExpenseForm onSaveExpenseData={props.onSaveExpenseData} />
        </div>
    );
};

export default NewExpense;
