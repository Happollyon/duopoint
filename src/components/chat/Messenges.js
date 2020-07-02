import React from "react";
import io from "socket.io-client";
import Msg from "./Msg";
import CSSTransition from "react-transition-group/cjs/CSSTransition";
var socket= io('https://duopointapi.herokuapp.com/',{forceNew:false})

class Messenges extends React.Component{
    constructor(props) {
        super(props);
            this.state=
                {
                 msg_body:[]

                }
            this.scroll=this.scroll.bind(this)
    }


      componentDidUpdate(prevProps,prevState,snapshot)
       {
           console.log('tried to update')

           if(prevProps.channel_selected.id !== this.props.channel_selected.id)
           {
               console.log('prev ', prevProps.channel_selected.id,' this prop: ',this.props.channel_selected.id)
               this.setState({msg_body:[]})
               var chat
               if(this.props.private_text_selected)
               {
                    chat='pvt_msg'+this.props.channel_selected.id
               }else {
                chat=this.props.channel_selected.id
               }
               let prevChat = 'pvt_msg'+prevProps.channel_selected.id
               socket.off(prevProps.channel_selected.id);
               socket.off(prevChat)

        socket.on(chat,(data)=>
            {    console.log('receives broad cast on:',this.props.channel_selected.id)

                this.setState(prevState => ({
                    msg_body: [...prevState.msg_body, data]
                }))


                console.log('msg body set')
            }
        )}


    }
    scroll(){
        var objDiv = document.getElementById("messenges-cont");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render() {

        return(
        <div id='messenges-cont'>

            {this.props.msg_feed.map((msg_feed,index)=> <Msg  scroll={this.scroll} key={index} name={msg_feed.username}avatar_url={msg_feed.url} msg_url={msg_feed.url_img} text={msg_feed.text}/>
            )}

            {this.state.msg_body.map((msg_feed,index)=><Msg scroll={this.scroll} key={index} name={msg_feed.user_details[0].username} msg_url={msg_feed.url_msg} text={msg_feed.msg} avatar_url={msg_feed.user_details[0].url}/>)}

            </div>
    )
    }

}
export default Messenges