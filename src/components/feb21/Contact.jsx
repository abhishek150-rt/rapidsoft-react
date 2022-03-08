import React, { Component } from 'react'
import styles from "./Form.module.css"
export default class Contact extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            name: "",
            password: "",
            skill: "",
            errorName: "",
            errorPassword: ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (!this.state.email) {
            alert("please fill all the fields");
        }
        else if (this.state.name.length < 5) {
            this.setState({
                errorName: "Please enter more than 5 characters"
            })
        }
        else if (!this.state.password) {
            this.setState({
                errorPassword: "Please enter the password"
            })
        }
        else if (!this.state.password.match(paswd)) {
            this.setState({
                errorPassword: "Please enter a valid password"
            })
        }
        else {
            console.log(`${this.state.name} , ${this.state.email}, ${this.state.password} ,${this.state.skill}  `)

        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className={styles.primaryStyle}>
                    <fieldset>
                        <legend>Contact Us</legend>
                    </fieldset>
                    <label htmlFor="email">Email:</label>
                    <input className={styles.inputStyle} type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                    <br></br>
                    <label htmlFor="name">Username:</label>
                    <input className={styles.inputStyle} type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                    <span>{this.state.errorName}</span>
                    <br></br>
                    <label htmlFor="password">Password:</label>

                    <input className={styles.inputStyle} type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
                    <span>{this.state.errorPassword}</span>
                    <label htmlFor="skill">Skill</label>
                    <select name="skill" id="skill" onChange={this.handleChange} value={this.state.skill}>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="database">Database Mananger</option>
                    </select>

                    <button type="submit" className={styles.buttonStyle}>Submit</button>
                </form>

            </>
        )
    }
}
