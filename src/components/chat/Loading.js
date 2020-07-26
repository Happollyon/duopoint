import React from "react";

class Loading extends React.Component{
    constructor() {
        super();
    }
    render() {return(<div id='loading'>
        <img src={require('../imgs/Icon feather-loader.svg')}/>
    </div>)
    }

}
export default Loading