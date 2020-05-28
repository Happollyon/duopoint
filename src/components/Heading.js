import React from "react";
class Heading extends React.Component{
    constructor() {
        super()
    }
    render(){
        return(
            <div id='heading'>
                <div><img src={require('./imgs/Icon material-games.svg')}/></div>
                <span>DUO POINT</span>
                <div><img src={require('./imgs/Icon material-games.svg')}/></div>
            </div>
        )
    }
}
export default Heading
