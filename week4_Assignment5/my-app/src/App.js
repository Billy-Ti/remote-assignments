import React, { useState } from 'react';
import Counter from './components/Counter';
import './css/counter.css';

const App = () => {
  const [counters, setCounters] = useState([0, 0, 0]);

  // 將特定 Counter 按鈕的值增加 1
  const handleIncrement = (index) => {
    const updatedCounters = [...counters];
    // console.log(updatedCounters); 點擊之前的陣列狀態的值

    updatedCounters[index] += 1;
    setCounters(updatedCounters);
    // console.log(updatedCounters); 點擊之後的即時陣列狀態的值
  }

  // 全部 + 1
  const incrementAll = () => {
    const updatedCounters = counters.map(count => count + 1);
    setCounters(updatedCounters);
  }
  // 增加一個 Counter，初始值設 0
  const addCounter = () => {
    setCounters([...counters, 0]);
  }

  // 全部歸 0
  const resetAllCounter = () => {
    const resetCounters = counters.map(() => 0);
    setCounters(resetCounters);
  }

  return (
    <div>
      <button className='btn-allAdd' onClick={incrementAll}>All + 1</button>
      <button className='btn-allReset' onClick={resetAllCounter}>Reset</button>

      {counters.map((count, index) => (
        <Counter key={index} count={count} onIncrement={() => handleIncrement(index)} />
      ))}
      <button className='btn-counterAdd' onClick={addCounter}>Add a Counter</button>
    </div>
  );
}

export default App;
