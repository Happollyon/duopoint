import React from "react";
import Profile from "./Profile";
import Channel from "./Channel";
import ChanelList from "../../ChanelList";
import Newchanel from "./Newchanel";
import Menu_spand from "../Menu/Menu_spand";
import ChangePic from "../Menu/ChangePic";
class Menu extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            menu_class:'',
            change_pic_class:''
        }
        this.closeChangPic=this.closeChangPic.bind(this)
        this.openChangePic=this.openChangePic.bind(this)
        this.expand_menu=this.expand_menu.bind(this)
    }

    expand_menu(){
        if(this.state.menu_class===''||this.state.menu_class==='invisible')
        {
            this.setState({menu_class:'visible'}
            )
        }else{
            this.setState({menu_class:'invisible'})

        }


}
    closeChangPic()
    {
        this.setState({change_pic_class:'invisible'})
        setTimeout(()=>{document.getElementById('change_pic_cont').style.display='none'},700)
    }
    openChangePic()
    {
        document.getElementById('change_pic_cont').style.display='flex'
        this.setState({change_pic_class:'visible'})
    }
    componentDidMount()
    { document.getElementById('change_pic_cont').style.display='none'

      this.props.resetList()
    }
    render() {return(
            <div id='menu'>
            <Profile expand_menu={this.expand_menu}logout={this.props.logout} user_data={this.props.user_data}/>
            <Channel resetList={this.props.resetList}/>
            <ChanelList handleClick_pvt_text={this.props.handleClick_pvt_text} handleClick={this.props.handleClick}  private_text={this.props.private_text} channels={this.props.channels}/>
            <Newchanel resetList={this.props.resetList}/>
            <ChangePic classname={this.state.change_pic_class} closepic={this.closeChangPic} />
            <Menu_spand resetList={this.props.resetList}openpic={this.openChangePic} expand_menu={this.expand_menu}logout={this.props.logout}expand_menu={this.expand_menu}class_name={this.state.menu_class} />
            </div>
        )
    }
}
export default Menu