import React from "react";
import CSSTransition from "react-transition-group/cjs/CSSTransition";

class Msg extends React.Component
{constructor(props) {
    super(props);
    this.state={
        inProp:'false',
        setInProp:'flase'
    }

}



    render() {


        return (

            <div onLoad={this.props.scroll}  id="messenges" style={this.props.name===localStorage.getItem('username')?{'flex-direction':'row-reverse','align-self':'flex-end'}:null} >
                <div id="msg-avatar">
                    <img src={this.props.avatar_url}/>
                </div>
                <div id="msg-body">
                    <div id="msg-text">
                        {this.props.text}
                    </div>
                    <div id="msg-date">
                        4th may 19 - 9:23
                    </div>
                </div>
            </div>
        );
    }

}
export default Msg