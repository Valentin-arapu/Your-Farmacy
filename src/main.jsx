import { BrowserRouter as Router, Routes, Route } from 'react-router-dom/';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './assets/Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route exact path='/Your-Farmacy' element={<App />} />
      <Route path='/Your-Farmacy/cart' element={<Cart />} />
    </Routes>
  </Router>
);