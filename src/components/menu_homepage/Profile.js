import React from "react";
import Avatar    from "./Avatar";
import Lanes from "./Lanes";
import Description from "./Description";

class Profile extends React.Component{
    constructor(props) {
        super(props);

    }


    render(){return(
        <div id='profile'>
        <div id='menu-profile-header'>
         <img onClick={this.props.expand_menu} src={require('../imgs/Icon feather-menu.svg')}/>
        </div>
        <Avatar user_data={this.props.user_data}/>
        <Lanes/>
        <Description/>
        </div>
    )}
}

export default Profile
