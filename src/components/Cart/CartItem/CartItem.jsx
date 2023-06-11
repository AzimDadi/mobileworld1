import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import { MdClose } from "react-icons/md";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-prod">
        <div className="img-container">
          <img src={prod} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">product name </span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>X</span>
            <span className="highlight">&#8377;999</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;