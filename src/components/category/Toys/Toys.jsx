import React from 'react'
import './toys.css'
import { AiOutlineDown } from "react-icons/ai";
import BeautyToysandMore from '../../../assets/Images/Category images/BeautyToysandMore.webp';

function Toys() {
    return (
        <>   
            <div className='Toysmenubox'>
                <div>
                    <span><img class='Toys' src={BeautyToysandMore} /></span>


                    <div className='hover'>Beauty, Toys &  More<span><AiOutlineDown className='icondropdown' /></span></div>
                </div>

                <div className='Toyslist'>
                    <ul className='Toyslistitems'>
                        <li>Beauty & Personal Care</li>
                        <li>Men's Grooming</li>
                        <li>Food & Drink</li>
                        <li>Nutrition & Health Care</li>
                        <li>Baby Care</li>
                        <li>Toys & School Supplies</li>
                        <li>Sportd & Fitness</li>
                        <li>Books</li>
                        <li>Music</li>
                        <li>Stationary & Office Supplies</li>
                        <li>Auto Accessories</li>
                    </ul>
                </div>
            </div>
        </>

    )
}                                                       

export default Toys