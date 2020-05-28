import React from "react";
import Profile from "./Profile";
import Channel from "./Channel";
import ChanelList from "../ChanelList";
import Newchanel from "./Newchanel";
class Menu extends React.Component{
    constructor(props)
    {
        super(props);

    }

    componentDidMount()
    {
      this.props.resetList()
    }
    render() {
        return(
            <div id='menu'>
            <Profile logout={this.props.logout} user_data={this.props.user_data}/>
            <Channel resetList={this.props.resetList}/>
            <ChanelList handleClick_pvt_text={this.props.handleClick_pvt_text} handleClick={this.props.handleClick}  private_text={this.props.private_text} channels={this.props.channels}/>
            <Newchanel resetList={this.props.resetList}/>
            </div>
        )
    }
}
export default Menu