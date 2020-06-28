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
                                                                // a ? b : (c ? d : e)
            <div onLoad={this.props.scroll}  id="messenges" style={this.props.name===localStorage.getItem('username')&&this.props.msg_url===null?{'flex-direction':'row-reverse','align-self':'flex-end'}: (this.props.name===localStorage.getItem('username')&&this.props.msg_url!==null?{'flex-direction':'row-reverse','align-self':'flex-end','min-height':'60%'}:null )} >
                <div id="msg-avatar">
                    <img src={this.props.avatar_url}/>
                </div>
                <div id="msg-body">
                    <div id="msg-text">
                        {this.props.text}
                    </div>
                    <div id='msg-img'>
                        <img src={this.props.msg_url}/>
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