import React from "react";
class Description extends React.Component{
    constructor() {
        super();
    }

    render() {return(
        <div id='description'>
            {localStorage.getItem('description')}

        </div>
    )
    }
}
export default Description