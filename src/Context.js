import React, { useEffect, useState, createContext } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("cartItems");
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const submitOrder = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const response = await fetch("http://localhost:3000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          products: cartItems.map((item) => ({
            product_id: item.id,
            quantity: item.quantity,
          })),
        }),
      });
      if (!response.ok) {
        throw new Error("Захиалга үүсэхэд алдаа гарлаа");
      }  
      const orderData = await response.json();
      console.log("Захиалга баталгаажлаа:", orderData);
      alert(`Захиалга баталгаажлаа`);

      clearCart();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const value = {
    products,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    cartItems,
    submitOrder,
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
