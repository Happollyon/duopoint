import React from "react";

class Search extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            search_class:'',

        }

        this.expand=this.expand.bind(this)
    }

    expand()
    {

        if(this.state.search_class==='')
        {
            this.setState({search_class:'selected'})
            document.getElementById('create-chanel').style.display='none'
            document.getElementById('search-result').style.background='rgba(250, 250, 250, 0.32)'
        }


    }
    render() {
        if(this.state.search_class!=='')
        {
            window.addEventListener('click', function(e){
                if (document.getElementById('search').contains(e.target)||document.getElementById('search-result').contains(e.target))
                {
                    // Clicked in box
                } else{
                    document.getElementById('search-result').style.background='transparent';
                    document.getElementById('create-chanel').style.display='flex';
                    this.setState({search_class:''})
                }
            }.bind(this));
        }

        return(
            <div id='search' className={this.state.search_class} onClick={this.expand}>
                <input onChange={this.props.handleChange} onKeyUp={this.props.searchCall} type="text"/>
                <div id='search-icon'>
                    <img src={require('./imgs/Icon feather-search.svg')}/>
                </div>
            </div>
        )
    }

}

export default Search