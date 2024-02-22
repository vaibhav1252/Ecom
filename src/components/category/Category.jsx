import React from 'react'
import './category.css'
import Glocery from '../../assets/Images/Category images/Glocery.webp';
import Mobile from '../../assets/Images/Category images/Mobile.webp';
import Appliances from '../../assets/Images/Category images/Appliances.webp';
import Travel from '../../assets/Images/Category images/Travel.webp';
import Fashion from './Fashion/Fashion';
import Twowheelers from './TwoWheelers/Twowheelers';
import Electronics from './Electronics/Electronics';
import Toys from './Toys/Toys';

function Category() {
    return (
        <>
            <div className='category'>
                <div className='categoryitem'>Grocery
                    <img class='Glocery' src={Glocery} />
                </div>
                <div className='categoryitem'>Mobile
                    <img class='Mobile' src={Mobile} />
                </div>

                <div className='categoryitem'>
                    <Fashion />
                </div>

                <div className='categoryitem'>
                    <Electronics />
                </div>

                <div className='categoryitem'>
                    <HomeandFurniture/>
                </div>

                <div className='categoryitem'>Appliances
                    <img class='Appliances' src={Appliances} />
                </div>

                <div className='categoryitem'>Travel
                    <img class='Travel' src={Travel} />
                </div>

                <div className='categoryitem'>
                    <Toys/>
                </div>

                <div className='categoryitem'>
                    <Twowheelers />
                </div>
            </div>
        </>
    )
}
import HomeandFurniture from './Home&Furniture/HomeandFurniture';

export default Category