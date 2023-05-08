// import React from 'react'

// const Team = () => {
//   return (
//     <div>
//       <h2>team</h2>
//     </div>
//   )
// }

// export default Team
import React, { Component } from "react";
import './Team.css'
import Slider from "react-slick";
import smalllogo from '../../Assets/Images/small-logo.png';
import t1 from '../../Assets/Images/t1.svg';
import t2 from '../../Assets/Images/t2.svg';
import t3 from '../../Assets/Images/t3.svg';
import t4 from '../../Assets/Images/t4.svg';
import t5 from '../../Assets/Images/t5.svg';
import t6 from '../../Assets/Images/t6.svg';




export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="team py-3">
            <div className='title py-5 text-center'>
        <div className='title-font'><span><img src={smalllogo} alt="ss" style={{width:"50px"}}/></span>ur Team</div>
        <div className='line-title my-2'></div>
        </div>
        <Slider {...settings} className="slideritem container py-5">
          <div className="cardbox">
            <div className="inside py-5 px-3 text-center">
              <img src={t1} alt="" className="img-t w-50"/>
              <h3>Rose Asseri</h3>
              <label>Team Management</label>
              <p>Rose makes that the project is not only smoothly acing the competition's standrads but to furthermore achieve the team's vision and keeping the tewam's energy always high and thriving exceptionally when it comes to all of haboob's graphic needs.</p>
            </div>
          </div>
          {/* 2 */}
          <div className="cardbox">
            <div className="inside py-5 px-3 text-center">
              <img src={t2} alt="" className="img-t w-50"/>
              <h3>Faisal Al Saeed</h3>
              <label>Finanace &sponsership</label>
              <p>Faisal Al saeed is an idea candidate for the marketing department because of this extensive experience and knowledge in the field. with faisal Alsaeed on the marketing team , the team will benfite from his innovative ideas' problem-solving skills' and cutting-edge strategies.</p>

            </div>
          </div>
          {/* 3 */}
          <div className="cardbox">
            <div className="inside py-5 px-3 text-center">
              <img src={t3} alt="" className="img-t w-50"/>
              <h3>Reema AL-Jasser</h3>
              <label>Project manager</label>
              <p>Time manager, precise, passionate and organized these are the main outstanding characteristics in Reema, the project manager Reema always has a clear goal to strive for and achieve.
              she will help Haboob be a marvelous team with amazing outcome and great successes </p>
            </div>
          </div>
          {/* 4 */}
          <div className="cardbox">
            <div className="inside py-5 px-3 text-center">
              <img src={t4} alt="" className="img-t w-50"/>
              <h3>Jood Al-Hazmi</h3>
              <label>Marketing & enterprise</label>
              <p>When we think of strategic thinking we think of jood. she seeks to improve haboobs identity and set goals to reach.It is her job to raise funds and get maximum media exposure.she also searches for potential sponsors that can help haboob be known worldwide.</p>
            </div>
          </div>
          {/* 5 */}
          <div className="cardbox">
            <div className="inside py-5 px-3 text-center" style={{height: "40%"}}>
              <img src={t5} alt="" className="img-t w-50"/>
              <h3>Haya Al-saadoun</h3>
              <label>Manufacturing</label>
              <p>She has taken on the job of not only putting the parts together's but also upgrading and rectifying any rectifying flaws. testing the models' developing solutions and concept's and constructing all models are parts of her role.</p>
            </div>
          </div>
          {/* 6 */}
          <div className="cardbox">
            <div className="inside py-5 px-3 text-center">
              <img src={t6} alt="" className="img-t w-50"/>
              <h3>Mashari Al-Anazi</h3>
              <label>Engineering design</label>
              <p>Mashari has great knowledge in physics' mathematics' and design. He is Haboob's Design Engineer he will be using the fusion 360 and CFD to design an fi car eith an amazing performance that allows Haboob to win and succeed in the copetition.</p>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}
