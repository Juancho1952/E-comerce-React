import axios from 'axios'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/shared/Header'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import LoginScreen from './Pages/LoginScreen'
import ProductId from './Pages/ProductId'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import Purchases from './Pages/Purchases'

function App() {

  // useEffect(() => {
  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

  //   const data = {
  //     firstName: "Juan",
  //     lastName: "Duran",
  //     email: "juan@academlo.com",
  //     password: "Pass1234",
  //     phone: "1234567891",
  //     role: "admin"
  //   }

  //   axios.post(URL, data)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])


  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductId />} />
        <Route path='/login'  element={<LoginScreen />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/purchases' element={<Purchases />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
