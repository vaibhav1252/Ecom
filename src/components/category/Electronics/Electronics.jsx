import React from 'react'
import { AiOutlineDown } from "react-icons/ai";
import Electronicsimage from '../../../assets/Images/Category images/Electronics.webp'
import './electronics.css'



function Electronics() {
    return (
        <div className='Electronicsmenubox'>
            <div>
                <span><img class='Electronics' src={Electronicsimage} /></span>


                <div className='hover'>Electronics<span><AiOutlineDown className='icondropdown' /></span></div>
            </div>

            <div className='Electronicslist'>
                <ul className='Electroniccslistitems'>
                    <li>Audio</li>
                    <li>Electronics GST Store</li>
                    <li>Cameras & Accessories</li>
                    <li>Computer Peripherals</li>
                    <li>Health & Personal Care</li>
                    <li>Laptop Accessories</li>
                    <li>Gaming</li>
                    <li>Laptop & Desktop</li>
                    <li>Mobile Accessories</li>
                    <li>Powerbank</li>
                    <li>Smart Home automation</li>
                    <li>Smart Wearables</li>
                </ul>
            </div>
        </div>

    )
}

export default Electronics