import React from "react";

class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
                details:[],
                player:{},
                stats:{},
                kill:'',
                duration:'',
                players_name:[],
                players_champ:[]


        }

    this.detailed_match=this.detailed_match.bind(this)
    }

    componentDidMount()  {
        this.detailed_match(this.props.data.gameId)
    }

    detailed_match(matchId)
    {
     let url= '/backend/detailed_match/'+matchId
      fetch(url,{method:'POST'}).then(response =>{if (response.status===200)
      {

          response.json().then(response=>{

              this.setState({details:response.details})

              var players_champs={}
              var players_name={}

             response.details.participants.map((player,index)=>{
                 let player_champ = player['championId']
                 let player_index = 'player'+index
                 players_champs[player_index] = player_champ

             })

              response.details.participantIdentities.map((player,index)=>{
                  let player_name= player['player']['summonerName']
                  let player_index = 'player'+index
                  players_name[player_index] = player_name
              })
              this.setState({players_name:players_name})
              this.setState({players_champ:players_champs})

              let time = response.details.gameDuration
              time = time/60
              time = time.toString()
              time  =time.substring(0,time.indexOf('.'))
              this.setState({duration:time})

              response.details.participantIdentities.map(data=>{

                  if(data.player.accountId === this.props.riot_data.accountId)
                  {
                        this.setState({player:response.details.participants[data.participantId - 1]})
                        this.setState({stats:response.details.participants[data.participantId - 1].stats})
                        switch (response.details.participants[data.participantId - 1].stats.largestMultiKill)
                        {
                            case 1:
                                this.setState({kill:'----'})
                                break;
                            case 2:
                                this.setState({kill:'Double Kill'})
                                break;
                            case 3:
                                this.setState({kill:'Penta Kill'})
                                break;
                            case 4:
                                this.setState({kill:'Quadra kill'})
                                break;
                            case 5:
                                this.setState({kill:'Penta Kill'})
                                break;
                            default:
                                this.setState({kill:'---'})
                        }

                  }
              })

          })
      }else{

      }})


    }


    render() {return(
        <div id='game' style={this.state.stats.win===false?{"background":"#FF6985"}:{"background":"#72F2BC"}}>
            <div id='champion'>
               <div id='spells'>
                   <img src={this.props.champs[this.props.data.champion]}/>
                   <span>
                    <img src={this.props.spells[this.state.player.spell1Id]}/>
                    <img src={this.props.spells[this.state.player.spell2Id]}/>
                   </span>
               </div>
                <div id='runnes'>
                    <img src={this.props.spells[this.state.player.spell1Id]}/>
                    <img src={require('../imgs/teemo.jpg')}/>
                </div>
            </div>
            <span className='divider'></span>
            <div id='game_stats'>
                <div id='game_stats_details'>
                    <span>{this.state.duration}min</span>
                    <span>{this.state.stats.totalMinionsKilled} cs</span>
                    <span>{this.state.stats.wardsPlaced} wards</span>
                </div>
                <div id='map'>
                    {this.state.details.gameMode}
                </div>
                <div id='kill'>
                    {this.state.kill}
                </div>
            </div>
            <span className='divider'></span>


            <div id='items'>
                <div>
                    <span><img  src={'http://ddragon.leagueoflegends.com/cdn/10.14.1/img/item/'+this.state.stats.item0+'.png'}  style={this.state.stats.item0 ===0?{'width':'0px'}:null}/></span>
                    <span><img src={'http://ddragon.leagueoflegends.com/cdn/10.14.1/img/item/'+this.state.stats.item1+'.png'}  style={this.state.stats.item1 ===0?{'width':'0px'}:null}/></span>
                    <span><img src={'http://ddragon.leagueoflegends.com/cdn/10.14.1/img/item/'+this.state.stats.item2+'.png'}  style={this.state.stats.item2 ===0?{'width':'0px'}:null}/></span>
                </div>
                <div>
                    <span><img src={'http://ddragon.leagueoflegends.com/cdn/10.14.1/img/item/'+this.state.stats.item3+'.png'}  style={this.state.stats.item3 ===0?{'width':'0px'}:null}/></span>
                    <span><img src={'http://ddragon.leagueoflegends.com/cdn/10.14.1/img/item/'+this.state.stats.item4+'.png'}  style={this.state.stats.item4 ===0?{'width':'0px'}:null}/></span>
                    <span><img src={'http://ddragon.leagueoflegends.com/cdn/10.14.1/img/item/'+this.state.stats.item5+'.png'} style={this.state.stats.item5===0?{'width':'0px'}:null}/></span>
                </div>
            </div>


            <div id='teams'>

                <div>
                    <div>

                       <span><img src={this.props.champs[this.state.players_champ.player0]}/></span>
                        <div>{this.state.players_name.player0}</div>

                    </div>
                    <div>
                       <span><img src={this.props.champs[this.state.players_champ.player1]}/></span>
                        <div>{this.state.players_name.player1}</div>

                    </div>
                    <div>
                        <span><img src={this.props.champs[this.state.players_champ.player2]}/></span>
                       <div> {this.state.players_name.player2}</div>
                    </div>
                    <div>
                     <span><img src={this.props.champs[this.state.players_champ.player3]}/></span>
                       <div> {this.state.players_name.player3}</div>
                    </div>
                    <div>
                      <span><img src={this.props.champs[this.state.players_champ.player4]}/></span>
                        <div>{this.state.players_name.player4}</div>
                    </div>
                </div>


                <div>
                    <div>

                       <span><img src={this.props.champs[this.state.players_champ.player5]}/></span>
                        {this.state.players_name.player5}
                    </div>
                    <div>
                       <span><img src={this.props.champs[this.state.players_champ.player6]}/></span>
                        {this.state.players_name.player6}

                    </div>
                    <div>
                        <span><img src={this.props.champs[this.state.players_champ.player7]}/></span>
                        {this.state.players_name.player7}
                    </div>
                    <div>
                     <span><img src={this.props.champs[this.state.players_champ.player8]}/></span>
                        {this.state.players_name.player8}
                    </div>
                    <div>
                      <span><img src={this.props.champs[this.state.players_champ.player9]}/></span>
                        {this.state.players_name.player9}
                    </div>
                </div>
            </div>
        </div>
    )
    }

}
export default Game