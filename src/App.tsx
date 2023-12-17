import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './store/store';
import { decrement, increment } from './store/counterSlice';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}


export default App;
