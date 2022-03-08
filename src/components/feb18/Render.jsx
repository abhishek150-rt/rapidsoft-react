import React ,{Component} from "react";
export default class Render extends Component {
  constructor() {
    super()
    this.state={
      stage:"Early stagee"
    }
  }

  render(){
    return(
      <>
        {this.state.stage==="Early stage"?<p>This is a early stage code</p>:<p>This is not a early stage code</p>}
      </>
    )
  }
}
