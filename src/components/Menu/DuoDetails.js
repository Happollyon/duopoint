import React from "react";

class DuoDetails extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {return(
        <div id='duo-details'>
            <select onChange={this.props.handleChange} name='find_elo' id='elo'>
                <option value="" selected disabled hidden>{localStorage.getItem('elo')}</option>
                <option value="iron">iron</option>
                <option value="bronze">bronze</option>
                <option value="silver">silver</option>
                <option value="gold">gold</option>
                <option value="platinum">platinum</option>
                <option value="diamond">diamond</option>
            </select>
            <select onChange={this.props.handleChange} name='find_lane1' id="lane1">
                <option value="" selected disabled hidden>{localStorage.getItem('lane1')}</option>
                <option value="top">top</option>
                <option value="jungle">jungle</option>
                <option value="mid">mid</option>
                <option value="adc">adc</option>
                <option value="support">support</option>
            </select>
            <select  onChange={this.props.handleChange} name='find_lane2'id="lane2">
                <option value="" selected disabled hidden>{localStorage.getItem('lane2')}</option>
                <option value="top">top</option>
                <option value="jungle">jungle</option>
                <option value="mid">mid</option>
                <option value="adc">adc</option>
                <option value="support">support</option>
            </select>

    </div>)
    }

}
export default DuoDetails