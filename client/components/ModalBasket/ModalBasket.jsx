import React from "react";
import "./ModalBasket.css";
import { useSelector, useDispatch } from "react-redux";
import { setModalBasketOpen, setModalOrderOpen } from "../../Store/Slices/modalSlicer";

const ModalBasket = ({ isOpen }) => {
  const products = useSelector((state) => Object.values(state.basket));
  const dispatch = useDispatch();
  const amount = products.reduce((acc, cur) => {
    console.log(cur);
  }, {})
  
  return (
    <>
      {isOpen && (
        <div className="modal-basket">
          <ul>
            {products.map((item) => (
              <li key = {`order-${item._id}`}>
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


          <button onClick ={()=> {
         
            dispatch(setModalBasketOpen())
            dispatch(setModalOrderOpen())
          }}>Order</button>
        </div>
      )}
    </>
  );
};

export default ModalBasket;
