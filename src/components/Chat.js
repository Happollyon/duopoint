import React from "react";
import Title from "./Title";
import Messenges from "./Messenges";
import Messenger from "./Messenger";


class Chat extends React.Component{
    constructor(props) {
        super(props);
        this.state=
            {
                msg_body:[],
                chanel_id:''

             }
    this.msg_update=this.msg_update.bind(this)
    }

    msg_update(data)
    {

    }



    render() {return(
                <div id='chat'>

                    <Title name={this.props.channel_selected.name} url={this.props.channel_selected.url}/>
                    <Messenges  private_text_selected={this.props.private_text_selected} msg_feed={this.props.msg_feed} channel_selected={this.props.channel_selected}msg_body={this.state.msg_body}/>
                    <Messenger  private_text_selected={this.props.private_text_selected} name={this.props.channel_selected.name} id={this.props.channel_selected.id} />
                </div>

            )
        }
    }



export default Chat