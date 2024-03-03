import React, { useState } from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Register() {

  




  let navg = useNavigate();
  let [errmsg, setError] = useState("");
  let [loading , setLoading] = useState(true);


  let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  let  validationSchema = Yup.object({
    name:Yup.string().min(3,'name minlength is 3').max(10,'name maxlength is 10').required('name is required'),
    email:Yup.string().email('email is invalid').required('email is required'),
    phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('phone is required'),
    password:Yup.string().matches(/^[A-Z][a-z0-9A-Z!@$%^&*()_-]{6,16}$/,'password is invalid').required('password is required'),
    rePassword:Yup.string().oneOf([Yup.ref("password")], "confirm Password not match").required('rePassword is required')
  })


  let formik = useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      password:'',
      rePassword:''

    },
    onSubmit: registerApi,
    validationSchema
    
     
  }) 

 
  async function registerApi(val){
    setLoading(true)
    
    let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,val).catch((err) => {
      setError(err.response.data.message)
    setLoading(false)
    });

    if(data.message === 'success'){
      navg('/login')
    setLoading(false)
    }
    };


  return <>
  
    <div className="w-75 mx-auto py-5">
      <h3>Register Now</h3>
      {errmsg == "" ? "" : <div className='alert alert-danger'>{errmsg}</div>}


      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name :</label>
      <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}  id='name' type='text' name='name'/>
      {(formik.errors.name && formik.touched.name) ? <div className="alert alert-danger">{formik.errors.name}</div> : ""}


      <label htmlFor="email">Email :</label>
      <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  id='email' type='email' name='email'/>
      {(formik.errors.email && formik.touched.email) ? <div className="alert alert-danger">{formik.errors.email}</div> : ""}


      <label htmlFor="phone">Phone :</label>
      <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone}  id='phone' type='tel' name='phone'/>
      {(formik.errors.phone && formik.touched.phone) ? <div className="alert alert-danger">{formik.errors.phone}</div> : ""}

      <label htmlFor="password">Password :</label>
      <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}  id='password' type='password' name='password'/>
      {(formik.errors.password && formik.touched.password) ? <div className="alert alert-danger">{formik.errors.password}</div> : ""}

      <label htmlFor="rePassword">rePassword :</label>
      <input className='form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword}  id='rePassword' type='password' name='rePassword'/>
      {(formik.errors.rePassword && formik.touched.rePassword) ? <div className="alert alert-danger">{formik.errors.rePassword}</div> : ""}
      

   {loading ? <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-main text-white'>Register</button> : <button type='button' className='btn bg-main text-white'><i className='fa-solid fa-spinner fa-spin'></i></button>}
    
      <div>
        <p className='text-muted mt-3'>I have account <Link to="/login" className='text-main fw-bold'>Login</Link></p>
       </div>
      </form>
    </div>
    
  
  </>
}
