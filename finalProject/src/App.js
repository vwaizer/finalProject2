import { createContext, useEffect, useState } from 'react';
import './App.css';
import Context from './Context';


// import { DotLoader } from 'react-spinners';
// import styled from 'styled-components';
// const LoadingBlock=styled.div`
//     height:500px;
//     display:flex;
//     flex-direction:row;
//     justify-content:center;
//     align-items:center;
// `;

let preInit=JSON.parse(window.localStorage.getItem("cartData"));
console.log(preInit);
if(preInit === null){
     
     window.localStorage.setItem("cartData",JSON.stringify({"data":[]}));
}
else{
     console.log(preInit.data.length);
}
export const DataContext=createContext(preInit);
function App() {
     let init=JSON.parse(window.localStorage.getItem("cartData"))
     // useEffect(()=>{
     //      init=JSON.parse(window.localStorage.getItem("cartData"))
     // console.log(init);
    
     // },[])
     const [cartData,setCartData]=useState(init.data);
    
 return(<DataContext.Provider value={{data:cartData, method:setCartData}}>
    
      <Context></Context>
 
          
 </DataContext.Provider>)
}

export default App;
