import React, { useState } from "react"; // Import useState

function Item({ name, category }) {
  // Step 1: Set up state to track whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Step 2: Event handler for adding/removing from the cart
  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 3: Change button text based on whether the item is in the cart */}
      <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
