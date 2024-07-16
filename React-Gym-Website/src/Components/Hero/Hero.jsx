import React from 'react'
import { MdOutlineOndemandVideo } from "react-icons/md";
import img2 from "../../assets/main-image1.png";
import img3 from "../../assets/main-image3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    < div className='heros'>
      <Slider {...settings} className="container-fluid Hero">
    
    
             
            <div className="Hero-col1">
                <div className="hero-top"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <h1>
                GET <span>HEALTHY</span> BODY WHITH THE <span>PERFICT</span>  EXERSICES </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Laudantium, eum laborum voluptatem aperiam
                  , voluptates ad animi odio rem reiciendis.</p>
                  </div>
                  <div className="hero-btns ">
                   <button className='btn1'>Get Started</button>
                   <button className='play-bnt'><MdOutlineOndemandVideo className='icon-video'/>   Watch video</button>


                  
                   </div>
            </div>
           
            
            <div className="Hero-col2">
              <div className="img">
                <img src={img2} alt="" />
              </div>
            <div className="hero-top2">
              <h1>
                GET <span>HEALTHY</span> BODY WHITH THE <span>PERFICT</span>  EXERSICES </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Laudantium, eum laborum voluptatem aperiam
                  , voluptates ad animi odio rem reiciendis.</p>
                  </div>
                  <div className="hero-btns">
                   <button className='btn1 btn0'>Get Started</button>
                   <button className='play-bnt'><MdOutlineOndemandVideo className='icon-video'/>   Watch video</button>



                   </div>
            </div>

            
            <div className="Hero-col3">
              <div className="img">
                <img src={img3} alt="" />
              </div>
            <div className="hero-top3">
              <h1>
                GET <span>HEALTHY</span> BODY WHITH THE <span>PERFICT</span>  EXERSICES </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Laudantium, eum laborum voluptatem aperiam
                  , voluptates ad animi odio rem reiciendis.</p>
                  </div>
                  <div className="hero-btns">
                   <button className='btn1 btn0'>Get Started</button>
                   <button className='play-bnt'><MdOutlineOndemandVideo className='icon-video'/>   Watch video</button>



                   </div>
            </div>

           



        </Slider>
         
      
    

   
    
    </ div>
  )
}

export default Hero
