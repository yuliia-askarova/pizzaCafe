import React from 'react';
import logoBasket from '../../assets/basket.svg';
import { useSelector, useDispatch } from 'react-redux';
import './Basket.css';
import { setModalBasketOpen } from '../../Store/Slices/modalSlicer';


function Basket() {
  const products = useSelector(state => state.basket);
  const quantity = Object.values(products).reduce((acc, cur)=> acc += cur.quantity, 0);
  const dispatch = useDispatch();

  return (
    <div className = 'logo-basket' onClick={()=> dispatch(setModalBasketOpen()) }>
        <img src={logoBasket} alt="" style={{ width: '35px', height: '35px' }} />
        <p>{quantity}</p>
    </div>
  )
}

export default Basket