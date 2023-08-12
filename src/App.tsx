import React, {useState} from 'react';
import './App.css';
import Item from "./components/Item";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./components/types";

function App() {
    const [expenses, setExpenses] = useState(
        [
            {
                id: 'e1',
                title: 'Water',
                amount: 34.12,
                date: new Date(2023, 1, 5),
            },
            {
                id: 'e2',
                title: 'Bread',
                amount: 51.49,
                date: new Date(2023, 4, 7),
            }
        ]
    );

    const onSaveExpenseData = (data : ExpenseData) => {
        setExpenses(prevState => {
            return [
                ...prevState,
                {
                    ...data,
                }
            ];
        })
    };

    return (
        <div className="App" style={{margin: '100px'}}>
            <div style={{marginBottom: '20px'}}>
                <NewExpense onSaveExpenseData={onSaveExpenseData} />
            </div>
            {
                expenses.map((expense) => (
                    <Item
                        id={expense.id}
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </div>
  );
}

export default App;
