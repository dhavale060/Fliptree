import './App.css';
import styled from 'styled-components';
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import ProtectedRoute from './common/ProtectedRoute';
import ProductsPage from './Pages/ProductsPage';
import ProductDetails from './Pages/ProductDetails';
import CartPage from './Pages/CartPage';

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-items: center;
    margin-inline: auto;
    width: 1208px;
    background-color: #fff;
    margin-top: 48px;
    border-radius: 10px;
    padding-bottom:20px;
    box-shadow: 0 5px 10px rgba(0, 0, 5, 0.1);
`
function App() {
  return (
     <Router>
      <Container>
      <Header/>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductsPage/>
              </ProtectedRoute>
            }
          />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
        </Container>
     </Router>
  );
}

export default App;
