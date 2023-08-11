import { useState } from 'react';

type ItemProperty = {
    title: string;
}

const Item = (props : ItemProperty) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
    };

    return (
        <div style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}>
            <div style={{ marginBottom: '10px' }}>{title}</div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default Item;
