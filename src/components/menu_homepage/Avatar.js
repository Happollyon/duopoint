import React from "react";
import {unstable_renderSubtreeIntoContainer} from "react-dom";

class Avatar extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {return(
        <div id='profile-avatar'>
            <div id='avatar-img'>
                <img src={localStorage.getItem('url')}/>
            </div>
            <div id='profile-name'>
                {localStorage.getItem('username')}
            </div>
        </div>
    )
    }
}
export default Avatar