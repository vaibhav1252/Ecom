import React from 'react'
import './signmenu.css'
import { BiUser, BiGift, BiWallet } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";

export default function Signmenu() {
    return (
        <>
            <div className='signinmenubox'><span><BiUser className='headericon' />Sign In</span>
                <div className='signinlist'>
                    <ul className='signinlistitems'>
                        <li>New Customer ?</li>
                        <li><BiUser className='headericon' />My profile</li>
                        <li><BsBoxSeam className='headericon' />Order</li>
                        <li><MdOutlineFavoriteBorder className='headericon' />Watch List</li>
                        <li><BiWallet className='headericon' />Reward</li>
                        <li><BiGift className='headericon' />Gift Cards</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
