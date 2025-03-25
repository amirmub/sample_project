import React from 'react'
import Rating from '@mui/material/Rating';
import classes from "./ProductCard.module.css"

function ProductCard({result}) {
  return (
    <div className={classes.productCard}>
      <div className={classes.product__container}>
        <a href="" className={classes.product_img}>
        <img src={result.image} alt="img" />
        </a>
        <div>
            <div className={classes.title}>{result.title}</div>
            <div className={classes.rating}> 
                <Rating name="half-rating" defaultValue={result.rating.rate} precision={0.2}  readOnly/>
                <p>{result.rating.count}</p>
            </div>
            <div className={classes.price}>
               {`$${result.price}`}
            </div>
        </div>
        <div className={classes.cart__btn}>
           <button>add to cart</button>
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard
