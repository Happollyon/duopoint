import React from "react";

class Chanel_item extends React.Component
{
    constructor(props)
    {
    super(props);

}


render() {return(
    <div id="chanel_item" onClick={()=>this.props.addChanel(this.props.index)}>
        <div id="chanel_item_avatar">
            <img src={this.props.url}/>
        </div>
        <div id="chanel_item_name">
            {this.props.name}
        </div>
        <div id="chanel_item_icon">
            <img src={require('./imgs/Icon ionic-ios-text.svg')}/>
        </div>
    </div>
)
}

}
export default Chanel_item