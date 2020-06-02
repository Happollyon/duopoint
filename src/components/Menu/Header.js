import React from "react";

class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header">
                <div id='edit_menu_icon' >
                    <img onClick={this.props.expand_menu} src={require('../imgs/Icon feather-menu.svg')}/>
                </div>
                <div id='logout' onClick={()=>this.props.logout()}>
                    <img src={require('../imgs/Icon open-account-logout.svg')}/>
                </div>

            </div>
        );
    }
}
export default Header