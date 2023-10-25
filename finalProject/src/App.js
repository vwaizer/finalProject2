import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './page/Home';
import Product from './page/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './page/Cart';
import Detail from './page/Detail';
import Login from './page/Login'
// import { DotLoader } from 'react-spinners';
// import styled from 'styled-components';
// const LoadingBlock=styled.div`
//     height:500px;
//     display:flex;
//     flex-direction:row;
//     justify-content:center;
//     align-items:center;
// `;
function App() {
  const [dataBase,setDataBase]=useState([]);
  // const [loading,setLoading]=useState(false);
  async function getData() {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products/?categoryId=3');
    // setTimeout(()=>{setLoading(true)},2000)
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
   <div style={{backgroundColor:"white"}}>
   {/* {!loading ?? <LoadingBlock><DotLoader color="#36d7b7" /></LoadingBlock> } */}
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home data={dataBase}/>}></Route>
        <Route path="/Product" element={<Product data={dataBase} />}></Route>
        <Route path="/Cart" element={<Cart/>}></Route> 
        <Route path="/Detail:productID" element={<Detail/>}></Route> 
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App;
