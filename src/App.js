import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Layout from './components/Layout'
import Items from "./components/Items"
import Cart from './components/Cart'

const items = [
  { id: 1, name: 'product 1', price: 2 },
  { id: 2, name: 'product 2', price: 4 },
  { id: 3, name: 'product 3', price: 6 }
]

const App = () => {
  const [cartItems, setCartItems] = useState([{ id: 1, name: 'product 1', price: 2 }])
  console.log(cartItems)
  return (
    <Routes>
      <Route path="/" exact element={<Layout cartItems={cartItems} />} >
        <Route index element={<Items key={items.id} items={items} cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="cart" element={<Cart cartItems={cartItems} />} />
      </Route>
    </Routes>
  )
}

export default App