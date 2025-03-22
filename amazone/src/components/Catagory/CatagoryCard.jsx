import React from 'react'
import classes from "./CatagoryCard.module.css"

function CatagoryCard({data}) {
  return (
    <>
      <div className={classes.CatagoryCard}>
        <a href="">
          <span>
            <h2>{data.title}</h2>
          </span>
          <img src={data.imgLink} alt="" />
          <p>Shop now</p>
        </a>
      </div>
    </>
  )
}

export default CatagoryCard

