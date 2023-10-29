import React from 'react'
import  './Hero.css'
import HeroImage from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero = () => {
    const transition={duration:3, type:"spring"}
  return (
    <div className="container2">
        
        <div className="h_sides">
            <span className="text1">Skin Care Cream</span>
            <div className="text2">
                <span>Trendy Collection</span>
                <span>Seedily say has suitable disposal and boy. Excercise joy man children rejoiced.  </span>
            </div>
        </div>

        <div className="wrapper">
            <motion.div 
            initial={{bottom:"2rem"}}
            whileInView={{bottom:"0rem"}}
            transition={transition}
            className="blueCircle"></motion.div>
            <motion.img 
            transition={transition}
            initial={{bottom:"-2rem"}}
            whileInView={{bottom:"0rem"}}
            src={HeroImage} alt="" width={600} />
            <motion.div
            initial={{right:"4%"}}
            whileInView={{right:"-10%"}}
            transition={transition}
             className="cart2">
                <RiShoppingBagFill/>
                <div className="signup">
                    <span>Best Signup Offers</span>
                    <div><BsArrowRight/>
                    </div>
                </div>
            </motion.div>
        </div>
        <div className="h_sides">
            <div className="traffic">
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className="customers">
                <span>100k</span>
                <span>Happy Customers</span>
            </div>
        </div>
    </div>
  )
}

export default Hero
