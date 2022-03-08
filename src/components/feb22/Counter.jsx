import React, { PureComponent } from 'react'

let timer;
export default class Counter extends PureComponent {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    // Lifecycle method to initially starting the counter
    componentDidMount = () => {
        timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);

    }

    // User-defined method to pause the counter
    pause() {
        clearInterval(timer);
    }


    // User-defined method to resume the counter
    resume() {
        timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }


    // User-defined method to reset the counter
    reset = () => {
        this.setState({
            count: 0
        })
    }

componentWillUnmount(){
    console.log("count is going to be 0");
}

    render() {
        return (
            <>
                <div className="App">
                    <h1>{this.state.count}</h1>
                    <button className="button" onClick={this.pause.bind(this)}>Pause</button>
                    <button className="button" onClick={this.resume.bind(this)}>Resume</button>
                    <button className="button" onClick={this.reset}>Reset</button>
                </div>
            </>
        )
    }
}
