import React from 'react';
import './App.css';
import Landing from "./components/Landing";
import Homepage from "./components/Homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
        let url2= "/register/" +this.state.username +"/"+this.state.password
        fetch(url2,{method:'POST'}).then(
            response=>{
                if(response.status ===200)
                {   response.json().then(
                    response=>{
                         this.setState({logged:response.logged})
                         this.setState({msg:response.msg})}
                      )
                }else{
                    this.setState({msg:'try again'})
                }
            })
    }

    login_call(){
        let url ="/login/" + this.state.username+"/"+this.state.password
        fetch(url, {method:'POST'}).then(response=>{
            if(response.status===200){
                response.json().then(response=>{

                    this.setState({
                        msg:response.msg,
                        user_data:response.user_data
                    })
                    localStorage.setItem('logged',response.logged)
                    localStorage.setItem('username',this.state.user_data.map(result=>{return   result.username}))
                    localStorage.setItem('url',this.state.user_data.map(result=>{return   result.url}))
                    localStorage.setItem('user_id',this.state.user_data.map(result=>{return result.id}))
                    this.setState({logged:localStorage.getItem('logged')})

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
                            if(this.state.logged==='true'){
                            return <Redirect to="/homepage"/>
                        }
                            else{
                               return <Landing  conf_psw={this.state.psw} password={this.state.password} conf_psw={this.state.conf_psw} login_call={this.login_call} register_call={this.register_call} msg={this.state.msg} handleChange={this.handleChange}/>}

                        }}>

                        </Route>

                        <Route path="/homepage" render={()=>{
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
