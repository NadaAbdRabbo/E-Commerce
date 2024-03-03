import axios from "axios";
import { createContext, useState } from "react";
import { json } from "react-router-dom";

export let cartContext = createContext();

export default function CartContextProvider(props){

    const [cartNumber , setCartNumber] = useState(0)

    let BaseUrl = `https://route-ecommerce.onrender.com/api`;
    let header = {
        token:localStorage.getItem('userToken')
    }

    function addToCart(id){
        return axios.post(`${BaseUrl}/v1/cart` ,
        {
            productId:id
        },
        {
        headers:header
        }
        )
    }

    function getCart(){
        return axios.get(`${BaseUrl}/v1/cart`,
        {
        headers:header
        }
        )
        }

        function updateCart(id,count){
            return axios.put(`${BaseUrl}/v1/cart/${id}`,
            {
                count:count
            },
            {
            headers:header
            }
            )
        }
        
        function deleteCart(id){
            return axios.delete(`${BaseUrl}/v1/cart/${id}`,
            {
            headers:header
            }
            )
        }

        function checkoutPayment(id,formData){
            return axios.post(`${BaseUrl}/v1/orders/checkout-session/${id}?url=http://localhost:3000`,
            {
                shippingAddress:formData
            },
            {
            headers:header
            }
            )
        }

     

    return <cartContext.Provider value={{addToCart , setCartNumber , cartNumber , getCart ,  deleteCart , updateCart  , checkoutPayment}}>
        {props.children}
    </cartContext.Provider>
}