import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {img} from "../../assets/images/data"
import classes from "./Carousal.module.css"

function CarousalEffect() {
  return (
    <>
       
        <div> 
            <Carousel
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                autoPlay={true} 
                showIndicators={false}
                infiniteLoop={true}
            >
                    {
                        img.map((imgLink)=>{
                            return <img src={imgLink} />
                        })
                    }
            </Carousel>
            <div className={classes.shadow}>

            </div>
        </div>

        
    </>
  )
}

export default CarousalEffect
