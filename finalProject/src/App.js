import './App.css';
import { BrowserRouter,Route } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Product" element={<Product/>}></Route>
    </BrowserRouter>
  );
}

export default App;
