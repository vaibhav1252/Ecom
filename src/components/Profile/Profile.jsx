import React from 'react'
import './Profile.css'
import profile_pic from '../../assets/Images/Profile/profile_pic.svg'
import Profile_Footer from '../../assets/Images/Profile/Profile_Footer.png'
import { ImFolderUpload } from "react-icons/im";
import { RiShutDownLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { RiContactsBook2Fill } from "react-icons/ri";



function Profile() {
    return (
        <>
            <div className="profile-container">
                <div className="profile-inner-container">
                    <div className="profile-left">
                        <div className="profile-pic">
                            <div>
                                <img src={profile_pic} />
                            </div>
                            <div className="profile-heading">
                                <h6>Hello,</h6>
                                <h5><b>User Name</b></h5>
                            </div>
                        </div>

                        <div className="profile-middle">
                            <div className="my-orders">
                                <ImFolderUpload className='orderImg' />
                                MY ORDERS
                            </div>

                            <div className="account-setting">
                                <div className="account-setting-heading">
                                    <FaUser className='accountImg' />
                                    <div>ACCOUNT SETTING</div>
                                </div>
                                <div className="account-setting-links">
                                    <a href=''>
                                        <div>Profile Information</div>
                                    </a>
                                    <a href=''>
                                        <div>Manage Address</div>
                                    </a>
                                    <a href=''>
                                        <div>PAN Card Information</div>
                                    </a>
                                </div>
                            </div>

                            <div className="account-setting">
                                <div className="account-setting-heading">
                                    <IoMdWallet className='accountImg' />
                                    <div>PAYMENTS</div>
                                </div>
                                <div className="account-setting-links">
                                    <a href=''>
                                        <div>Gift Cards</div>
                                    </a>
                                    <a href=''>
                                        <div>Saved UPI</div>
                                    </a>
                                    <a href=''>
                                        <div>Saved Cards</div>
                                    </a>
                                </div>
                            </div>

                            <div className="account-setting">
                                <div className="account-setting-heading">
                                    <RiContactsBook2Fill className='accountImg' />
                                    <div>MY STUFF</div>
                                </div>
                                <div className="account-setting-links">
                                    <a href=''>
                                        <div>My Coupons</div>
                                    </a>
                                    <a href=''>
                                        <div>My Review & Rating</div>
                                    </a>
                                    <a href=''>
                                        <div>All Notifications</div>
                                    </a>
                                    <a href=''>
                                        <div>My Wishlist</div>
                                    </a>
                                </div>
                            </div>

                            <div className="Logout">
                                <RiShutDownLine className='logoutImg' />
                                Logout
                            </div>
                        </div>

                        <div className="frequently-visited">
                            <div className="frequently-visited-heading">
                                <p>Frequently Visited:</p>
                                <h4>Track Order Help Center</h4>
                            </div>
                        </div>
                    </div>

                    <div className="profile-right">
                        <div className="profile-upper">
                            <div className='personal-info'>
                                <div>
                                    <span>Personal Information</span>
                                    <span className='edits'>Edits</span>
                                </div>
                                <div>
                                    <input type='text' className='first_name'></input>
                                    <input type='text' className='last_name'></input>
                                </div>
                            </div>
                            <div className='gender'>Your Gender
                                <div className='radioButton'>
                                    <input type="radio" value="option1" name='gender' className='radio' /><label>Male</label>
                                    <input type="radio" value="option1" name='gender' className='radio' /><label>Female</label>
                                </div>
                            </div>
                            <div className='email'>
                                <span>Email Address</span>
                                <div>
                                    <input type='email' className='first_name'></input>
                                </div>
                            </div>
                            <div className='mobile'>
                                <span>Mobile Number</span>
                                <div>
                                    <input type='text' className='first_name'></input>
                                </div>
                            </div>
                            <div className='faq'>
                                <h3>FAQ</h3>
                                <div>
                                    <h4>What happens when I update my email address (or mobile number)?</h4>
                                    <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email
                                        address (or mobile number).
                                    </p>
                                    <h4>When will my Flipkart account be updated with the new email address (or mobile number)?</h4>
                                    <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>

                                    <h4>What happens to my existing Flipkart account when I update my email address (or mobile number)?</h4>
                                    <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>

                                    <h4> Does my Seller account get affected when I update my email address?</h4>
                                    <p> Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>

                                    <div className='Deactivate-Account'>Deactivate Account</div>
                                </div>
                            </div>
                        </div>
                        <div className='Profile_footer'>
                            <img src={Profile_Footer} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile