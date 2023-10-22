import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './page/Home';
import Product from './page/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './page/Cart';
import Detail from './page/Detail';
function App() {
  const [dataBase,setDataBase]=useState(null);
  useEffect(()=>{
    async function getData() {
      const response = await axios.get("https://dummyjson.com/products/categories/furniture");
      setDataBase(response.data);
    }
    try{getData();}
    catch(err){
      alert(err.message);
    }
    
  },[])
  console.log(dataBase);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={dataBase}/>}></Route>
        <Route path="/Product" element={<Product  />}></Route>
        <Route path="/Cart" element={<Cart/>}></Route> 
        <Route path="/Detail" element={<Detail/>}></Route> 
      </Routes>
    </BrowserRouter>


  )
}

export default App;
