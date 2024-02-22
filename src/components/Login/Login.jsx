import React from 'react'
import './Login.css'
import login_img from '../../assets/Images/login/login_img.png'


function SignUp() {
    return (
        <>
            <div className='main-container'>
                <div className="LoginPage">
                    <div className='LoginPage-Left'>
                        <h2>Looks like you're new here!</h2>
                        <p>Sign up with your mobile number
                            to get started
                        </p>
                        <div className='New-to-Flipkart'>
                            <img src={login_img} />
                        </div>
                    </div>


                    <div className='LoginPage-Right'>
                        <div className='LoginPage-input'>
                            <input type="text" placeholder='Enter Mobile Number' />
                        </div>
                        <div>
                            <p className='Terms-and-Condition'>By continuing, you agree to Flipkart's
                                <span> Terms of </span> and
                                <span> Privacy Policy.</span>
                            </p>

                            <button className='LoginPage-Right-btn1'>CONTINUE</button>
                            <button className='LoginPage-Right-btn2'>Existing User? Log in</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SignUp