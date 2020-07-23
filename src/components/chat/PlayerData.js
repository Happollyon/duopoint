import React from "react";
class PlayerData extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {return(<div id="Player_data">
        <div id='name_and_avatar'>
            <div id='player_avatar'>
                <img src={this.props.player_info.avatar_url}/>
                <span>{this.props.riot_data.level}</span>
            </div>
            <div id='username_and_lanes'>
                 <div id='player_username'>
                     {this.props.player_info.username}
                 </div>
                <div id='player_lanes'>
                    <span>{this.props.player_info.lane1}</span>
                    <span>{this.props.player_info.lane2}</span>
                </div>
            </div>
        </div>

        <div id='player_stats'>
            <div id='player_elo'>
                <span>{this.props.riot_data.tier} {this.props.riot_data.rank}</span>
                <span>{this.props.riot_data.lp} LP</span>
            </div>
            <div id='player_description'>
                <span>
                    {this.props.player_info.description}
                </span>
            </div>
            <div id='win_rate'>
                <span>Win Rate</span>
                <span>{this.props.riot_data.wins}W {this.props.riot_data.losses}L</span>
            </div>
            <div id='text_me_cont'>
            <div id='text_me'>
                <span>TEXT ME</span>
                <img src={require('../imgs/Icon ionic-ios-text.svg')}/>

            </div>
            </div>


        </div>
    </div>)
    }

}
export default PlayerData