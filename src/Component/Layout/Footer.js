


import React from "react";
import { Link } from "react-router-dom";
// import ScrollTopBtn from "../Pages/ScrollTopBtn";
// import { BackToTop } from './component-lib'
const Footer = () => {

  // const  = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth' // for smoothly scrolling
  //   });
  // };
  return (
    <div>
      <footer className="footer">
        {/* <Link to='/cartbox' ><i class="bi bi-chat-fill  chatbox"></i></Link> */}
        <div className="row mx-auto">
          <div className="footer-item text-center">
            <img src="\img\LOGO.svg"></img>
            <p>© TestGorilla 2022. All rights reserved.</p>
          </div>
          <div className=" footer-item1">
            <li className="FooterLink"><Link to='/asses' >Help Center </Link> </li>
            <li className="FooterLink"><a href="#">Information Candidates </a></li>
            <li className="FooterLink"><Link to='/ForSubject' >For subject matter experts </Link></li>
          </div>
          <div className=" footer-item2">
          <li className="FooterLink"><Link to='/Careers' >Careers <button className="btn btn-light ">Hiring!</button></Link></li>
          <li className="FooterLink"><Link to='/Blog' >Blog  </Link></li>
          <li className="FooterLink"><Link to='/Contact' >Content  </Link></li>
          </div>
          <div className="footer-item3">
          <li className="FooterLink"><Link to='/Salaries' >Legal Stuff  </Link></li>
          <li className="FooterLink"><Link to='/Privac' >Privacy Policy  </Link></li>
          <li className="FooterLink"><Link to='/Sitemap'>Site map </Link></li>
          </div>
          <div className="footer-item4">
              <img src="\img\footer-badges.png.webp" width="100%"></img>
          </div>
        <div className="footer-item5">
         <a href="#"><i class="fab fa-facebook-square socialmedia"></i></a>
          <a href="#"> <i class="fab fa-instagram socialmedia"></i></a>
          <a href="#"><i class="fab fa-linkedin socialmedia"></i></a>
          </div></div>
      </footer>
      {/* <ScrollTopBtn /> */}
    </div>
  );
};
export default Footer;