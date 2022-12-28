import { useState } from "react";

const items = [
  {
    imgurl: "https://m.media-amazon.com/images/I/618Bb+QzCmL._SX679_.jpg",
    type: "Iphone",
    rating: null,
    price: "Rs. 79,900.00",
  },
  {
    imgurl: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/414-+D0tn4L._SY300_SX300_.jpg",
    type: "HP pavillion",
    rating: "⭐⭐⭐⭐⭐",
    price: "Rs. 89,999",
  },
  {
    imgurl: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41tZ8gvreqL._SX300_SY300_QL70_FMwebp_.jpg",
    type: "Google PIXEL 7",
    rating: null,
    price: "Rs. 1,63,000",
  },
  {
    imgurl: "https://m.media-amazon.com/images/I/41cTn8tpx0L.jpg",
    type: "Realme 9 pro+",
    rating: "⭐⭐⭐⭐⭐",
    price: "Rs. 21,999",
  },
  {
    imgurl: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61mIUCd-37L._SX679_.jpg",
    type: "Oneplus 10 Pro 5G",
    rating: null,
    price: "Rs. 66,999",
  },
  {
    imgurl: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61OBvwVHtQL._SX569_.jpg",
    type: "Dell XPS 13",
    rating: null,
    price: "Rs. 1,40,000",
  },
  {
    imgurl: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41naEJhrRNL._SX300_SY300_QL70_FMwebp_.jpg",
    type: "Acer spin 5",
    rating: "⭐⭐⭐⭐⭐",
    price: "Rs. 1,19,900",
  },
  {
    imgurl: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71JFMDI0tOL._SX569_.jpg",
    type: "Asus ROG Zephyrus",
    rating: "⭐⭐⭐⭐⭐",
    price: "Rs. 4,05,500",
  }
];

export function ItemsList({ setCartCount, cartCount }) {

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            items.map((item) => (
              <ItemCard item={item} setCartCount={setCartCount} cartCount={cartCount} />
            ))
          }
        </div>
      </div>
    </section>
  );

}


function ItemCard({ setCartCount, cartCount, item }) {

  const [buttonValue, setButtonValue] = useState('Add to Cart');

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={item.imgurl} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item.type}</h5>
            <div className="d-flex justify-content-center small mb-2">
              {item.rating}
            </div>
            {item.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => {
            if (buttonValue === 'Add to Cart') {
              setButtonValue('Remove from Cart');
              setCartCount(cartCount + 1);
            } else {
              setButtonValue('Add to Cart');
              setCartCount(cartCount - 1);
            }
          }}>{buttonValue}</button></div>
        </div>
      </div>
    </div>
  );
}
