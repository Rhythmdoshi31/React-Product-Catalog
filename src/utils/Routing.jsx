import React from 'react'
import Home from '../Components/Home'
import { Route, Routes } from 'react-router-dom'
import Details from '../Components/Details'
import CreateProduct from '../Components/CreateProduct'

function Routing() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path='/details/:id' element={<Details />} />
            <Route path='/CreateProduct' element={<CreateProduct />}></Route>
        </Routes>
    </>
  )
}

export default Routing