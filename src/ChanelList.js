import React from "react";
import Chanels from "./components/Chanels";


class ChanelList extends React.Component{
    constructor(props)
    {
        super(props);

    }

    render() {return(
        <div id='chanel-list'>
            { this.props.channels.map((channel,index)=><Chanels handleClick={this.props.handleClick} index={index} key={channel.id}name={channel.name} id={channel.id} description={channel.descr} url={channel.url}/> )}
            { this.props.private_text.map((private_text,index)=><Chanels handleClick={this.props.handleClick_pvt_text} index={index} key={index} name={private_text.name}  id={private_text.id}url={private_text.url}/>)}
        </div>
    )
    }

}
export default ChanelList