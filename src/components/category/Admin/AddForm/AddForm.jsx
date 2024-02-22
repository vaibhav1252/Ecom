import React from 'react'
import './addForm.css'
import { useState } from 'react';


function AddForm() {

    // useState variable for storing array
    const [MenuList, setMenuList] = useState([]);
    const [MenuName, setMenuName] = useState("");

    const getMenuList = (e) => {

        if (e.target.value != "") {
            setMenuName(e.target.value);
        }
        else {
            setMenuName("")
        }
    }

    const addMenuNameToList = (e) => {
        // if (e.keyCode === 13) {

        if (MenuName !== "") {
            let TempMenuList = [...MenuList];
            TempMenuList.push(MenuName);
            setMenuList(TempMenuList);
        }
        // }

    }

    return (
        <>
            <div class="form-container">
                {/* <form onKeyUp={addMenuNameToList}> */}
                <label>Add Product</label>
                <input type="text" placeholder="Product Name" required onChange={getMenuList} />
                <button type="type" className="submit-button" onClick={addMenuNameToList}>Submit</button>
                {/* </form> */}

                <div className='menutable'>
                    <h3>Menu List</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>MenuName</th>
                                <th>Menu Status</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                MenuList.map((data, index) => {

                                    return (<><tr>
                                        <td>{index + 1}</td>
                                        <td>{data}</td>
                                        <td><span className='span'>Active</span></td>
                                        <td>
                                            <button type="submit" className="Edit-button">Edit</button>
                                            <button type="delete" className="Remove-button">Remove</button>
                                        </td>
                                    </tr>
                                    </>)
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default AddForm