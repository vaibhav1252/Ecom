import React from 'react'
import './header.css'
import { BsSearch, BsShop, BsCart3 } from "react-icons/bs";
import blacklogo from '../../../assets/Images/Logo/blacklogo.svg';
import Signmenu from './signinOption/Signmenu';
import MenuOption from './menuOption/MenuOption';
// import { useState } from 'react';


function Header() {
//     const [count, setcounter] = useState(0)
//     function incrementCount() {
//         setcounter(count + 1)
//     };

//     function decrementCount() {
//         if (count > 0)
//             setcounter(count - 1)
//     };

//     function resetCount() {
//         if (count > 0)
//             setcounter(0)
//     };
    return (
//         <>

//             <h1>Total count {count} times</h1>
//             <button onClick={incrementCount}>Increment count</button>

//             <button onClick={decrementCount}>Decrement Coun</button>
//             <button onClick={resetCount}>Reset</button>
            <>
            <header className='fk-header'>

                <div className='fk-header-logo'>
                    <img class="logoimg" src={blacklogo} />
                </div>

                <div className='fk-header-searchbar'>
                    <BsSearch />
                    <input type="search" placeholder='Search for Products, Brands and More' />
                </div>

                <div className='fk-header-menu'>
                    <div className='pointer p-5'><span><BsShop className='headericon' /></span>Become a seller</div>
                    <div className='p-5'><Signmenu/></div>
                    <div className='p-5'><span><BsCart3 className='headericon' /></span>Cart</div>
                    <div className='p-5'><MenuOption /></div>
                </div>

            </header>
        </>
    )
}

export default Header