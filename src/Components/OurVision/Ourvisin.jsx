import React from 'react'
import v1 from '../../Assets/Images/v1.jpg';
import v2 from '../../Assets/Images/v2.jpg';
// import test from '../../Assets/Images/test-bg.jpg';


import smalllogo from '../../Assets/Images/small-logo.png';
import './ourvision.css'

const Ourvisin = () => {
  return (
    <div className='ourvision' style={{paddingTop:"50px", paddingBottom:"350px"}}>
      <div className='container content py-5'>
        <div className='row'>
          {/* data */}
          <div className='col-md-6'>
            <div className='data'>
              <div className='title-v py-4'>
                <div className='title-font'><span><img src={smalllogo} alt="ss" style={{width:"50px"}}/></span>ur vision</div>
                <div className='line-title my-2'></div>
              </div>
              <p>
              Our team, Habbob, aspires to make an impact in the Formula 1 In Schools competition, and become an international example of excellence and innovation. 
              </p>
            </div>
          </div>
          {/* image-1 */}
          <div className='col-md-6'>
            <div className='img-data mx-2 text-end'>
              <img src={v1} alt='v1' className='w-75'/>
            </div>
          </div>

            {/* image-2 */}
            <div className='col-md-6 mt-5'>
            <div className='img-data mx-2 text-start my-5'>
              <img src={v2} alt='v2' className='w-75'/>
            </div>
          </div>

          <div className='col-md-6 mt-4'>
            <div className='data'>
              <div className='title-v py-4'>
                <div className='title-font'><span><img src={smalllogo} alt="ss" style={{width:"50px"}}/></span>ur mission </div>
                <div className='line-title my-2'></div>
              </div>
              <p>
              We pledge to work diligently to develop our knowledge and skills in engineering, Enterprise, and design, in order to build a successful, competitive team. We will strive to ensure that our efforts are fuelled by enthusiasm and passion, and that our team is guided by principles of integrity and respect. Our ultimate goal is to bring pride and recognition to the Kingdom of Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourvisin
