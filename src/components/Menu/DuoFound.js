import React from "react";
import Chanel_item from "../menu_homepage/Chanel_item";

class DuoFound extends React.Component{
    constructor(props) {
        super(props);

    }
render() {return(
    <div id='duo-found'>
        {this.props.duo_result.map((duo_result,index)=>{return <Chanel_item addChanel={this.props.addChanel} key={index} index={index} name={duo_result.username} url={duo_result.url}/>})}
    </div>
)
}
}
export default DuoFound