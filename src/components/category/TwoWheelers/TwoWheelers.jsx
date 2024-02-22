import React from 'react'
import './Twowheelers.css'
import { AiOutlineDown } from "react-icons/ai";
import TwoWheelers from '../../../assets/Images/Category images/TwoWheelers.webp';

function Twowheelers() {
    return (
        <>
            <div className='Twowheelersmenubox'>
                <div>
                    <span><img class='Twowheelers' src={TwoWheelers} /></span>


                    <div className='hover'>Two Wheelers<span><AiOutlineDown className='icondropdown' /></span></div>
                </div>

                <div className='Twowheelerslist'>
                    <ul className='Twowheelerslistitems'>
                        <li>Petrol Vehicles</li>
                        <li>Electric Vehicles</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Twowheelers