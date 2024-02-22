import React from 'react'
import './cart.css'
import cart_img from '../../assets/Images/Cart/cart_img.webp'

function SignUp() {
    return (
        <>
            <div className='main-container'>
                <div className="Cart">
                    <div className='Cart-header'>
                        <h5>ECOM</h5>
                    </div>

                    <div className='Cart-body'>
                        <div className='inner-body'>
                            <div className='Cart-img'>
                                <img src={cart_img} />
                            </div>
                            <div>
                                <h6>Missing Cart items?</h6>
                                <p>Login to see the items you
                                    added previously
                                </p>
                                <button className='Cart-button'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className=''>

                    </div>
                </footer>

            </div>

        </>
    )
}

export default SignUp