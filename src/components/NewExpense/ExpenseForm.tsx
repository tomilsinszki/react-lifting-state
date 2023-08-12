import React, {useState} from 'react';

// TODO: set props type
const ExpenseForm = (props : any) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2023-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
