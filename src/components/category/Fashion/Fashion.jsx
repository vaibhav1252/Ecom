import React from 'react'
import './fashion.css'
import { AiOutlineDown } from "react-icons/ai";
import FashionImage from '../../../assets/Images/Category images/Fashion.webp'

export default function Fashion() {
    return (
        <>
            <div className='fashionmenubox'>
                <div>
                    <span><img class='Fashion' src={FashionImage} /></span>


                    <div className='hover'>Fashion<span><AiOutlineDown className='icondropdown' /></span></div>
                </div>
                <div className='fashionlist'>
                    <ul className='fashionlistitems'>
                        <li>Men's Top Wear</li>
                        <li>Men's Bottom Wear</li>
                        <li>Womens Ethics</li>
                        <li>Women Western</li>
                        <li>Men Footwear</li>
                        <li>Women Footwear</li>
                        <li>Watches and Accessories</li>
                        <li>Bag, Suitcase & Luggage</li>
                        <li>Kids</li>
                        <li>Essentials</li>
                        <li>Winter</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
