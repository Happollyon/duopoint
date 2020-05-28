import React from "react";
import Createchanel from "./Createchanel";
import Search from "./Search";
import Search_result from "./Search_result";
class Channel extends React.Component
{constructor(props) {
    super(props);
    this.state={
        search:'',
        search_results:[],
        search_user_results:[],
    }
    this.handleChange=this.handleChange.bind(this)
    this.search=this.search.bind(this)
}
    handleChange(event)
    {
        this.setState({search:event.target.value})
    }
    search(){
        let url='/search/'+ this.state.search
        fetch(url,{method:'POST'}).then(response=>{ if(response.status===200)
            {
                response.json().then(response=>{
                    console.log(response.search_results)
                    this.setState({search_results:response.search_results,search_user_results:response.search_user_results})
                })
            }}

        )
        if(this.state.search==='')
        {
            this.setState({search_results:[]})
        }
    }
render() {
    return(
        <div id='chanel-search-cont'>
        <div id="chanel-search">
            <Createchanel resetList={this.props.resetList}/>
            <Search handleChange={this.handleChange}searchCall={this.search}/>

        </div>
        <Search_result search_user_results={this.state.search_user_results} resetList={this.props.resetList} search_results={this.state.search_results}/>

    </div>
)
}
}

export default Channel