
// import "./Modal.css";
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addToBasket } from "../../Store/Slices/basketSliceReducer";

// const Modal = ({ handleClose, show, id }) => {
//   // const showHideClassName = show ? "modal display-block" : "modal display-none";
 
//   const products = useSelector((state) => [...state.pizza.pizza, ...state.drinks.drinks]) || [];
//   const product = products.find((item) => item._id === id);
//   const [amount, setAmount] = useState(0) 
  
//   const dispatch = useDispatch();
//   const handleAdd = () => {
//     dispatch(addToBasket(product));
//     handleClose();
//   };
//   console.log(amount, 9999);

//   useEffect(()=> {
//     setAmount(product.price[0])
//   }, [product])

//   if(!product){
//     return
//   }

//   return (
//     <>
//       {" "}
//       {show && (
//         <div className={"modal display-block"}>
//           <section className="modal-main">

//             <div className="modal-header">
//               <p>Pizza</p>
//               <p>{product.name}</p>
//             </div>

//             <div className="modal-container">
//               <div>
//                 <div className="modal-img">
//                   <img src={product.imageUrl} alt="Pizza" />
//                 </div>
//               </div>

//               <form className="form">
//                 <div className="option">
//                   <label className="modal-text" htmlFor="radio1">
//                     Small size
//                   </label>
//                   <input
//                     type="radio"
//                     id="radio1"
//                     name="radios"
//                     value={amount === product?.price[0]}
//                     onChange = {()=> setAmount(product?.price[0])}
//                   ></input>
//                   <p className="modal-text">35 cm</p>
//                   <p className="modal-text">{product?.price[0]} euro</p>
//                 </div>

//                 <div className="option">
//                   <label className="modal-text" htmlFor="radio2">
//                     Large size
//                   </label>
//                   <input
//                     type="radio"
//                     id="radio2"
//                     name="radios"
//                     value={amount === product?.price[1]}
//                     onChange = {()=> setAmount(product?.price[1])}
//                   ></input>
//                   <p className="modal-text">45 cm</p>
//                   <p className="modal-text">{product?.price[1]} euro</p>
//                 </div>
//               </form>
//             </div>

//             <div className="modal-footer">
//               <p>TOTAL: </p>
//               <button onClick={handleAdd}>ADD TO BASKET</button>
//             </div>

//             <button onClick={handleClose}></button>
//           </section>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;


import "./Modal.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket } from "../../Store/Slices/basketSliceReducer";

const Modal = ({ handleClose, show, id }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => [...state.pizza.pizza, ...state.drinks.drinks]) || [];
  const product = products.find((item) => item._id === id);
  const [amount, setAmount] = useState(0);
  
  useEffect(() => {
    if(product) {
      setAmount(product.price[0]);
    }
  }, [product]);

  if (!product) {
    return null; 
  }

  const handleAdd = () => {
  dispatch(addToBasket({...product, amount}));
    handleClose();
  };
// console.log(amount, 1010);
  return (
    <>
      {" "}
      {show && (
        <div className={"modal display-block"}>
          <section className="modal-main">

            <div className="modal-header">
              <p>Pizza</p>
              <p>{product.name}</p>
            </div>

            <div className="modal-container">
              <div>
                <div className="modal-img">
                  <img src={product.imageUrl} alt="Pizza" />
                </div>
              </div>

              <form className="form">
                <div className="option">
                  <label className="modal-text" htmlFor="radio1">
                    Small size
                  </label>
                  <input
                    type="radio"
                    id="radio1"
                    name="radios"
                    value={amount === product?.price[0]}
                    onChange={() => setAmount(product?.price[0])}
                  ></input>
                  <p className="modal-text">35 cm</p>
                  <p className="modal-text">{product?.price[0]} euro</p>
                </div>

                <div className="option">
                  <label className="modal-text" htmlFor="radio2">
                    Large size
                  </label>
                  <input
                    type="radio"
                    id="radio2"
                    name="radios"
                    value={amount === product?.price[1]}
                    onChange={() => setAmount(product?.price[1])}
                  ></input>
                  <p className="modal-text">45 cm</p>
                  <p className="modal-text">{product?.price[1]} euro</p>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <p>TOTAL: </p>
              <button onClick={handleAdd}>ADD TO BASKET</button>
            </div>

            <button onClick={handleClose}></button>
          </section>
        </div>
      )}
    </>
  );
};

export default Modal;

