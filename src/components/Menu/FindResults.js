import React from "react";
import FindBtn from "./FindBtn";
import DuoDetails from "./DuoDetails";
import DuoFound from "./DuoFound";
class FindResults extends React.Component{
    constructor(props) {
        super(props);

    }
render() {return(
    <div id='find-results' className={this.props.find_results_class} >
        <FindBtn findDuo={this.props.findDuo}/>
        <DuoDetails handleChange={this.props.handleChange}/>
        <DuoFound addChanel={this.props.addChanel} duo_result={this.props.duo_result}  />
    </div>
)
}

}
export default FindResults