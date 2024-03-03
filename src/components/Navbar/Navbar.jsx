import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/freshcart-logo.svg';
import { useContext } from 'react';
import { CounterContext } from '../../Context/CounterContext';
import { UserContext } from '../../Context/UserContext';
import { cartContext } from '../../Context/CartContext';




export default function Navbar() {

  let {counter} = useContext(CounterContext);
  let {userToken , setUserToken} = useContext(UserContext);
  let {cartNumber,getCart,setCartNumber}=useContext(cartContext)
  let navigate = useNavigate();

  function logOut(){
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/login')
  }


  useEffect(()=>{
    (async ()=>{
     let data = await getCart();
    setCartNumber(data.numOfCartItems)
    })()
    },[])




  return <>
  
    <nav
      className="navbar navbar-expand-sm navbar-light bg-light"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="fresh market logo" /> 
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">

              {userToken !== null? <>
              <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
             <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/brands">Brands</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">Wishlist</Link>
            </li>

            
              
              
              </>:''}
              

            
               
          </ul>


          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className='nav-item d-flex align-items-center'>
              <i className='fab fa-facebook mx-2'></i>
              <i className='fab fa-twitter mx-2'></i>
              <i className='fab fa-instagram mx-2'></i>
              <i className='fab fa-tiktok mx-2'></i>
              <i className='fab fa-linkedin mx-2'></i>
              <i className='fab fa-youtube mx-2'></i>
            </li>
            {userToken !== null? <>
            
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className='fa-solid fa-shopping-cart text-main'></i>
                  <span className='badge bg-main text-light'>{cartNumber}</span>
                </Link>
              </li>

              <li className="nav-item">
              <span onClick={() => logOut()} className="nav-link cursor-pointer">Logout</span>
              </li>
            
            
            </>:<>
            
           
            <li className="nav-item">
              <Link className="nav-link cursor-pointer" to="/login">Login</Link>
            </li>

            <li className="nav-item">
             <Link className="nav-link" to="/register">Register</Link>
            </li>
            
            </>}


            

            
               
          </ul>
        </div>
      </div>
    </nav>
    
    
  
  </>

}
