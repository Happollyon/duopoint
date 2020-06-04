import React from "react";

class Lanes extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {return(
        <div id='lanes'>
            <div>{localStorage.getItem('elo')}</div>
            <div>{localStorage.getItem('lane1')}</div>
            <div>{localStorage.getItem('lane2')}</div>
        </div>
    )
    }

}
export default Lanes