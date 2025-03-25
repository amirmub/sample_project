import React, { useState,useEffect } from 'react'
import axios from "axios"
import ProductCard from '../ProductCard';

function Product() {
    const [products,setProducts] = useState([]);
    const [error,setError] = useState("")

    useEffect(() =>{
      async function getProducts() {
        try {
           const response = await axios.get("https://fakestoreapi.com/products")
           setProducts(response.data)
           console.log(response);       
        } catch (error) {
            setError(error)
        }
       }
       getProducts();
    },[])
  return (
    <div>
      {
        products.map((singleProduct,index) =>{
            return(
            <ProductCard result = {singleProduct} key={index}/>
            )
        })
      }
    </div>
  )
}

export default Product
