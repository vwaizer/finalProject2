import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './page/Home';
import Product from './page/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './page/Cart';
import Detail from './page/Detail';
import Login from './page/Login'
function App() {
  const [dataBase,setDataBase]=useState([]);
  async function getData() {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=3');
    console.log(response);
    setDataBase(response.data);
  }
  useEffect(()=>{
    
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
        <Route path="/Product" element={<Product data={dataBase} />}></Route>
        <Route path="/Cart" element={<Cart/>}></Route> 
        <Route path="/Detail:productID" element={<Detail/>}></Route> 
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App;
