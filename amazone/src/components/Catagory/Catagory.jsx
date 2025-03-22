import React from 'react'
import {catagoryInfos} from "./CatagoryInfo"
import CatagoryCard from './CatagoryCard'
import classes from "./Catagory.module.css"

function Catagory() {
  return (
    <div className={classes.Catagory__main__container}>
      <div className={classes.Catagory__container}>
      {
        catagoryInfos.map((infos) =>
          <CatagoryCard data = {infos} />
        )
      }
     </div>
    </div>
  )
}

export default Catagory

