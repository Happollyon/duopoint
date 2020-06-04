import React from "react";
import Heading from "./Heading";
import Wave from "./Wave";
import Form from "./Form";
import '../../landing.css'
class  Landing extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render() {return(
        <div id='landing'>
        <Heading/>
        <div id='form-and-img'>
            <div id='landing-left-cont'>
            <div>
                Find duos<br/>
                Create teams<br/>
                Create channels<br/>
                Climb<br/>
            </div>

            <div id='img'>
                <img src={require('../imgs/Group 1.svg')}/>
            </div>
            </div>
            <Form  conf_psw={this.props.psw} password={this.props.password} conf_psw={this.props.conf_psw} login_call={this.props.login_call} register_call={this.props.register_call} handleChange={this.props.handleChange} msg={this.props.msg}/>
        </div>
        <Wave/>
        </div>
    )
    }
}




export default Landing