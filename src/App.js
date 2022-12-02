import './App.css';
import Card from './Card';
import Cart from './Cart';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';

function App() {


  let data = [{
    id: 1,
    product: "Iphone",
    imgurl: "https://m.media-amazon.com/images/I/618Bb+QzCmL._SX679_.jpg",
    price: 79900
  },
  {
    id: 2,
    imgurl: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
    product: "Macbook pro",
    price: 129900
  },
  {
    id: 3,
    imgurl: "https://mx2games.com/wp-content/uploads/2022/03/ps5-digital-edition.jpg",
    product: "PlayStation 5",
    price: 59900
  },
  {
    id: 4,
    imgurl: "https://m.media-amazon.com/images/I/41cTn8tpx0L.jpg",
    product: "Realme 9 pro+",
    price: 22000
  },
  {
    id: 5,
    imgurl: "https://m.media-amazon.com/images/I/61KyGB6QcBL._UX679_.jpg",
    product: "Mathey-Tissot",
    price: 48899
  }, {
    id: 6,
    imgurl: "https://m.media-amazon.com/images/I/41GpQAMeoXL._SY445_SX342_QL70_FMwebp_.jpg",
    product: "Iwatch",
    price: 76600
  }]

  const [cartlist, setList] = useState([]);
  const [total, setTotal] = useState(0);

  let addtocart = (product) => {
    setList([...cartlist, product])
    setTotal(total + product.price)
  }

  let removecart = (product) => {
    let index = cartlist.findIndex((cartitem) => data.id === cartitem.id)
    cartlist.splice(index, 1)
    setList([...cartlist])
    setTotal(total - product.price);
  }



  return (
    <>
      <div className='header'>
        <h1> Shop in Style</h1>
      </div>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='row'>
                {data.map((card) => {
                  return <Card product={card} addtocart={addtocart} />
                })}

              </div>


            </div>
            <div className='col-lg-3'>
              <h3>Cart:</h3>
              <Cart cartlist={cartlist} removecart={removecart} />
              <h4>Total:{total}</h4>

            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default App;
