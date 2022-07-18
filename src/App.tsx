import { useState } from 'react';

import Counter from './Counter';

import './App.css';

const App = () => {
  const minValue = 0;
  const maxValue = 5;
  const [count, setCount] = useState(minValue);

  const incrimentCount = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };
  const dicrimentCount = () => setCount(0);

  return (
    <div className="App">
      <Counter
        count={count}
        incrimentCount={incrimentCount}
        dicrimentCount={dicrimentCount}
        maxValue={maxValue}
        minValue={minValue}
      />
    </div>
  );
};

export default App;
