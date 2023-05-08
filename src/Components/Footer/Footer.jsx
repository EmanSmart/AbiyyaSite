import React from 'react'
// import footerlogo from "../../"
import footerlogo from "../../Assets/Images/Aby-footer-logo.svg";

import './footer.css'

const Footer = () => {
  return (
    <section class="footer text-center" style={{marginTop:"40px"}}>
        <div class="head-logo part">
            <img src={footerlogo} alt="" className="w-25"/>
            
        </div>
        <div class="links-footer part text-center">
            <div class="links-socialmedia text-center">
                <ul class="icons">
                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/haboob-f1-a4b405264">
                        <i className="icon fa-brands fa-linkedin mx-2"></i>     
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.instagram.com/haboob_ksa/">
                        <i className="icon fa-brands fa-instagram mx-2"></i>     
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.tiktok.com/@haboob.f1sa?_t=8zwuq3chm78&_r=1">
                        <i className="icon fa-brands fa-tiktok mx-2"></i>      
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://twitter.com/haboobf1?s=21&t=0YJ3iPF_r5U85NcnzGeGPQ">
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
