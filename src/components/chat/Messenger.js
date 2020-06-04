import React from "react";
import io from "socket.io-client";


var socket= io('http://localhost:5000/')

class Messenger extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            msg:''
        }

        this.sendMsg=this.sendMsg.bind(this)
        this.handleText=this.handleText.bind(this)
        this.keyDown = this.keyDown.bind(this)
    }
    keyDown(evet)
    {
     if(evet.key==='Enter')

         {

            this.sendMsg()

         }

    }

    sendMsg()
    {
        var msg_socket
        if(this.props.private_text_selected==='yes')
        {msg_socket='pvt_msg'

        }else{
            msg_socket='msg'
        }
    socket.emit(msg_socket,{'id': this.props.id,'msg':this.state.msg,'user_id':localStorage.getItem('user_id')})
        document.getElementById('input').value=''
    }

    handleText(event)
    {

        this.setState({msg:event.target.value})
    }





    render() {


        return (
            <div id='messenger-cont'>
                <div id='messenger'>
                    <input id='input' type='text'  onKeyDown={this.keyDown} onChange={this.handleText} autoComplete='off'/>
                <div>
                    <div onClick={this.sendMsg}><img src={require('../imgs/Icon feather-send.svg')}/></div>
                    <div><img src={require('../imgs/Icon material-gif.svg')}/></div>
                    <div><img src={require('../imgs/Icon material-add-a-photo-2.svg')}/></div>
                </div>
                </div>
            </div>
        );
    }
}

export default Messenger