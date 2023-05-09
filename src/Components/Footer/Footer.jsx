import React from 'react'
// import footerlogo from "../../"
import footerlogo from "../../Assets/Images/Aby-footer-logo.svg";

import './footer.css'

const Footer = () => {
  return (
    <section class="footer text-center py-5" style={{marginTop:"40px"}}>
        <div class="head-logo part">
            <img src={footerlogo} alt="" className="w-25"/>
            
        </div>
        <div class="links-footer part text-center">
            <div class="links-socialmedia text-center">
                <ul class="icons">
                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/abiyya-racing-153571265/">
                        <i className="icon fa-brands fa-linkedin mx-2"></i>     
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.instagram.com/abiyya.racing/?igshid=ZDdkNTZiNTM%3D">
                        <i className="icon fa-brands fa-instagram mx-2"></i>     
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.tiktok.com/@abiyyaracing">
                        <i className="icon fa-brands fa-tiktok mx-2"></i>      
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://twitter.com/Abiyya_Racing?t=GN8bvoFJcXIpniU_fFQ_cA&s=09">
                        <i className="icon fa-brands fa-twitter mx-2"></i>    
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="text-footer part">
            <a href="/#">Sponsor us</a>
        </div>
    </section>
  )
}

export default Footer
