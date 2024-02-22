import React from 'react'
import './homeandfurniture.css'
import { AiOutlineDown } from "react-icons/ai";
import HomeAndFurniture from '../../../assets/Images/Category images/HomeAndFurniture.webp';

function HomeandFurniture() {
    return (
        <>
            <div className='homeandfurnituremenubox'>
                <div>
                    <span><img class='homeandfurniture' src={HomeAndFurniture} /></span>


                    <div className='hover'>Home & Furniture<span><AiOutlineDown className='icondropdown' /></span></div>
                </div>

                <div className='homeandfurniturelist'>
                    <ul className='homeandfurniturelistitems'>
                        <li>Home Furnishings</li>
                        <li>Furniture Studio</li>
                        <li>Kitchin & Dining</li>
                        <li>Bedroom Furniture</li>
                        <li>Home decor</li>
                        <li>Tools & Utility</li>
                        <li>Lightings & Electricals</li>
                        <li>Space Saving Furniture</li>
                        <li>Cleaning & Bath</li>
                        <li>Kids Furniture</li>
                        <li>Work Space Furniture</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default HomeandFurniture