import React from "react";

class FindBtn extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='find_btn' onClick={this.props.findDuo}>
                <div>
                    Find DUO
                </div>
            </div>
        );
    }
}
export default FindBtn