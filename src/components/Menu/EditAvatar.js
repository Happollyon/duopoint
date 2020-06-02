import React from "react";

class EditAvatar extends React.Component{
    constructor(props) {
        super(props);
        this.changeUsername=this.changeUsername.bind(this)
    }


    changeUsername()
    {   document.getElementById('edit_avatar_username_input').style.display='flex'
        document.getElementById('edit_avatar_username').style.display='none';
    }
    render() {return(
        <div id="edit_avatar">
            <div id='edit_avatar_img' onClick={this.props.openpic}>
                <img src={localStorage.getItem('url')}/>
            </div>
            <div id="edit_avatar_username">
                {localStorage.getItem('username')}
            </div>
            <div id='edit_avatar_username_input'>
                <input name='username' onChange={this.props.handleChange} type='text' name='username' autoComplete='off' autoFocus="true" placeholder={localStorage.getItem('username')}/>
            </div>
            <div id="edit_avatar_icon" onClick={this.changeUsername}>
                <img src={require('../imgs/Icon material-mode-edit.svg')}/>
            </div>
        </div>
    )
    }


}
export default EditAvatar