import React from 'react';
import './App.css';
import Landing from "./components/landing/Landing";
import Homepage from "./components/menu_homepage/Homepage";

import {
  BrowserRouter as Router,
  Switch,
  Route,browserHistory,withRouter,
  Link,Redirect
} from "react-router-dom";


class App extends React.Component{

    constructor(props)
    {super(props);
        this.state={
            username:'',
            user_data:'',
            password:'',
            conf_psw:'',
            logged:'',
            msg:''
        }

        this.register_call=this.register_call.bind(this)
        this.login_call=this.login_call.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.logout=this.logout.bind(this)
        this.keepLogged=this.keepLogged.bind(this)
    }


    register_call()
    {
        let url2= "/backend/register/" +this.state.username +"/"+this.state.password
        fetch(url2,{method:'POST'}).then(
            response=>{
                if(response.status ===200)
                {   response.json().then(
                    response=>
                    {
                        this.setState({
                            msg:response.msg,
                            user_data:response.user_data,
                            logged:'true'
                        })
                        console.log(React.version);
                        localStorage.setItem('logged',response.logged)
                        localStorage.setItem('username',this.state.user_data.map(result=>{return   result.username}))
                        localStorage.setItem('url',this.state.user_data.map(result=>{return   result.url}))
                        localStorage.setItem('user_id',this.state.user_data.map(result=>{return result.id}))
                        localStorage.setItem('description',this.state.user_data.map(result=>{return result.description}))
                        localStorage.setItem('duo',this.state.user_data.map(result=>{return result.duo}))
                        localStorage.setItem('elo',this.state.user_data.map(result=>{return result.elo}))
                        localStorage.setItem('lane1',this.state.user_data.map(result=>{return result.lane1}))
                        localStorage.setItem('lane2',this.state.user_data.map(result=>{return result.lane2}))

                        // reloads the page after data has been updated
                        document.location.reload(true)


                      })
                }else{
                    this.setState({msg:'try again'})
                }
            })
    }


    login_call(){
        let url ="/backend/login/" + this.state.username+"/"+this.state.password
        fetch(url, {method:'POST'}).then(response=>{
            if(response.status===200){
                response.json().then(response=>{

                    this.setState({
                        msg:response.msg,
                        user_data:response.user_data,
                        logged:'true'
                    })
                    console.log(React.version);
                    localStorage.setItem('logged',response.logged)
                    localStorage.setItem('username',this.state.user_data.map(result=>{return   result.username}))
                    localStorage.setItem('url',this.state.user_data.map(result=>{return   result.url}))
                    localStorage.setItem('user_id',this.state.user_data.map(result=>{return result.id}))
                    localStorage.setItem('description',this.state.user_data.map(result=>{return result.description}))
                    localStorage.setItem('duo',this.state.user_data.map(result=>{return result.duo}))
                    localStorage.setItem('elo',this.state.user_data.map(result=>{return result.elo}))
                    localStorage.setItem('lane1',this.state.user_data.map(result=>{return result.lane1}))
                    localStorage.setItem('lane2',this.state.user_data.map(result=>{return result.lane2}))

                    // reloads the page after data has been updated
                    document.location.reload(true)
                })

            }else{
                this.setState({msg:'something went wrong. Try again'})
            }
        })
    }

    componentWillMount()
    {
        return this.keepLogged()
    }

    handleChange(event)
    {
        var name = event.target.name
        this.setState({[name]:event.target.value})
    }
    keepLogged()
    {
        this.setState({logged:localStorage.getItem('logged')})
    }
    logout()
    {
        localStorage.setItem('username','')
        localStorage.setItem('url','')
        localStorage.setItem('logged','')
        localStorage.setItem('user_id','')
        this.setState({msg:'',logged:''})
    }


    render() {


        return (
            <div id="App">
                <Router>
                    <Switch>

                        <Route exact path="/" render={()=>
                        {

                            if(localStorage.getItem('logged'))
                            {

                            return <Redirect to="/homepage"/>
                        }
                            else{
                               return <Landing  conf_psw={this.state.psw} password={this.state.password} conf_psw={this.state.conf_psw} login_call={this.login_call} register_call={this.register_call} msg={this.state.msg} handleChange={this.handleChange}/>}

                        }}>

                        </Route>

                        <Route  exact  path="/homepage" render={()=>{
                            if(this.state.logged!=='true')
                            {
                                return <Redirect to='/'/>
                            }else{
                                return <Homepage keepLogged={this.keepLogged} logout={this.logout} user_data={this.state.user_data}/>
                            }
                        }}>

                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
