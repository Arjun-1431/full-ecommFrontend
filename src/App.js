import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './UserPanel/SubComponents/Navbar';
import HomePage from './UserPanel/Components/Home';
import Login from './UserPanel/Components/Login';
import AllProducts from './UserPanel/Components/AllProducts';
import Checkout from './UserPanel/Components/Checkout';
import Register from './UserPanel/Components/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/allproducts' element={<AllProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
