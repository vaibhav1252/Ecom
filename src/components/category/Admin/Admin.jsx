import React from 'react'
import './admin.css'
import Sidebar from './Sidebar/Sidebar'
import Navbar from './Navbar/Navbar'
import AddForm from './AddForm/AddForm'


function Admin() {
    return (
        <>
            <div class="main">
                <Sidebar />
                <Navbar />
            </div>
        </>
    )
}

export default Admin