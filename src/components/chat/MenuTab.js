import React from "react";

class MenuTab extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {return(<div onClick={this.props.menu_tab} id="menu-tab">
        🠊
    </div>)

    }
}

export default MenuTab