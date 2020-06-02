import React from "react";

class SaveBtm extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {return(
        <div id="save_btm" onClick={this.props.updateCall}>
            <div></div>
            <div>SAVE</div>
            <div id='save_icon'><img src={require('../imgs/Icon feather-save.svg')}/></div>
        </div>
    )
    }

}
export default SaveBtm