import React from 'react'
import classes from "./Header.module.css"
import { IoLocationOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { BiCart } from "react-icons/bi";
import HeaderBelow from '../HeaderBelow/HeaderBelow';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <section className={classes.header__container}>
       <div className={classes.header}>
            <div className={classes.header__logo}>
                <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amozon icon" /></Link>

                <span><IoLocationOutline/></span>
                
                <div className={classes.header__location}>
                    <p>Deliver to</p>
                    <span>Ethiopia</span>
                </div>
            </div>

            <div className={classes.header__search}>
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" placeholder='Search Search Amazone'/>
                <button><GoSearch /></button>
            </div>

            <div className={classes.header__nation}>
                <div className={classes.header__nation__list}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/255px-Flag_of_the_United_States_%28Pantone%29.svg.png"/>

                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                </div>
                <Link to="/auth" className={classes.header__nation__sign}>
                    <div>
                        <p> Hello, Sign in</p>
                        <span>Account & Lists</span>
                    </div>
                </Link>
                <Link to="/orders" className={classes.header__nation__sign}>
                    <div>
                    <p>Returns</p>
                    <span>& Orders</span>
                    </div>
                </Link>
               <div className={classes.cart}>
                    <Link to='/cart'>
                        <span><BiCart /></span>
                        <p>0</p>
                    </Link>
               </div>
            </div>
       </div>
    </section>
    <HeaderBelow />
    </>
  )
}

export default Header
