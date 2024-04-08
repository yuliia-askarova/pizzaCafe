import React from "react";
import "./ModalBasket.css";
import { useSelector } from "react-redux";

const ModalBasket = ({ isOpen }) => {
  const products = useSelector((state) => Object.values(state.basket));
  // console.log(products);
  return (
    <>
      {isOpen && (
        <div className="modal-basket">
          <ul>
            {products.map((item) => (
              <li key = {item._id}>
                <img src={item.imageUrl} alt="" />
                <p>{item.name}</p>
                <div>
                    <button></button>
                    <p>{item.quantity}</p>
                    <button></button>
                </div>
                <p>{item.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ModalBasket;
