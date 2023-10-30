import { createContext, useState } from 'react';
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
export const DataContext=createContext([]);
function App() {
    const [cartData,setCartData]=useState([]);
    
 return(<DataContext.Provider value={{data:cartData, method:setCartData}}>
    
      <Context></Context>
 
 
 </DataContext.Provider>)
}

export default App;
