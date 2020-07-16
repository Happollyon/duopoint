import React from "react";
import io from "socket.io-client";
import '../../homepage.css'
import Menu from "./Menu";
import Chat from "../chat/Chat"






class Homepage extends React.Component{
    constructor(props) {
        super(props);
        this.state=
                {
                    channels:[],
                    private_text:[],
                    channel_selected:[],
                    msg_feed:[],
                    private_text_selected:'',
                }
        this.resetList=this.resetList.bind(this)
        this.handleClick =this.handleClick.bind(this)
        this.handleClick_pvt_text= this.handleClick_pvt_text.bind(this)
        this.delete_channel=this.delete_channel.bind(this)
        this.delete_friendship = this.delete_friendship.bind(this)

    }
    delete_friendship(friendship_id)
    {

        let user_2 = localStorage.getItem('user_id')
        let url = '/backend/delete_friendship/'+ friendship_id + '/'+user_2
        fetch(url, {method:'POST'}).then(response =>{if(response.status === 200)
        {
            this.resetList()
        }else {
            alert('nope')
        }})
    }
    delete_channel(channel_id)
    {
        let user_id = localStorage.getItem('user_id')
        let channel = channel_id
        let url = '/backend/delete_channel/'+ user_id +'/'+channel
        fetch(url, {method:'POST'}).then(response => {if(response.status ===200)
        {
            this.resetList()
        }else
        {
            alert('nope')
        }

        })

    }
      componentWillMount()
        {
            this.resetList()

            return this.props.keepLogged()

        }


    resetList(){
        let user_id = localStorage.getItem('user_id')
        let url= '/backend/chanel/'+user_id

        fetch( url,{method:'POST'}).then(
            response=> {if (response.status===200)
            {
                response.json().then(response=>{
                    this.setState({channels:response.channels, private_text:response.private_text})
                    this.setState({channel_selected:this.state.channels[0]})
                    this.handleClick(0)
                })
            }}
        )
    }


    handleClick(index)
    {

        this.setState({channel_selected:this.state.channels[index],private_text_selected:''})

        let url="/backend/msg_feed/"+this.state.channels[index].id
        fetch(url,{method:'POST'}).then(
            response=>{if(response.status===200)
                {
                  response.json().then(response=>
                  {
                      this.setState({msg_feed:response.msg_feed})

                  })


            }}
        )
    }
    handleClick_pvt_text(index)
    {


        this.setState({channel_selected:this.state.private_text[index],private_text_selected:'yes'})


        let url="/backend/pvt_msg_feed/"+ this.state.private_text[index].id
        fetch(url,{method:'POST'}).then(
            response=>{if(response.status===200)
            {
                response.json().then(response=>
                {
                    this.setState({msg_feed:response.msg_feed})
                })


            }}
        )
    }



    render() {

        return(
        <div id="homepage">
            <Menu  delete_friendship={this.delete_friendship}delete_channel={this.delete_channel} handleClick_pvt_text={this.handleClick_pvt_text} handleClick={this.handleClick} private_text={this.state.private_text}channels={this.state.channels} resetList={this.resetList}logout={this.props.logout}user_data={this.props.user_data}/>
            <Chat private_text_selected={this.state.private_text_selected}msg_feed={this.state.msg_feed} channel_selected={this.state.channel_selected}/>
        </div>
    )
    }

}
export default Homepage