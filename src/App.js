import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import Notfound from './components/Notfound/Notfound';
import CounterContextProvider from './Context/CounterContext';
import Navbar from './components/Navbar/Navbar';
import UserContextProvider, { UserContext } from './Context/UserContext';
import { useContext, useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Details from './components/Details/Details'
import CartContextProvider from './Context/CartContext';
import { ToastContainer } from 'react-toastify';
import Checkout from './components/Checkout/Checkout';
import Allorders from './components/Allorders/Allorders';
import Wishlist from './components/Wishlist/Wishlist';
import Forgetpassword from './components/Forgetpassword/Forgetpassword'
import WishlistContextProvider from './Context/WishlishContext';




let router = createBrowserRouter([
  {path:'/' , element:<Layout/> , children:[
    {index:true , element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'login' , element:<Login/>},
    {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'register' , element:<Register/>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'details/:id' , element:<ProtectedRoute><Details/></ProtectedRoute>},
    {path:'checkout' , element:<ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:'allorders' , element:<ProtectedRoute><Allorders/></ProtectedRoute>},
    {path:'forgetpassword' , element:<Forgetpassword/>},
    {path:'wishlist' , element:<ProtectedRoute><Wishlist/></ProtectedRoute>},
    {path:'*' , element:<Notfound/>}
  ]}
])

function App() {

  
  return <WishlistContextProvider>
    <CartContextProvider>
     <UserContextProvider>
    
    <CounterContextProvider>
  <RouterProvider router={router}> </RouterProvider>
  <ToastContainer theme='colored'/>
</CounterContextProvider>

</UserContextProvider> 
  </CartContextProvider>
  </WishlistContextProvider>
  
 
  
  

  
}

export default App;
