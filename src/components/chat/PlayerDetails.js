import React from "react";
import PlayerDetailsData from "./PlayerDetailsData";

class PlayerDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state =
            {

            }
    }

    render() {
        return(<div id='Player_Details_Cont' className={this.props.class}>
        <PlayerDetailsData matches={this.props.matches} riot_data={this.props.riot_data} player_info={this.props.player_info}/>

        </div>)
    }

}
export default PlayerDetails