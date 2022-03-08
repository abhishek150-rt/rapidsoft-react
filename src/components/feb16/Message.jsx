import { Component } from "react";

export default class Message extends Component {
    constructor() {
        super()
        //initializing state in class component
        this.state = {
            mode: "Light Mode",
            style: {
                background: "white",
                color: "black"
            }
        }
    }
    //Function for changing state/mode
    changeMode(){
        if (this.state.mode === "Light Mode") {
            this.setState({
                mode: "Dark Mode",
                style: {
                    background: "black",
                    color: "white"
                }
            })
        }
        else
            this.setState({
                mode: "Light Mode",
                style: {
                    background: "white",
                    color: "black"
                }
            })
    }
    render() {

        //State destructring
        const { mode, style } = this.state
        return (
            <>
                <h1 style={style}>{mode}</h1>
                <button type="button" onClick={this.changeMode.bind(this)}>Change Mode</button>
            </>

        )
    }
}