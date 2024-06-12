import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useShoppingCart } from "../../contexts/shoppingCartContext";

import "./AddToCartButton.scss";

const AddToCartButton = () => {
  return (
        <button className="addToCart-btn" style={{border:"none"}}>
          <MdOutlineAddShoppingCart />
        </button>
  );
};

export default AddToCartButton;
