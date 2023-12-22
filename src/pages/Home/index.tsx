import Layout from '../../layouts/Layout';
import style from '../../styles/App.module.scss';
import ProductCard from '../../components/ProductCard';
import { productCard } from '../../constants/ProductCard';
import { useId } from 'react';

const Home = (): JSX.Element => {
  const id = useId();
  return (
    <Layout title="SHOP.CO">
      <div className={style.main}>
        {/* для примера карточки сделан div с белым фоном  */}
        <div
          style={{
            backgroundColor: 'white',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            padding: '100px 0px',
          }}
        >
          {productCard.map((product) => (
            <ProductCard
              key={id}
              title={product.title}
              price={product.price}
              img={product.img}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
