import React, { useState } from 'react'
import './Product.css'
import plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
import {useAutoAnimate} from '@formkit/auto-animate/react'

const Product = () => {
    const [parent]=useAutoAnimate()

const [MenuProducts, setMenuProducts]=useState(ProductsData);

const filter=(type)=>{
    setMenuProducts(ProductsData.filter((product)=>product.type === type))
}

  return (
    <div className='container4'>
      <img src={plane} alt="" />
      <h1>Our Featured Products</h1>
      <div className="products">
        <ul className='menu2'>
            <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
            <li onClick={()=>filter("skin care")}>Skin Care</li>
            <li onClick={()=>filter("conditioner")}>Conditioners</li>
            <li onClick={()=>filter("foundation")}>Foundations</li>
        </ul>
        <div className="list" ref={parent}>
            {
                MenuProducts.map((product,i)=>(
                    <div className="product">
                        <div className="daaya3">
                            <div className="name">
                                <span>{product.name}</span>
                                <span>{product.detail}</span>
                            </div>
                            <span>{product.price}$</span>
                            <div>Shop Now</div>
                        </div>
                        <img src={product.img} alt="" className='img-p1' />
                    </div>
            ))}
        </div>
       
      </div>
    </div>
  )
}

export default Product
