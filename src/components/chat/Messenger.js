import React from "react";
import io from "socket.io-client";


const number=10;
//


var socket= io('https://duopointapi.herokuapp.com/')

class Messenger extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            msg:'',
            src:''
        }

        this.sendMsg=this.sendMsg.bind(this)
        this.handleText=this.handleText.bind(this)
        this.keyDown = this.keyDown.bind(this)
        this.uploadfile = this.uploadfile.bind(this)
        this.loadimg=this.loadimg.bind(this)

    }

    // sends msg when user presses enter
    keyDown(evet)
    {
     if(evet.key==='Enter')
         {

            this.sendMsg()

         }
    }

    loadimg(event)
    {
        var image = document.getElementById('file-input-msg');
        image.src = URL.createObjectURL(event.target.files[0])
        this.setState({src:image.src})
    }

    //function to send msg
    sendMsg()
    {   var msg_socket
        var giff_url

        // if there is no picture this function is called
        if(document.getElementById('file-input-msg').files.length===0)
        {
            //if it is a private msg or not
            if(this.props.private_text_selected==='yes')
            {msg_socket='pvt_msg'

            }else{
                msg_socket='msg'
            }

            // checks if user is sending giff or only txt
            if(this.props.selected_giff===null)
            {
                giff_url='none'
            }
            else{
               giff_url=this.props.selected_giff
            }

            // emmits to server
            socket.emit(msg_socket,{'id': this.props.id,'msg':this.state.msg,url:'none',giff_url:giff_url,'user_id':localStorage.getItem('user_id')})

            // clears the mesenger input, selected giff and msg
            document.getElementById('input').value=''
            this.setState({msg:''})
            this.props.clear_selectedGiff()

        }

        //if there is a picture this function is called
        else
            {
                //if it is a private msg or not
                if(this.props.private_text_selected==='yes')
                {
                    msg_socket='pvt_msg'
                }else{
                    msg_socket='msg'
                }

                var files = document.getElementById("file-input-msg").files;
                var file = files[0]
                let url = '/uploadimage/'+file.name+'/'+file.type

                //gets data from backend
                fetch(url, {
                    method: 'POST',
                }).then(response=>{

                    //if data is received

                    if(response.status===200){
                    response.json().then(response=>{
                        alert('back from db')
                        //uploads file to s3 if all good emits to database

                        if(this.uploadfile(file,response.data))
                        {  alert('file uploaded')
                            let image_url = 'https://duopoint-midia.s3-eu-west-1.amazonaws.com/'+file.name
                            socket.emit(msg_socket,{'id': this.props.id,'msg':this.state.msg,url:image_url,'user_id':localStorage.getItem('user_id')})
                            alert('emmited')
                            document.getElementById('input').value=''
                            document.getElementById('file-input-msg').value=''
                        }else{
                            alert('nope')
                        }

                    })
                }})


             }

    }


    uploadfile(file,s3Data)
    {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", s3Data.url);

        var postData = new FormData();
        for(let key in s3Data.fields){
            postData.append(key, s3Data.fields[key]);
        }
        postData.append('file', file);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if(xhr.status === 200 || xhr.status === 204){
                    alert('uploaded')
                }
                else{
                    alert("Could not upload file.");
                    return false
                }
            }
        };
        xhr.send(postData);
        return true
    }

    handleText(event)
    {
        this.setState({msg:event.target.value})
    }





    render() {


        return (
            <div id='messenger-cont'>

                <div id='messenger'>
                    <input id='input' type='text'  onKeyDown={this.keyDown} onChange={this.handleText} autoComplete='off'/>
                    <div>
                        <img src={this.props.selected_giff} />
                        <img src={this.state.src}/>
                    </div>
                <div>
                    <div onClick={this.sendMsg}><img src={require('../imgs/Icon feather-send.svg')}/></div>

                    <div onClick={this.props.opengiff}><img src={require('../imgs/Icon material-gif.svg')}/></div>


                    <div>
                        <label className='add_img_msg' >
                        <input onChange={this.loadimg} id='file-input-msg' type="file"/>
                        <div className='icon-cont-msg'>
                            <img src={require('../imgs/Icon material-add-a-photo.svg')}/>
                        </div>
                    </label></div>
                </div>
                </div>
            </div>
        );
    }
}

export default Messenger