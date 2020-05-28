import React from "react";
import Chanel_item from "./Chanel_item";
class Search_result extends React.Component{
    constructor(props) {
        super(props);
        this.addChanel=this.addChanel.bind(this)
        this.addfriend=this.addfriend.bind(this)

    }

    addChanel(index)
    {
        let url='/addchanel/' + this.props.search_results[index].id + '/' + localStorage.getItem('user_id')
        fetch(url,{method:'POST'}).then(response=>{
            if(response.status===200)
            {
                alert(1)
                this.props.resetList()
            }
        })

    }

    addfriend(index)
    {
        if(this.props.id===localStorage.getItem('user_id'))
        {
            return
        }
        else {
            console.log('test')
            console.log(this.props.search_user_results)
            let url='/addfriend/' + this.props.search_user_results[index].id + '/' + localStorage.getItem('user_id')
            fetch(url,{method:'POST'}).then(response=>{
                if(response.status===200)
                {
                    this.props.resetList()
                }
            })
        }

    }
    render() {
        return(
        <div id='search-result'>
            {this.props.search_results.map((chanel,index)=><Chanel_item index={index}addChanel={this.addChanel}resetList={this.props.resetList}id={chanel.id}url={chanel.url} name={chanel.name}key={index}/>)}
            {this.props.search_user_results.map((chanel,index)=><Chanel_item index={index}addChanel={this.addfriend}resetList={this.props.resetList}id={chanel.id}url={chanel.url} name={chanel.name}key={index}/>)}
        </div>
    )
    }


}
export default Search_result