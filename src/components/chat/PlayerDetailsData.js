import React from "react";
import PlayerData from "./PlayerData";
import PlayerGamesList from "./PlayerGamesList";



class PlayerDetailsData extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(<div id='Player_Details_Data'>
                <div id='Player_Details_Header'>
                    <img src={require('../imgs/Icon ionic-ios-close-circle-outline.svg')} style={{'margin-right':'10px'}}/>
                </div>
                    <PlayerData riot_data={this.props.riot_data} player_info={this.props.player_info}/>
                    <PlayerGamesList matches={this.props.matches} riot_data={this.props.riot_data}/>

            </div>)
    }

}
export default PlayerDetailsData