import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import Product from './Pages/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './Pages/Cart';
import Detail from './Pages/Detail';
function App() {
  const [dataBase,setDataBase]=useState(null);
  useEffect(()=>{
    async function getData() {
      const response = await axios.get("https://fakestoreapi.com/products/categories");
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
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Cart" element={<Cart/>}></Route> 
        <Route path="/Detail" element={<Detail/>}></Route> 
      </Routes>
    </BrowserRouter>


  )
}

export default App;
