import React from 'react'
import { GrStatusGood } from "react-icons/gr";
import img1 from '../../assets/services.png'
const Services = () => {
  return (
    <div className='services'>
           <div className="service">
            <div className="right-service" data-aos="fade-right"
                                           data-aos-offset="300"
                                           data-aos-easing="ease-in-sine">
                <h2>Why Shoud People Choose Fitnessxia Services</h2>
                    <div className="tittle">
                        <div className="icon-service">
                        <GrStatusGood className='icon-s'/>
                        <h4>Personal Training</h4>
                  
                        </div>
                        <p>our Personal Training Can help you create a personalized
                        fitness plan and trak your progress
                    </p>
                    </div>
                    <div className="tittle">
                        <div className="icon-service">
                        <GrStatusGood  className='icon-s'/>
                        <h4>Personal Training</h4>
                        </div>
                        <p>our Personal Training Can help you create a personalized
                        fitness plan and trak your progress
                    </p>
                    </div>
                    <div className="tittle">
                        <div className="icon-service">
                        <GrStatusGood  className='icon-s'/>
                        <h4>Personal Training</h4>
                        </div>
                        <p>our Personal Training Can help you create a personalized
                        fitness plan and trak your progress
                    </p>
                    </div>
                    <button>Join Today</button>
                 
            </div>
            <div className="left-service"  data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                <img src={img1} alt="" />
            </div>

           </div>


    </div>
  )
}

export default Services
