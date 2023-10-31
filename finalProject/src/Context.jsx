import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './page/Cart';
import Detail from './page/Detail';
import Home from './page/Home';
import Login from './page/Login';
import Product from './page/Product';
import PaymentForm from './page/PaymentForm';
const Context = () => {
    const [dataBase, setDataBase] = useState([]);
    // const [loading,setLoading]=useState(false);
    async function getData() {
      const response = await axios.get('https://mocki.io/v1/11b04bc9-4338-4cfb-84e6-cfca220a5888');
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
              <Route path="/Payment" element={<PaymentForm />}></Route>
            </Routes>
          </BrowserRouter>
       
      </div>
    );
}

export default Context