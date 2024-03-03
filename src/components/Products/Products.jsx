import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import { toast } from 'react-toastify';
import { wishlistContext } from '../../Context/WishlishContext';


export default function Products() {

  
  let {addToCart , setCartNumber} = useContext(cartContext)

  const [productList, setProduct] = useState([])
  async function getProducts(){
   let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`); 
    setProduct(data.data)
  }

  const [likedItem, setLikedItem] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);
  let {getLoggedUserWishList,addToWishList,deleteFromWishList,setNumOfWishListItems,} = useContext(wishlistContext);
  const [wishlist, setWishList] = useState(null);


  async function addToMyCart(id){
    let {data} = await addToCart(id)
    if(data.status == 'success'){
      toast.success(data.message);
      setCartNumber(data.numOfCartItems);
      
    }
    console.log(data);
    }

    async function getLikedProducts() {
      let { data } = await getLoggedUserWishList();
      setWishList(data.data);
      setLikedProducts(data.data.map((product) => product.id));
    }
  
    async function addProductToWishList(productId) {
      setLikedItem(productId);
      let { data } = await addToWishList(productId);
      if (data.status === "success") {
        setNumOfWishListItems(data.data.length);
        setLikedItem(null);
        toast.success(data.message);
        setLikedProducts(data.data);
      }
    }
    async function removeProductFromWishList(productId) {
      setLikedItem(productId);
      let { data } = await deleteFromWishList(productId);
      if (data?.status === "success") {
        setNumOfWishListItems(data.data.length);
        setLikedItem(null);
        toast.success("product removed successfully from your wishlist");
        setLikedProducts(data.data);
      }
    }



  useEffect(()=>{
    getProducts()
    getLikedProducts();
  },[])


  
  return (
    <div className="row">
      {productList.length >0 ?
      <>
       {
        productList.map((product)=>{
          return <div className="col-md-3" key={product._id}>
            <div className="product p-5">
              <div className='py-3 px-2 position-relative px-3 overflow-hidden heart'>
              {product.id === likedItem ? (
                    <i className="fas fa-spin fa-spinner  position-absolute top-0 text-danger end-0 p-1"></i>
                  ) : (
                    ""
                  )}
                  {likedProducts.includes(product.id) &&
                  product.id !== likedItem ? (
                    <i
                       onClick={() => removeProductFromWishList(product.id)}
                      className="fa-solid fa-heart position-absolute top-0 text-danger end-0 p-1 "
                    >
                      <i cl></i>
                    </i>
                  ) : (
                    ""
                  )}
                  {likedProducts.includes(product.id) === false &&
                  product.id !== likedItem ? (
                    <i
                      onClick={() => addProductToWishList(product.id)}
                      className="fa-solid fa-heart position-absolute top-0  end-0 p-1 cursor-pointer"
                    ></i>
                  ) : (
                    ""
                  )}
                 
              </div>

              <Link to={`/details/${product._id}`}>
              <img src={product.imageCover} className='w-100' alt={product.title} />
              <p className='text-main'>{product.category.name}</p>
              <h6>{product.title}</h6>
              <div className='d-flex justify-content-between'>
                <p>{product.price} EGP</p>
                <p>{product.ratingsAverage}<i className='fa-solid fa-star rating-color'></i></p>
              </div>
              </Link>
              
              <button onClick={()=>{addToMyCart(product._id)}} className='btn bg-main text-light w-100'>Add To Cart</button>

             

            </div>
          </div>
        })
      }
      
      </>
      
      :
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
      
      </div>   
      }
    </div>
  )
  
   
 
}
