import { FC } from 'react';

type PropsType = {
  count: number;
  maxValue: number;
  minValue: number;
  incrimentCount: () => void;
  dicrimentCount: () => void;
};

const Counter: FC<PropsType> = ({ count, incrimentCount, dicrimentCount, maxValue, minValue }) => {
  const disabledCount = count === maxValue;
  const disabledResetCount = count <= minValue;
  const colorStop = count === maxValue ? 'stop' : '';

  return (
    <div className="container" style={{ textAlign: 'center', marginBottom: '5px' }}>
      <div className="wrapper-count">
        <div className={colorStop}>{count}</div>
      </div>
      <div className="wrapper-button">
        <button onClick={incrimentCount} disabled={disabledCount}>
          inc
        </button>
        <button onClick={dicrimentCount} disabled={disabledResetCount}>
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
