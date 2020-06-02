import React from "react";

class EditDescription extends React.Component{
    constructor(props) {
        super(props);
        this.changeDescriptin=this.changeDescriptin.bind(this)
    }
    changeDescriptin()
    {   document.getElementById('description_text_input').style.display='flex'
        document.getElementById('description_text').style.display='none';
    }
    render() {return(
        <div id="edit_description">
         <div id='description_text'>
             {localStorage.getItem('description')}
         </div>
            <div id='description_text_input'>
                <input name='description' onChange={this.props.handleChange} type='text' placeholder={localStorage.getItem('description')}autoComplete='off'/>
            </div>
            <div id="description_icon" onClick={this.changeDescriptin}>
                <img src={require('../imgs/Icon material-mode-edit.svg')}/>
            </div>
        </div>
    )
    }


}
export default EditDescription