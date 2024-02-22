import React from 'react'
import './products.css'
import projector from '../../assets/Images/products/projector.jpg';
import bat from '../../assets/Images/products/bat.jpg';
import camera from '../../assets/Images/products/camera.jpg';
import dress from '../../assets/Images/products/dress.jpg';
import tv from '../../assets/Images/products/tv.jpg';
import jeans from '../../assets/Images/products/jeans.jpg';

function Products() {
    return (
        <>
            <div className='bgwhite'>
                <div>
                    <h4 className='heading'>Top Offers</h4>
                </div>
                <div className='product'>
                    <div className='productitem'>
                        <div className='para'> <p>Top Projectors</p>
                            <p><b>From 9,999/-</b></p>
                        </div>
                        <div className='productImgBox'><img className='product-Image' src={projector} /></div>
                    </div>

                    <div className='productitem'>
                        <div className='para'> <p>Cricket Bats</p>
                            <p><b>From 9,999/-</b></p>
                        </div>
                        <div className='productImgBox'><img className='product-Image' src={bat} /></div>
                    </div>
                    <div className='productitem'>
                        <div className='para'> <p>Cameras</p>
                            <p><b>From 9,999/-</b></p>
                        </div>
                        <div className='productImgBox'><img className='product-Image' src={camera} /></div>
                    </div>

                    <div className='productitem'>
                        <div className='para'> <p>Womens Clothing</p>
                            <p><b>From 9,999/-</b></p>
                        </div>
                        <div className='productImgBox'><img className='product-Image' src={dress} /></div>
                    </div>
                    <div className='productitem'>
                        <div className='para'> <p>Top LCD</p>
                            <p><b>From 9,999/-</b></p>
                        </div>
                        <div className='productImgBox'><img className='product-Image' src={tv} /></div>
                    </div>

                    <div className='productitem'>
                        <div className='para'> <p>Mens jeans</p>
                            <p><b>From 9,999/-</b></p>
                        </div>
                        <div className='productImgBox'><img className='product-Image' src={jeans} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products