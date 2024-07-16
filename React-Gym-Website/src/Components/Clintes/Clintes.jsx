import React from 'react'
import img1 from '../../assets/testpartner.png'
import plus from '../../assets/test_icon.png'
import clinet1 from '../../assets/team/01.jpg'
import clinet2 from '../../assets/team/02.jpg'
import clinet3 from '../../assets/team/03.jpg'
import clinet4 from '../../assets/team/04.jpg'

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const Clintes = () => {
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };
  return (
    <div >
         <div className="clinets">
            <div className="clinet">
                <div className="right-clinet" data-aos="flip-left">
                   <h2> What Our Happy Clintes says our About Us</h2>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Iusto unde hic culpa voluptatum eaque eligend
                    i dolore nihil.</p>
                    <div className="img-clinet">
                        
                        <img src={clinet2} alt=""  className='photos'/>
                        <img src={clinet3} alt=""  className='photos'/>
                        <img src={clinet4} alt=""  className='photos'/>
                        <img src={plus} alt="" />
                        <FaStar className='star'/>
                        <p>4.9(450 Reviews)</p>
                    </div>
                    <img src={img1} alt="" />
                </div>
                <div className="left-clinet" data-aos="fade-left">

               
                    <div className="our-clinet">

                    <div className="photo-clinet">
                        <img src={clinet1} alt="" />
                        <p>Farhan Riad</p>
                    </div>
                    <div className="star-clinet">
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaStar className='star'/>
                        <FaRegStar className='star'/>
                      </div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Voluptatum quia necessitatibus ut maiores in 
                        inventore
                         fuga dolore doloribus facere magni aut nesciunt ea</p>
                </div>
                {/* <div className="our-clinet">

<div className="photo-clinet">
    <img src={clinet2} alt="" />
    <p>Farhan Riad</p>
</div>
<div className="star-clinet">
    <FaStar className='star'/>
    <FaStar className='star'/>
    <FaStar className='star'/>
    <FaStar className='star'/>
    <FaStar className='star'/>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Voluptatum quia necessitatibus ut maiores in 
    inventore
     fuga dolore doloribus facere magni aut nesciunt ea</p>
             </div> */}
             {/* <div className="our-clinet">

<div className="photo-clinet">
    <img src={clinet3} alt="" />
    <p>Farhan Riad</p>
</div>
<div className="star-clinet">
    <FaStar className='star'/>
    <FaStar className='star'/>
    <FaStar className='star'/>
    <FaStar className='star'/>
    <FaStar className='star'/>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Voluptatum quia necessitatibus ut maiores in 
    inventore
     fuga dolore doloribus facere magni aut nesciunt ea</p>
             </div>
             <div className="our-clinet">

<div className="photo-clinet">
    <img src={clinet4} alt="" />
    <p>Farhan Riad</p>
</div>
<div className="star-clinet">
    <FaStar className='star'/>
    <FaStar className='star'/>
    <FaStar className='star'/>
    <FaStar className='star'/>
    <FaStar className='star'/>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Voluptatum quia necessitatibus ut maiores in 
    inventore
     fuga dolore doloribus facere magni aut nesciunt ea</p>
             </div> */}
                </div>
                
                </div>
               
                </div>
                 
         </div>
       
  )
}

export default Clintes
