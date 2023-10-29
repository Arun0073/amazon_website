import React from 'react'
import './Virtual.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Virtual = () => {
  return (
    <div className='Virtual'>
      <div className="daaya2">
        <span>Virtual Try-On</span>
        <span>Buy the Right Shades!</span>
        <span>Try Now!</span>
        <img src={Shade} alt="" />
      </div>

<div className="baaya2">
<div className="girl">
<ReactCompareImage leftImage={Before} rightImage={After}/>
</div>
    
</div>

    </div>
  )
}

export default Virtual
