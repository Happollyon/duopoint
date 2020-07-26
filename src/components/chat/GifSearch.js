import React from "react";

class GifSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state=
            {

        }

    }

  componentDidMount() {
        document.getElementById('giff-search').style.display='none'
  }





    render() {

        return(
        <div id='giff-search' className={this.props.giff_class}>

            <div id="giff-search-cont" className={this.props.giff_class}>
                    <div id="giff-search-close"><div onClick={this.props.close}><img src={require('../imgs/Icon ionic-ios-close-circle-outline.svg')}/></div></div>
                    <div id='giff-search-headding'>
                        <div id="giff-toggle-cont"  onClick={this.props.changeType} >
                            <span>sticker</span>
                            <div id='giff-toggle'>
                                <div id="giff-toggle-circle"></div>
                            </div>
                            <span>giff</span>
                        </div>

                        <div id='giff-search-input'>
                            <input name='gif_search' onChange={this.props.handleChange} onKeyUp={this.props.giffCall} type='text'/>
                        </div>
                    </div>
                    <div id="giff-search-results" onScroll={this.props.scroll}>
                        {this.props.giff.map((giff,index)=>{return<img onClick={()=>this.props.selectGiff(index)} key={index} className='giff' src={giff.images.original.url}/>})}
                    </div>
            </div>
        </div>
    )
    }

}
export default GifSearch