import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function ProductCard({result}) {
  return (
    <>
      <a href="">
        <img src={result.image} alt="img" />
        <div>
            <div>{result.title}</div>
            <div>
            <Stack spacing={3}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Stack>
                <small>40</small>
            </div>
            <div>
               $59.99
            </div>
        </div>
      </a>
    </>
  )
}

export default ProductCard
