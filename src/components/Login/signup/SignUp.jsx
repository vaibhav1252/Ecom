import React from 'react'
import './SignUp.css'
import login_img from '../../../assets/Images/login/login_img.png'


function SignUp() {
    return (
        <>
            <div className='main-container'>
                <div className="SignUpPage">
                    <div className='SignUpPage-Left'>
                        <h2>Login</h2>
                        <p>Get access to your Orders,
                            Wishlist and Recommendations.
                        </p>
                        <div className='New-to-Flipkart'>
                            <img src={login_img} />
                        </div>
                    </div>


                    <div className='SignUpPage-Right'>
                        <div className='SignUpPage-input'>
                            <input type="text" placeholder='Enter Email/Mobile Number' />
                        </div>
                        <div>
                            <p className='Terms-and-Condition'>By continuing, you agree to Flipkart's
                                <span> Terms of </span> and
                                <span> Privacy Policy.</span>
                            </p>

                            <button>Request OTP</button>
                        </div>
                        <div className='New-to-Flipkart'>
                            <p>New to Flipkart? Create an Account</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SignUp