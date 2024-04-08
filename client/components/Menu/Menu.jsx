import React, { useEffect } from "react";
import mainPic from "../../assets/menu-main-pic.jpg";
import "./Menu.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../Header/Header.css";
import Footer from "../Footer/Footer.jsx";
import { useDispatch, useSelector } from "react-redux";
import fetchPizzaAsync from "../../Store/Slices/fetchPizzaSliceAsync.js";
import fetchDrinksAsync from "../../Store/Slices/fetchDrinksSliceAsync.js";
import ModalBasket from "../ModalBasket/ModalBasket.jsx";
import OrderModal from "../OrderModal/OrderModal.jsx";



const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isOpen = useSelector(state => state.modal.isBasketOpen);
  const isOrderOpen = useSelector(state => state.modal.isOrderOpen);


  useEffect(()=> {
    const init = async() => {
    
      dispatch(fetchPizzaAsync())
      dispatch(fetchDrinksAsync())
    }
    init()
  }, [dispatch])



  useEffect(() => {
    navigate("./pizzas"); 
  }, [navigate]);

  return (
    <>
      <div className="menu">
        <img src={mainPic} alt="" />
      </div>

      <div className="wrapper">
        <div className="container">
          <nav className="nav">
            <ul className="nav-list subnav">
              <li className="link">
                <Link to="pizzas" className="sublink">
                  Pizzas
                </Link>
              </li>
              <li className="link">
                <Link to="drinks" className="sublink">
                  Drinks
                </Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>

      <Footer />
      <ModalBasket isOpen = {isOpen}/> 
      <OrderModal isOpen = {isOrderOpen}/>
    </>
  );
};

export default Menu;
