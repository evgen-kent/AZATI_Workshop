import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/counterSlice';
import { RootState } from '../../store/store';
import Layout from '../../layouts/Layout';
import style from '../../styles/App.module.scss';
import Article from '../../components/article/Article';

const Home = () => {
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
      <Article/>
    </Layout>
  );
};

export default Home;
