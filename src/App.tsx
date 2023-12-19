import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './store/store';
import { decrement, increment } from './store/counterSlice';
import style from './styles/App.module.scss';
import Layout from './layouts/Layout';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Layout title="SHOP.CO">
      <div className={style.main}>
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
    </Layout>
  );
}

export default App;
