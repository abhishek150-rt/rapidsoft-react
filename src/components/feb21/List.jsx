import React, { Component } from "react";
import UsersList from "./UsersList";
import uniqid from 'uniqid';
export default class List extends Component {

    render() {
        const users = [{
            id: 1,
            name: "Abhishek Negi",
            address: "Joshimath"
        },
        {
            id: 2,
            name: "Prakash Rawat",
            address: "Dehradun"
        },
        {
            id: 3,
            name: "Aman Joshi",
            address: "Lohaghat"
        },
        {
            id: 4,
            name: "Deepak Sharma",
            address: "Shimla"
        },
        ]
        const athletes=["Cristiano Ronaldo","MS Dhoni","Michael Jordan","Ussain Bolt","Rafael Nadal","The Rock"]
        const athletesList = athletes.map(athlete => <li key={uniqid.time()}>Hi, My name is {athlete}</li>)
        return <UsersList name={athletesList} />
    }
}