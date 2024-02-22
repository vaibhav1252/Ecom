import React from 'react'
import './footer.css'
import { BsShop, BsGraphUpArrow, BsQuestionCircle, BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiGift } from "react-icons/bi";

function Footer() {
    return (
        <>
            <footer className='fk-footer'>
                <div className='footer-upper'>
                    <div className='footerlist'>
                        <h4>ABOUT</h4>
                        <p><a href="">Contact Us</a></p>
                        <p> <a href="">About Us</a></p>
                        <p> <a href="">Careers</a></p>
                        <p> <a href="">Flipkart Stories</a></p>
                        <p> <a href="">Press</a></p>
                        <p> <a href="">Flipkart Wholesale</a></p>
                        <p> <a href="">Corporate Information</a></p>
                    </div>
                    <div className='footerlist'>
                        <h4>HELP</h4>
                        <p> <a href="">Payments</a></p>
                        <p> <a href="">Shipping</a></p>
                        <p> <a href="">Cancellation & Return</a></p>
                        <p> <a href="">FAQ</a></p>
                        <p> <a href="">Reporting Infringement</a></p>
                    </div>
                    <div className='footerlist'>
                        <h4>CONSUMER POLICY</h4>
                        <p> <a href="">Cancellation & Return</a></p>
                        <p> <a href="">Terms Of Use</a></p>
                        <p> <a href="">Security</a></p>
                        <p> <a href="">Privacy</a></p>
                        <p> <a href="">Sitemap</a></p>
                        <p> <a href="">Grievance Redressal</a></p>
                        <p> <a href="">EPR Compliance</a></p>
                    </div>
                    <div className='footerlist footerlist1'>
                        <h4>SOCIAL</h4>
                        <div> <a href=""><BsFacebook /></a></div>
                        <div> <a href=""><BsYoutube /></a></div>
                        <div> <a href=""><BsTwitter /></a></div>
                        <div> <a href=""><BsInstagram /></a></div>
                    </div>
                    <div className='footerlist mailus'>
                        <h4>Mail Us:</h4>
                        <p>Ecom Internet Private Limited,</p>
                        <p>Behind Pramod Super Market,</p>
                        <p>Nandi Stop,</p>
                        <p>Latur, 413512</p>
                        <p>Maharashtra, India</p>
                    </div>
                    <div className='footerlist'>
                        <h4>Registered Office Address:</h4>
                        <p>Ecom Internet Private Limited,</p>
                        <p>Behind Pramod Super Market,</p>
                        <p>Nandi Stop,</p>
                        <p>Latur, 413512</p>
                        <p>Maharashtra, India</p>
                        <p>CIN : A12345BC2023LTD112233</p>
                        <p>Telephone: 02382-245123</p>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div> <a href=""> <BsShop className='headericon1' />Become a seller</a></div>
                    <div> <a href=""> <BsGraphUpArrow className='headericon1' />Advertise</a></div>
                    <div> <a href=""> <BiGift className='headericon1' />Gift Cards</a></div>
                    <div> <a href=""> <BsQuestionCircle className='headericon1' />Help Center</a></div>
                    <div>2023 Ecom.com</div>
                </div>
            </footer>
        </>
    )
}

export default Footer