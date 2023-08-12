import { useState } from 'react';

type ItemProperty = {
    id: string;
    title: string;
    amount: number;
    date: Date;
}

const Item = (props : ItemProperty) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const [date, setDate] = useState(props.date);

    const clickHandler = () => {
        setTitle('Updated');
    };

    return (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>
            <div style={{ marginBottom: '10px' }}>
                {title},
                {amount},
                {date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay()}
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default Item;
