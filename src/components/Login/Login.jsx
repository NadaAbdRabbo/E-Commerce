import React, { useContext, useState } from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../Context/UserContext';


export default function Login(){

  let {setUserToken} = useContext(UserContext);

  let navigate = useNavigate();
  const [errmsg, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function loginSubmit(val){
    setLoading(true);
    let {data}  = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,val).catch((err) => {
      setLoading(false);
      setError(err.response.data.message)
    })

    if (data.message === 'success'){
      setLoading(false);
      localStorage.setItem('userToken' , data.token);
      setUserToken(data.token);
      navigate('/home');
    }
  }

 



  let validationScheme = Yup.object({
    email:Yup.string().email('email is invalid').required('email is required'),
    password:Yup.string().matches(/^[A-Z][a-z0-9A-Z!@$%^&*()_-]{6,16}$/,'password is invalid').required('password is required'),
  })

  let formik = useFormik({
    initialValues:{
      email:'',
      password:''

    },validationScheme,
    onSubmit: loginSubmit,
     
  }) 


  return <>
  
  <div className="w-75 mx-auto py-5">
    <h3>Login Now</h3>
    {/* {errmsg == "" ? "" : <div className='alert alert-danger'>{errmsg}</div>} */}


    <form onSubmit={formik.handleSubmit}>
    

    <label htmlFor="email">Email :</label>
    <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  id='email' type='email' name='email'/>
    {(formik.errors.email && formik.touched.email) ? <div className="alert alert-danger">{formik.errors.email}</div> : ""}


   
    <label htmlFor="password">Password :</label>
    <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}  id='password' type='password' name='password'/>
    {(formik.errors.password && formik.touched.password) ? <div className="alert alert-danger">{formik.errors.password}</div> : ""}

    
    <button  disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-light'>Login
      {loading ?
       <span>
       <i className='fa-solid text-light mx-2 fa-spinner fa-spin'></i>
       </span>
      :
      ''
      }
      </button>
 
  
    <div>
      <p className='text-muted mt-3'>I Don't have account <Link to="/register" className='text-main fw-bold'>Register</Link></p>
      <Link to="/forgetpassword" className='text-main fw-bold'>Forgot Your Password ?</Link>
     </div>
    </form>
  </div>
  

</>









}

