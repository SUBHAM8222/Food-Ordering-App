import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>

      {cartIsShown && <Cart onclose={HideCartHandler} />}
      <Header onshowcart={showCartHandler} />
      <main>
        
        <Meals />
      </main>
      </CartProvider>
  );
}

export default App;
