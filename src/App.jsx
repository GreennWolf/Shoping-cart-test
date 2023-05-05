import React, { useContext, useState } from "react"
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"

function App() {
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products/>
      <Footer/>
    </CartProvider>
  )
}

export default App
