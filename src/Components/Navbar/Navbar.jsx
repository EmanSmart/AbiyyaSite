import React from "react";
import Scrollspy from "react-scrollspy";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
// hero
// about
import v1 from "../../Assets/Images/v1.jpg";
import v2 from "../../Assets/Images/v2.jpg";
import smalllogo from "../../Assets/Images/small-logo.png";

// aby---------------------
import Logo from "../../Assets/Images/Aby-bg.svg";

import titleicon from "../../Assets/Images/aby-small-icon.svg";

import consalting from "../../Assets/Images/aby-consalting.svg";
import design from "../../Assets/Images/aby-designe.svg";
import engineer from "../../Assets/Images/aby-engineer.svg";
// who-aby
// import  from "../../Assets/Images/Aby-bg.svg";






// team
import Slider from "react-slick";
// import smalllogo from '../../Assets/Images/small-logo.png';
import t1 from "../../Assets/Images/Aby-t1.svg";
import t2 from "../../Assets/Images/Aby-t2.svg";
import t3 from "../../Assets/Images/Aby-t3.svg";
import t4 from "../../Assets/Images/t4.svg";
import t5 from "../../Assets/Images/t5.svg";
import t6 from "../../Assets/Images/t6.svg";
// sp
import sp1 from "../../Assets/Images/Aby-sp1.svg";
import sp2 from "../../Assets/Images/Aby-sp2.svg";



// sponsers
import smart from "../../Assets/Images/smart-logo.svg";
import orecal from "../../Assets/Images/Oracle-Logo.svg";
import ithar from "../../Assets/Images/ithra-logo.svg";
import inschool from "../../Assets/Images/inschool-logo.svg";
import Aramco from "../../Assets/Images/Saudi-Aramco-Logo.svg";
import mesk from "../../Assets/Images/meskScool-logo.svg";

import "./Navbar.css";

const Navbar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 769,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
      },
      {
        breakpoint: 425,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
      },
    ],
  };
  const settingsicons = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true,
          speed: 2000,
          autoplaySpeed: 1000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 425,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true,
          speed: 2000,
          autoplaySpeed: 1000,
          cssEase: "linear",
         },
      },
    ],
  };
  return (
    <>
      {/* nav-bar ===============================*/}
      <section style={{ marginBottom: "80px" }} className="navbarsection">
        <nav
          id="navbar-example"
          class="navbar navbar-expand-lg navbar-light  fixed-top shadow-sm"
        >
          <div className="container py-3">
            <a class="navbar-brand" href="#hero">
              <img className="logo " src={Logo} alt="logo" style={{width: "20%"}} />
            </a>
            <button
              class="navbar-toggler"
              style={{ marginLeft: "47%" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <ul class="navbar-nav ms-auto mb-2 mb-lg-0"> */}
              <Scrollspy
                className=" ms-auto mb-2 mb-lg-0 scrollbox"
                items={["hero", "about", "team", "sponsers"]}
                currentClassName="active"
              >
                <li className="nav-item px-3">
                  <a className="nav-link" aria-current="page" href="#hero">
                    Home
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="#team">
                    Our team
                  </a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link" href="#sponsers">
                    Sponsers
                  </a>
                </li>
              </Scrollspy>
              {/* </ul> */}

              {/* icons */}

              <ul className="mb-2 mb-lg-0  icons d-flex">
                <a
                  href="https://www.linkedin.com/in/abiyya-racing-153571265/"
                  className="me-3"
                >
                  <i className="icon fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/abiyya.racing/?igshid=ZDdkNTZiNTM%3D"
                  className="me-3"
                >
                  <i className="icon fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@abiyyaracing"
                  className="me-3"
                >
                  <i className="icon fa-brands fa-tiktok"></i>
                </a>
                <a
                  href="https://twitter.com/Abiyya_Racing?t=GN8bvoFJcXIpniU_fFQ_cA&s=09"
                  className="me-3"
                >
                  <i className="icon fa-brands fa-twitter"></i>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      {/* hero =======================================*/}
      <section id="hero" className="herosection position-relative">
        <div className=" content text-center ">
        </div>
      </section>
      {/* services-section =============================*/}
      <section
        
        className="ourvision"
        style={{ paddingTop: "50px", paddingBottom: "100px" }}
      >
        <div className="container content">
          <div className="title-font text-center">
            <span><img className="icon" src={titleicon} alt="" style={{width: "5%"}}/></span>
            Our Sevices
          </div>
          <div className="row">
            {/* s1 */}
            <div className="col-md-4">
              <div className="data text-center ">
                <img src={consalting} alt="" className="w-50"/>
                <h4 className="my-5 service-h4">Consulting</h4>
              </div>
            </div>
            {/* s2 */}
            <div className="col-md-4">
              <div className="data text-center ">
              <img src={design} alt="" className="w-50"/>
              <h4 className="my-5 service-h4">Designing</h4>

               
              </div>
            </div>

            {/* s3 */}
            <div className="col-md-4 ">
              <div className="data text-center ">
              <img src={engineer} alt="" className="w-50"/>
              <h4 className="my-5 service-h4">Engineering</h4>

                
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* coming */}
      <section className="who p-5" id="about">
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-7 my-2 mx-5 col-who" style={{textAlign: "initial"}}>
              <div className="data-content">
              <h5 className="mx-5 my-5 who-title">Who is Abiyya</h5>
              <p>Abiyya, the mare of the king Abdulaziz, is one of the most famous Arabian horses since the founding of the kingdom of Saudi Arabia</p>
              </div>
            </div>
            <div className="col-md-4">
            </div>
            <div className="col-md-7 py-4 mx-5 data-vision col-who" style={{textAlign: "initial", marginTop: "10%"}}>
              <div className="data-content">
              <h5 className="mx-5 my-5 who-title">Our Vision </h5>
              <p> To reach the world finals 2022/2023, discover our passions,broaden our horizons, and have a positive impact on our society</p>
              </div>
            </div>
        </div>
      </section>
      {/* Team=============================== */}
      <section id="team" className="team py-3">
        <div className="title py-5 text-center">
          <div className="title-font" style={{marginTop:"50px"}}>
            <span>
              <img src={titleicon} alt="ss" style={{ width: "50px" }} />
            </span>
            Our Team
          </div>
        </div>
        <Slider {...settings} className="slideritem container py-2">
          <div className="cardbox position-relative">
            <div className="inside py-5 px-3 text-center">
              <img src={t1} alt="" className="img-t w-50 position-absolute" />
              <div className="team-data py-4">
                <h3 className="py-3">Rose Asseri</h3>
                <label className="my-4">Team Management</label>
                <ul className="d-flex icons justify-content-center">
                <a
                    href="https://www.linkedin.com/in/haboob-f1-a4b405264"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haboob_ksa/"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@haboob.f1sa?_t=8zwuq3chm78&_r=1"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-tiktok"></i>
                  </a>
                  <a
                    href="https://twitter.com/haboobf1?s=21&t=0YJ3iPF_r5U85NcnzGeGPQ"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-twitter"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="cardbox position-relative">
          <div className="inside py-5 px-3 text-center">
              <img src={t2} alt="" className="img-t w-50 position-absolute" />
              <div className="team-data py-4">
                <h3 className="py-3">Rose Asseri</h3>
                <label className="my-4">Team Management</label>
                <ul className="d-flex icons justify-content-center">
                <a
                    href="https://www.linkedin.com/in/haboob-f1-a4b405264"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haboob_ksa/"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@haboob.f1sa?_t=8zwuq3chm78&_r=1"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-tiktok"></i>
                  </a>
                  <a
                    href="https://twitter.com/haboobf1?s=21&t=0YJ3iPF_r5U85NcnzGeGPQ"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-twitter"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="cardbox position-relative">
          <div className="inside py-5 px-3 text-center">
              <img src={t3} alt="" className="img-t w-50 position-absolute" />
              <div className="team-data py-4">
                <h3 className="py-3">Rose Asseri</h3>
                <label className="my-4">Team Management</label>
                <ul className="d-flex icons justify-content-center">
                <a
                    href="https://www.linkedin.com/in/haboob-f1-a4b405264"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haboob_ksa/"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@haboob.f1sa?_t=8zwuq3chm78&_r=1"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-tiktok"></i>
                  </a>
                  <a
                    href="https://twitter.com/haboobf1?s=21&t=0YJ3iPF_r5U85NcnzGeGPQ"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-twitter"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="cardbox position-relative">
          <div className="inside py-5 px-3 text-center">
              <img src={t1} alt="" className="img-t w-50 position-absolute" />
              <div className="team-data py-4">
                <h3 className="py-3">Rose Asseri</h3>
                <label className="my-4">Team Management</label>
                <ul className="d-flex icons justify-content-center">
                <a
                    href="https://www.linkedin.com/in/haboob-f1-a4b405264"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haboob_ksa/"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@haboob.f1sa?_t=8zwuq3chm78&_r=1"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-tiktok"></i>
                  </a>
                  <a
                    href="https://twitter.com/haboobf1?s=21&t=0YJ3iPF_r5U85NcnzGeGPQ"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-twitter"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="cardbox position-relative">
          <div className="inside py-5 px-3 text-center">
              <img src={t1} alt="" className="img-t w-50 position-absolute" />
              <div className="team-data py-4">
                <h3 className="py-3">Rose Asseri</h3>
                <label className="my-4">Team Management</label>
                <ul className="d-flex icons justify-content-center">
                <a
                    href="https://www.linkedin.com/in/haboob-f1-a4b405264"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haboob_ksa/"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@haboob.f1sa?_t=8zwuq3chm78&_r=1"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-tiktok"></i>
                  </a>
                  <a
                    href="https://twitter.com/haboobf1?s=21&t=0YJ3iPF_r5U85NcnzGeGPQ"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-twitter"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="cardbox position-relative">
          <div className="inside py-5 px-3 text-center">
              <img src={t1} alt="" className="img-t w-50 position-absolute" />
              <div className="team-data py-4">
                <h3 className="py-3">Rose Asseri</h3>
                <label className="my-4">Team Management</label>
                <ul className="d-flex icons justify-content-center">
                <a
                    href="https://www.linkedin.com/in/haboob-f1-a4b405264"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/haboob_ksa/"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@haboob.f1sa?_t=8zwuq3chm78&_r=1"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-tiktok"></i>
                  </a>
                  <a
                    href="https://twitter.com/haboobf1?s=21&t=0YJ3iPF_r5U85NcnzGeGPQ"
                    className="me-3"
                  >
                    <i className="icon fa-brands fa-twitter"></i>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/* sponsers=============================== */}
      <section id="sponsers" className="sponsers py-3 text-center">
          <div className="sliders container">
              <div className="title-v py-5 text-center">
                <div className="title-font">
                  <span>
                    <img src={titleicon} alt="ss" style={{ width: "50px" }} />
                  </span>
                  Our Sponsers
                </div>
              </div>
          <div className="slider-trucks py-5">
  

            <Slider {...settingsicons} className="slideritem container ">
              <div className="cardbox">
                <div className="inside py-3 px-2 text-center">
                  <img src={sp1} alt="" style={{ width: "70%", marginTop:"-30px" }} />
                </div>
              </div>
              {/* 2 */}
              <div className="cardbox">
              <div className="inside py-3 px-2 text-center">
              <img src={smart} alt="" style={{ width: "90%" }} />

                </div>
              </div>
              {/* 3 */}
              <div className="cardbox">
              <div className="inside py-3 px-2 text-center">
              <img
                    className="mb-2"
                    src={ithar}
                    alt=""
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
              {/* 4 */}
              <div className="cardbox">
              <div className="inside py-3 px-2 text-center">
              <img
                    className="mt-2"
                    src={inschool}
                    alt=""
                    style={{ width: "50%" }}
                  />
                </div>
              </div>
              {/* 5 */}
              <div className="cardbox">
              <div className="inside py-3 px-2 text-center">
              <img src={Aramco} alt="" style={{ width: "60%" }} />

                </div>
              </div>
              {/* 6 */}
              <div className="cardbox">
              <div className="inside py-3 px-2 text-center">
              <img
                    className="my-2"
                    src={mesk}
                    alt=""
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
              {/* 7 */}
              <div className="cardbox">
              <div className="inside py-3 px-2 text-center">
              <img
                    className="my-2"
                    src={orecal}
                    alt=""
                    style={{ width: "60%" }}
                  />
                </div>
              </div>
              {/* 8 */}
              <div className="cardbox">
              <div className="inside py-3 px-2 text-center">
              <img
                    className="my-2"
                    src={sp2}
                    alt=""
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            </Slider>
       
          </div>

          <div className="data-info py-5">
            <p>
              The F1 IN SCHOOLS Logo, F1, FORMULA 1, FIA FORMULA ONE WORLD
              CHAMPIONSHIP,GRAND PRIX and related marks are trademarks of
              Formula One Licensing BV, a Formula One group company. All rights
              reserved
            </p>
          </div>
        </div>
        
      </section>
      {/* faq */}
      {/* ============================fqa==================== */}
        {/* <div className="img-line"></div> */}
        <section className="faq py-5">
          <div className="title py-5 text-center">
            <div className="title-font">
                  <span>
                    <img src={titleicon} alt="ss" style={{ width: "50px" }} />
                  </span>
              FAQ</div>
            <div className="line-title my-2"></div>
          </div>
          {/* faq-qu */}
          <div className="container">
            <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
              <MDBAccordion alwaysOpen initialActive={1}>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="What is F1 in Schools?"
                >
                 F1 in Schools is a worldwide STEM competition where teams of 3-6 students compete to create a miniature F1 car, with also building an identity for a team.
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={2}
                  headerTitle="What is the material of the car?"
                >
                  You can start with asking your school if there is a chance to
                  join
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle="How can I join?">
                  You can start with asking your school if there is a chance to
                  join
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={3}
                  headerTitle="How long is the competition?"
                >
                  You can start with asking your school if there is a chance to
                  join
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={3}
                  headerTitle="What does the winner of f1 in schools get?"
                >
                  You can start with asking your school if there is a chance to
                  join
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBContainer>
          </div>
        </section>
    </>
  );
};

export default Navbar;
