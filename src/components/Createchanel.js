import React from "react";


class Createchanel extends React.Component{
    constructor(props) {
        super(props);
        this.createChanel=this.createChanel.bind(this)

    }
createChanel(){
        document.getElementById('new-chanel-cont').style.display ='flex';
}
    render() {return(
        <div  onClick={this.createChanel} id='create-chanel'>
            <div>
                New channel
            </div>
            <div id='add-icon'><img src={require('./imgs/Icon ionic-md-add-circle-outline.svg')}/></div>


        </div>
    )
    }

}
export default Createchanel