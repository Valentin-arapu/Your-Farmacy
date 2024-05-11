import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/';
import ReactDOM from 'react-dom/client'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Navbar />
    <Routes>
      <Route exact path='/products/' element={<Products />} />
      <Route path='/' element={<Home />} />
      <Route path='/cart/' element={<Cart />} />
    </Routes>
  </Router>
);