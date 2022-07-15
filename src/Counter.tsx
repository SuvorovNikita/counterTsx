import { FC } from 'react';

type PropsType = {
  count: number;
  incrimentCount: () => void;
  dicrimentCount: () => void;
};

const Counter: FC<PropsType> = ({ count, incrimentCount, dicrimentCount }) => {
  const disabledCount = count < 0 || count === 5;
  const disabledResetCount = count === 0 || count <= 0;
  const colorStop = count === 5 ? 'stop' : '';

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
