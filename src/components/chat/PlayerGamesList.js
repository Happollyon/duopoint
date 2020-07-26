import React from "react";
import Game from "./Game";

class PlayerGamesList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            champs:{},
            spells:{},
            runes:{},
            second_runes:{}
        }
        this.get_champs = this.get_champs.bind(this)
    }
    componentWillMount() {
        this.get_champs()

    }

    get_champs(){
        fetch('https://ddragon.leagueoflegends.com/cdn/10.14.1/data/en_US/runesReforged.json',{method:'GET'}).then(response=>{
            if(response.status===200)
            {var runes={}
                var second_runes = {}
                response.json().then(response=>{

                 response.map(main_rune=>{
                     let second_rune_id= main_rune.id
                     let second_rune_icon = 'http://ddragon.leagueoflegends.com/cdn/img/'+main_rune.icon
                      second_runes[second_rune_id]=second_rune_icon
                     main_rune.slots[0].runes.map(rune=>{
                         let rune_id= rune.id
                         let rune_icon = 'http://ddragon.leagueoflegends.com/cdn/img/'+rune.icon
                         runes[rune_id] = rune_icon
                     })
                 })

                })
            }
            this.setState({runes:runes,second_runes:second_runes})
        })
        fetch('https://ddragon.leagueoflegends.com/cdn/10.15.1/data/en_US/summoner.json',{method:'GET'}).then(response=>{
                if(response.status===200)
            {   var spells={}
                response.json().then(response=>{
                    var spell_data = response.data
                    Object.keys(spell_data).map(spell=>{
                        let spell_id=spell_data[spell].key
                        let spell_url = 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/'+spell_data[spell].id+'.png'
                        spells[spell_id]=spell_url
                    })

                })
            }
                this.setState({spells:spells})
        })
        fetch('https://ddragon.leagueoflegends.com/cdn/10.14.1/data/en_US/champion.json',{method:'GET'}).then(response=>{
            if(response.status===200)
            {
                var champs={}
                response.json().then(response=>
                { var data = response.data
                  Object.keys(data).map((champ,key)=>{
                      let champ_id = data[champ].key

                      let champ_name = 'http://ddragon.leagueoflegends.com/cdn/10.14.1/img/champion/'+data[champ].name.replace(/\s+/g, '')+'.png'

                      champs[champ_id]=champ_name


                    })
                })
               this.setState({champs:champs})

            }else {

            }

        })


   }
    render() {
        return (
            <div id='Player_Games_List'>
                {this.props.matches.map((data,key)=><Game second_runes={this.state.second_runes} runes={this.state.runes}spells={this.state.spells} champs={this.state.champs} riot_data={this.props.riot_data} key={key} data={data} />)}
            </div>
        );
    }
}
export default PlayerGamesList