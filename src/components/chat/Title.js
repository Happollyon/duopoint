import React from "react";

class Title extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div id='title'>
                <div id='members'><div id='members-icon'><img src={require('../imgs/Icon awesome-user-circle.svg')}/></div><div>300</div></div>
                <div id='chanel-title'>{this.props.name}</div>
                <div id='chanel-avatar'><img src={this.props.url}/></div>
            </div>
        )
    }


}
export default Title