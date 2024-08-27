import { useState } from "react"

export const Cart = () => {

    const [cartCount, SetCartCount] = useState(0);
    const handleClick = () => SetCartCount(cartCount + 1);

  return (
    <>
        <h1>Number of items in the cart: {cartCount}</h1>
        <button onClick={handleClick}> {cartCount} Add to Cart</button>
    </>
  );
}
