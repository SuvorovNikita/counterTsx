import { useState } from 'react';
import './App.css';
import Counter from './Counter';

const App = () => {
  const [count, setCount] = useState(0);

  const incrimentCount = () => {
    setCount(count + 1);
  };

  const dicrimentCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Counter count={count} incrimentCount={incrimentCount} dicrimentCount={dicrimentCount} />
    </div>
  );
};

export default App;
