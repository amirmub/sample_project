import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
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
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
            </Stack>
                <p>40</p>
            </div>
            <div className={classes.price}>
               $59.99
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductCard
