import React, { useState } from 'react'

const UserInfo = () => {
    const [userDetail, setUserDetail] = useState({ userName: "", userEmail: "" });
    const handleChange = e => {
        setUserDetail(userDetail => ({
            ...userDetail,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userDetail.userName + "," + userDetail.userEmail);

    }
    return (
        <div className='container'>
            <form className='form-container' onSubmit={handleSubmit}>
                <input type="text" name="userName" placeholder='enter your name' value={userDetail.userName} onChange={handleChange} />
                <input type="email" name="userEmail" placeholder='enter your email' value={userDetail.userEmail} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default UserInfo