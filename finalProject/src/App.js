import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import Product from './Pages/Product';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Product" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
