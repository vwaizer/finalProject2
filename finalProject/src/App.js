import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Product" element={<Product/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
