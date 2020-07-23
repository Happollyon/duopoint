import React from "react";
import Game from "./Game";

class PlayerGamesList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            champs:{},
            spells:{}
        }
        this.get_champs = this.get_champs.bind(this)
    }
    componentWillMount() {
        this.get_champs()

    }

    get_champs(){

        fetch('http://localhost:3000/spell.json',{method:'GET'}).then(response=>{
                if(response.status===200)
            {   var spells={}
                response.json().then(response=>{
                    var spell_data = response
                    Object.keys(spell_data).map(spell=>{
                        let spell_id=spell_data[spell].key
                        let spell_url = spell_data[spell].icon
                        spells[spell_id]=spell_url
                    })

                })
            }
                this.setState({spells:spells})
        })
        fetch('http://ddragon.leagueoflegends.com/cdn/10.14.1/data/en_US/champion.json',{method:'GET'}).then(response=>{
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
                {this.props.matches.map((data,key)=><Game spells={this.state.spells} champs={this.state.champs} riot_data={this.props.riot_data} key={key} data={data} />)}
            </div>
        );
    }
}
export default PlayerGamesList