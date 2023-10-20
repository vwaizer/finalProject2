import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import Product from './Pages/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [dataBase,setDataBase]=useState(null);
  useEffect(()=>{
    async function getData() {
      const response = await axios.get("https://fakestoreapi.com/products/category/jewelery");
      setDataBase(response.data);
    }
    getData();
  },[])
  console.log(dataBase);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={dataBase}/>}></Route>
        <Route path="/Product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App;
