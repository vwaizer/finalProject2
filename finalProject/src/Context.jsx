import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './page/Home';
import Product from './page/Product';
import {  useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './page/Cart';
import Detail from './page/Detail';
import Login from './page/Login';
const Context = () => {
    const [dataBase, setDataBase] = useState([]);
    // const [loading,setLoading]=useState(false);
    async function getData() {
      const response = await axios.get('https://mocki.io/v1/98566d9f-7df0-464d-b702-7ce36b6aa7fd');
      // setTimeout(()=>{setLoading(true)},2000)
      setDataBase(response.data);
    }
    
    useEffect(() => {
      try {
        getData();
      } catch (err) {
        alert(err.message);
      }
    }, []);
    console.log(dataBase);
    
    return (
      <div style={{ backgroundColor: 'white' }}>
        {/* {!loading ?? <LoadingBlock><DotLoader color="#36d7b7" /></LoadingBlock> } */}
        
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home data={dataBase} />}></Route>
              <Route path="/Product" element={<Product data={dataBase} />}></Route>
              <Route path="/Cart" element={<Cart data={dataBase} />}></Route>
              <Route path="/:productID" element={<Detail data={dataBase} />}></Route>
              {/* <Route path="/Product/:productID" element={<Detail data={dataBase}/>}></Route>  */}
              <Route path="/Login" element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
       
      </div>
    );
}

export default Context