import React from "react";

class Duo extends React.Component{
    constructor(props) {
        super(props);
        this.state=
            {
            toggle_class:''
          }
    }
    render() {
        return(
        <div id='duo' onClick={this.props.toggle}>
            <div id='toggle'><div id='circle' class={this.props.duo}></div></div>
            <div>I want a duo</div>
        </div>)
    }

}
export default Duo