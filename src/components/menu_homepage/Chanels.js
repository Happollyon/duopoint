import React from "react";

class Chanels extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        var src='\'\''
        return (
            <div id='chanels' >
            <div id='chanel-and-pic'onClick={()=>{this.props.handleClick(this.props.index)}}>
                <div id='chanel-picture'>
                    <img src={this.props.url}/></div>
                <div>{this.props.name}</div>
                <div style={{'margin-left':'1vw'}}><img src={require('../imgs/Icon awesome-bell.svg')}/></div>
            </div>
                <div style={{'margin-right':'1vw','cursor':'pointer'}}>
                    <img onClick={()=>{this.props.delete_channel(this.props.id)}} src={require('../imgs/Icon material-delete2.svg')} onMouseOver={event => event.currentTarget.src= require('../imgs/Icon material-delete.svg')} onMouseOut={event => event.currentTarget.src=require('../imgs/Icon material-delete2.svg')} />
                </div>
            </div>
        );
    }

}
export default Chanels