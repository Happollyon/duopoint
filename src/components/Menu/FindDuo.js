import React from "react";
import FindResults from "./FindResults";

class FindDuo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            find_elo:'',
            find_lane1:'',
            find_lane2:'',
            duo_result:[]
        }
        this.findDuo=this.findDuo.bind(this)
        this.addfriend=this.addfriend.bind(this)
        this.handleChange=this.handleChange.bind(this)

    }
    componentDidMount() {
        this.setState({find_elo:localStorage.getItem('elo'),find_lane1:localStorage.getItem('lane1'),find_lane2:localStorage.getItem('lane2')})
    }



    handleChange(event)
    {
        let name = event.target.name
        this.setState({[name]:event.target.value})
    }addfriend(index)
    {
        if(this.props.id===localStorage.getItem('user_id'))
        {
            return
        }
        else {
            console.log('test')
            console.log(this.props.search_user_results)
            let url='/backend/addfriend/' + this.state.duo_result[index].id + '/' + localStorage.getItem('user_id')
            fetch(url,{method:'POST'}).then(response=>{
                if(response.status===200)
                {
                    alert('done')
                    this.props.resetList()
                }
            })
        }

    }
    findDuo()
    {
        let url='/backend/findduo/'+this.state.find_elo+'/'+this.state.find_lane1+'/'+this.state.find_lane2+'/'+localStorage.getItem('username')
        fetch(url,{method:'POST'}).then(response=>{if(response.status===200)
        {
            response.json().then(response=>{
                this.setState({duo_result:response.duo_result})
            })
        }})
    }
    render() {return(
        <div id="Find_duo">
            <FindResults addChanel={this.addfriend}duo_result={this.state.duo_result} handleChange={this.handleChange} findDuo={this.findDuo}/>
        </div>
    )
    }


}
export default FindDuo