import React from "react";
import Header from "./Header";
import EditAvatar from "./EditAvatar";
import EditLane from "./EditLane";
import EditDescription from "./EditDescription";
import Duo from "./Duo";
import SaveBtm from "./SaveBtm";

class EditProfile extends React.Component

{
    constructor(props) {
        super(props);

    }
render() {
        return(
         <div id='edit_profile'>
        <Header expand_menu={this.props.expand_menu}logout={this.props.logout}/>
        <EditAvatar handleChange={this.props.handleChange} openpic={this.props.openpic}/>
        <EditLane handleChange={this.props.handleChange}/>
        <EditDescription handleChange={this.props.handleChange}/>
        <Duo duo={this.props.duo} toggle={this.props.toggle}/>
        <SaveBtm updateCall={this.props.updateCall}/>

    </div>

)
}

}
export default EditProfile