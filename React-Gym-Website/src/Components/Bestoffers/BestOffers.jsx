import React from 'react'
import { IoMdFitness } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { GiMuscleUp } from "react-icons/gi";
import { BiRun } from "react-icons/bi";

const BestOffers = () => {
  return (
    <div>
         <div className="container-fluid besoffers">
                  <div className="container">
                    <div className="best-top">
                        <div className="tittle" data-aos="fade-up" data-aos-duration="3000">
                            <h2>
                                The Best Programes We Offers For You
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                                . Nemo incidunt reiciendis sed veniam aliquam voluptates 
                                nisi ad repudiandae consequatur qua
                               .</p>
                               </div> 
                    </div>

                    <div className="best-down">
                        <div className="offers" data-aos="fade-up-right">
                            <IoMdFitness className='icon-offer'/>
                            <h3>Strength Training</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                 Commodi, enim totam 
                                culpa ipsam doloremque iure delectus</p>
                                <div className="more">
                                    <h5>Lern More</h5>
                                    <FaArrowRight/>
                                </div>
                        </div>
                      
                        <div className="offers" data-aos="fade-up-left">
                            <GrYoga className='icon-offer'/>
                            <h3>Basic Yoga</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                 Commodi, enim totam 
                                culpa ipsam doloremque iure delectus</p>
                                <div className="more">
                                    <h5>Lern More</h5>
                                    <FaArrowRight/>
                                </div>
                        </div>
                        <div className="offers" data-aos="fade-down-right">
                            <GiMuscleUp className='icon-offer'/>
                            <h3>Body Building</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                 Commodi, enim totam 
                                culpa ipsam doloremque iure delectus</p>
                                <div className="more">
                                    <h5>Lern More</h5>
                                    <FaArrowRight/>
                                </div>
                        </div>
                        <div className="offers" data-aos="fade-down-left">
                            <BiRun className='icon-offer'/>
                            <h3>Strength Training</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                 Commodi, enim totam 
                                culpa ipsam doloremque iure delectus</p>
                                <div className="more">
                                    <h5>Lern More</h5>
                                    <FaArrowRight/>
                                </div>
                        </div>
                    </div>
                  </div>
         </div>
    </div>
  )
}

export default BestOffers
