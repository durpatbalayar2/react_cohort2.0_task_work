import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductsDetails from './pages/ProductsDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <>

    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:productId' element={<ProductsDetails/>}/>
        <Route path ="*" element={<PageNotFound/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App