import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import logo2 from '../../assets/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="footers" data-aos="fade-up"
                    data-aos-duration="3000">
              <div className="footer-up">
                <div className="footer-company">
                    <h2>Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Why Us</li>
                        <li>Security</li>
                        <li>Partnership</li>

                    </ul>
                </div>
                <div className="footer-help">
                        <h2>Help</h2>
                        <p>Account</p>
                        <p>Support</p>
                        <p>Privact Policy</p>
                        <p>Team & Condition</p>

                </div>
                <div className="footer-contact">
                    <h2>Contact Us</h2>
                       <div className="contacts">
                        <FaPhoneAlt className='icon-contact'/>
                        <p>+123456678</p>
                       </div>
                       <div className="contacts">
                        <MdEmail className='icon-contact'/>
                        <p>exampile@gmail.com</p>
                       </div>
                       <div className="contacts">
                        <FaLocationDot className='icon-contact'/>
                        <p>Sharqia Zagazige</p>
                       </div>
                </div>
                <div className="footer-subscrib">
                    <h2>Subscribe Our Newsletter</h2>
                    <div className="email">
                    <input type="text" placeholder='type your email' name="" id="" />
                    <FaLocationArrow className='icon-email'/>
                    </div>
                    <p>Never miss an update & news to your email</p>
                </div>

              </div> <hr/>
              <div className="footer-down">
               <img src={logo2} alt="" />
               <p>@2025DesignAxen.Allcopyrights reservide</p>
               <div className="social">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
               </div>
              </div>
        </div>
    </div>
  )
}

export default Footer
