import React from "react";

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            user_msg:'',
            psw_msg:'',
            conf_psw_msg:'',
            form_heading:'shift-left',
            register_class:'visible',
            login_class:'invisible'
        }
        this.submit_call=this.submit_call.bind(this)
        this.match_psw=this.match_psw.bind(this)
        this.keyDown=this.keyDown.bind(this)
        this.keyDown_register=this.keyDown_register.bind(this)
    }
    keyDown(event) {
        if (event.key === 'Enter') {
            return this.props.login_call()

        }
    }

    keyDown_register(event) {
        if (event.key === 'Enter') {
            return this.props.register_call()

        }
    }
    submit_call(){

        if (this.state.form_heading==='shift-left'){
            this.props.register_call()

        }
        else if(this.state.form_heading==='shift-right') {

            this.props.login_call()
        }
    }
    match_psw()
    {
        if(this.props.conf_psw!==this.props.password && this.props.conf_psw !== '')
        {
            this.setState({conf_psw_msg:'passwords don`t match.'})
        }else{
            this.setState({conf_psw_msg:''})
        }
    }

    render() {



        return(
        <div id='form'>
            <div id="form-heading"className={this.state.form_heading}></div>
                <div id='form-heading-options'>

                    <div onClick={()=>this.setState({form_heading:'shift-left',login_class:'invisible',register_class:'visible'})}> REGISTER </div>
                    <div onClick={()=>this.setState({form_heading:'shift-right',login_class:'visible_right',register_class:'invisible'})} > LOGIN </div>

                </div>
            <div id="input-container" className={this.state.register_class}>

                <div>
                <div>
                    <input type='text' placeholder='USERNAME' autoComplete='off' name='username' onChange={this.props.handleChange}/>
                    <div id='input-icon-username' >
                        <img src={this.state.user_msg?require('./imgs/Attention.svg'):require('./imgs/Profile – 2.svg')}/>
                    </div>

                </div>
                <span>{this.state.user_msg}</span>
                </div>
                <div>
                <div>
                    <input type='password' placeholder='********' autoComplete='off' name='password' onChange={this.props.handleChange}/>
                    <div id='input-icon-username' >
                        <img src={this.state.psw_msg?require('./imgs/Attention.svg'):require('./imgs/Icon ionic-md-keypad.svg')}/>
                    </div>

                </div>

                <span>{this.state.psw_msg}</span>
                </div>
                <div>
                <div>
                    <input name='conf_psw' on onKeyDown={this.keyDown_register} onKeyUp={this.match_psw} onChange={this.props.handleChange} type='password' placeholder='********' autoComplete='off'/>
                    <div id='input-icon-username' >
                        <img src={this.state.conf_psw_msg?require('./imgs/Attention.svg'):require('./imgs/Icon ionic-md-keypad.svg')}/>
                    </div>

                </div>
                <span>{this.state.conf_psw_msg}</span>
                </div>

            </div>

            <div id="input-container-login" className={this.state.login_class}>

                <div>
                    <div>
                        <input type='text' placeholder='USERNAME' autoComplete='off' name='username' onChange={this.props.handleChange}/>
                        <div id='input-icon-username' >
                            <img src={this.state.user_msg?require('./imgs/Attention.svg'):require('./imgs/Profile – 2.svg')}/>
                        </div>

                    </div>
                    <span>{this.state.user_msg}</span>
                </div>
                <div>
                    <div>
                        <input type='password' onKeyDown={this.keyDown} placeholder='********' name='password' onChange={this.props.handleChange} autoComplete='off'/>
                        <div id='input-icon-username' >
                            <img src={this.state.psw_msg?require('./imgs/Attention.svg'):require('./imgs/Icon ionic-md-keypad.svg')}/>
                        </div>

                    </div>

                    <span>{this.state.psw_msg}</span>
                </div>


            </div>

            <div id='submit-bt-cont'>
                <div id='submit-bt' onClick={this.submit_call}>
                    <img src={require('./imgs/Path 10.svg')}/>
                </div>
                <span>{this.props.msg}</span>
            </div>


        </div>
    )
    }


}
export default Form
