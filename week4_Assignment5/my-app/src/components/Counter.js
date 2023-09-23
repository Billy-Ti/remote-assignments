import React from 'react';
import '../css/counter.css';

const Counter = ({ count, onIncrement }) => {
    return (
        <div>
            <button className='btn-increment' onClick={onIncrement}>+ 1</button>
            <span className='txt'>{count}</span>
        </div>
    );
}

export default Counter;
