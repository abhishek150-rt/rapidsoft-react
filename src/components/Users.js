import React, { useState, useEffect } from 'react'
const data = [
    {
        id: 1,
        firstName: "Abhishek",
        lastName: "Negi",
        email: "abhishek@gmail.com",
        phone: 9548582343
    },
    {
        id: 2,
        firstName: "Aman",
        lastName: "Joshi",
        email: "aman@gmail.com",
        phone: 9475984562
    },
    {
        id: 3,
        firstName: "Prakash",
        lastName: "Rawat",
        email: "prakash@gmail.com",
        phone: 8792502634
    },
    {
        id: 4,
        firstName: "Piyush",
        lastName: "Parmar",
        email: "piyush@gmail.com",
        phone: 7839962520
    },
    {
        id: 5,
        firstName: "Aayush",
        lastName: "Rana",
        email: "aayush@gmail.com",
        phone: 8584323469
    }

]
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(data);

    }, [users])

    return (
        <>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 && users.map(user => {
                        const { id, firstName, lastName, email, phone } = user
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Users