import React from "react";

class Search extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            search_class:'',

        }
        this.handleClick = this.handleClick.bind(this);
        this.expand=this.expand.bind(this)
    }
    componentDidMount()
    {
        //every time user clicks it checks where user clicked
        document.addEventListener('click', this.handleClick);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick);
    }

    // checks if user clicked outside of the search component. If so the component is closed
    handleClick(e) {
        if (document.getElementById('search').contains(e.target)||document.getElementById('search-result').contains(e.target)) {

        } else {
            document.getElementById('search-result').classList.replace('visible','invisible');
            document.getElementById('create-chanel').style.display='flex';
            this.setState({search_class:''})
        }
    }
    expand()
    {

        if(this.state.search_class==='')
        {
            this.setState({search_class:'selected'})
            document.getElementById('create-chanel').style.display='none'
            document.getElementById('search-result').classList.add('visible')
        }


    }

    render() {

        return(
            <div id='search' className={this.state.search_class} onClick={this.expand}>
                <input onChange={this.props.handleChange} onKeyUp={this.props.searchCall} type="text"/>
                <div id='search-icon'>
                    <img src={require('../imgs/Icon feather-search.svg')}/>
                </div>
            </div>
        )
    }

}

export default Search