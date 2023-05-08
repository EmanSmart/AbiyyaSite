import React from 'react'
import './sponsers.css';
import smart from '../../Assets/Images/smart-logo.svg';
import orecal from '../../Assets/Images/Oracle-Logo.svg';
import ithar from '../../Assets/Images/ithra-logo.svg';
import inschool from '../../Assets/Images/inschool-logo.svg';
import Aramco from '../../Assets/Images/Saudi-Aramco-Logo.svg';
import mesk from '../../Assets/Images/meskScool-logo.svg';

import smalllogo from '../../Assets/Images/small-logo.png';

const sponsers = () => {

  return (
    <div className="sponsers py-5 text-center">
   
    <div className='sliders container'>
    <div className='title-v py-5 text-center'>
        <div className='title-font'><span><img src={smalllogo} alt="ss" style={{width:"50px"}}/></span>ur Sponsors</div>
        <div className='line-title my-2'></div>
    </div>
      <div className='slider-trucks py-5'>
      <div className="slide">
        <img src={orecal} alt="" style={{width:"60%"}}/>
      </div>
      <div className="slide">
        <img src={smart} alt="" style={{width:"90%"}}/>
      </div>
      <div className="slide">
      <img className='mb-2' src={ithar} alt="" style={{width:"40%"}}/>
      </div>
      <div className="slide">
      <img className='mt-2' src={inschool} alt="" style={{width:"50%"}}/>
        
      </div>
      <div className="slide">
      <img src={Aramco} alt="" style={{width:"60%"}}/>
        
      </div>
      <div className="slide">
      <img className='my-2' src={mesk} alt="" style={{width:"70%"}}/>
        
      </div>
      {/* <div className="slide">
        <img src={orecal} alt="" style={{width:"60%"}}/>
      </div>
      <div className="slide">
      <img className='mb-2' src={ithar} alt="" style={{width:"40%"}}/>
        
      </div>
      <div className="slide">
      <img className='mt-2' src={inschool} alt="" style={{width:"50%"}}/>
        
      </div> */}
      </div>

      <div className='data-info py-5'>
        <p>The F1 IN SCHOOLS Logo, F1, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP,GRAND PRIX and related marks are trademarks of Formula One Licensing BV, a Formula One group company. All rights reserved</p>
        </div>



    </div>
  </div>
  )
}

export default sponsers
