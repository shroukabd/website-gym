import React from 'react'
import img1 from '../../assets/partner1.png'
import img2 from '../../assets/partner2.png'
import img3 from '../../assets/partner3.png'
import img4 from '../../assets/fitness.jpg'
import { FcSportsMode } from "react-icons/fc";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const FitnessGoal = () => {
  return (
    <div>
       <div className="container-fluid fitness-goal">
          <div className="container">
             <div className="row gx-0 align-items-center">
                <div className="col-md-5">
                   <div className="fitness-col1" data-aos="fade-right">
                    <h1>970k + More</h1>
                    <p>Trusted Compaines Partner</p>
                   </div>
                </div>
                <div className="col-md-7" data-aos="fade-left">
                <div className="fitness-col2">
                    <img src={img1} alt="" className='img-fluid px-3'/>
                    <img src={img2} alt="" className='img-fluid px-3'/>
                    <img src={img3} alt="" className='img-fluid px-3'/>

                </div>

                </div>
             </div>
          </div>
       </div>


         <div className="container-fluid fitness-goal">
          <div className="container">
             <div className="row gx-0 align-items-center">
                <div className="col-md-6">
                   <div className="fitness-col3"  data-aos="fade-right">
              <img src={img4} alt="" className='img-fluid'/>
                   <div className="popup">
                     <FcSportsMode className='icon-popup'/>
                     <h5>Profestional Trainer</h5>
                     
                   </div>
                   </div>
                </div>
                <div className="col-md-6" data-aos="fade-up" data-aos-duration="3000">
                <div className="fitness-col4">
                  <h1>Get Ready To Reach your Fitness Goals</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Excepturi minima repellat laborum itaque! Iure asperiores sit,
                          necessitatibus placeat ipsa doloribus animi et 
                        ducimus porro consectetur id ipsum veritatis incidunt neque.</p>
                        <button>Free Trail Today</button>
                </div>

                </div>
             </div>
          </div>
       </div>
    </div>
  )
}

export default FitnessGoal
