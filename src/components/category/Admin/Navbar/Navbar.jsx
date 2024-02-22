import React from 'react'
import './navbar.css'
import AddForm from '../AddForm/AddForm'

function Navbar() {
    return (
        <>
            <div className='outlet'>
                <div className='navbar'>
                    <div>Home</div>
                    <div>About</div>
                    <div>View</div>
                    <div>Help</div>
                </div>
                <AddForm />
            </div>

        </>
    )
}

export default Navbar