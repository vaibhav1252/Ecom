import React from 'react'
import './menuOption.css'
import { BiDownload } from "react-icons/bi";
import { BsHeadphones, BsGraphUpArrow } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function MenuOption() {
    return (
        <div>
            <div className='menuoptionnmenubox'><span><CiMenuKebab className='headericon' /></span>
                <div className='menuoptionnlist'>
                    <ul className='menuoptionnlistitems'>
                        <li><IoIosNotificationsOutline className='headericon' />Notification Preference</li>
                        <li><BsHeadphones className='headericon' />24x7 Customer Care</li>
                        <li><BsGraphUpArrow className='headericon' />Advertise</li>
                        <li><BiDownload className='headericon' />Download App</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
