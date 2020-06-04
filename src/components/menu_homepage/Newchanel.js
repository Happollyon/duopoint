import React from "react";

class Newchanel extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:'',
            description:'',
            chanel_msg:'',
            img_name:'image'
        }
        this.close=this.close.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.subimitChannel=this.subimitChannel.bind(this)
        this.uploadfile=this.uploadfile.bind(this)
        this.changeImgN = this.changeImgN.bind(this)
        this.keyDown=this.keyDown.bind(this)

    }

    changeImgN(){
        let files = document.getElementById('file-input').files
        let file = files[0]
        let name = file.name
        this.setState({img_name:name})

    }
    close()
    {
        document.getElementById('new-chanel-cont').style.display='none'
    }

    handleChange(event){
        let name = event.target.name
        this.setState({[name]:event.target.value})
    }

    keyDown(Event){
        if(Event.key==='Enter')
        {
            this.subimitChannel()
        }
    }
    subimitChannel(){

        var files = document.getElementById("file-input").files;
        var file = files[0]

        if(file) //if user is uploading image
        {
            let url = '/uploadimage/'+file.name+'/'+file.type
            fetch(url, {
                method: 'POST',
            }).then(response=>{if(response.status===200)
            {
                response.json().then(response=>
                {

                // calls function to upload file to S3

                if(this.uploadfile(file,response.data))// if image is uploaded
                {
                    let image_url = 'https://duopoint-midia.s3-eu-west-1.amazonaws.com/'+file.name

                    let username = localStorage.getItem('username')
                    if(!this.state.description)
                    {
                        var description ='...'
                    }else{
                        var description= this.state.description
                    }
                    let url = '/createchanel/'+this.state.name+'/'+ description+'/'+username +'/'+ image_url
                    fetch(url,{method:'POST'}).then(
                        response=>{
                            if(response.status===200)  // if response is 200
                            {
                                response.json().then
                                ( response =>
                                    {   this.setState({chanel_msg:response.chanel_msg})
                                        if(this.state.chanel_msg==='chanel_created')
                                        {
                                            this.close()
                                            return this.props.resetList()
                                        }

                                    }

                                )
                            }else
                            {
                                alert('error in server')  //if there is an error in the server
                            }
                        }
                    )
                }
                })

            }else{alert('nope')}
            })

        }

        if(!file)
        {
            let image_url ='https://duopoint-midia.s3-eu-west-1.amazonaws.com/images.png'

            let username = localStorage.getItem('username')
            if(!this.state.description)
            {
                var description ='...'
            }else{
                var description= this.state.description
            }
            let url = '/createchanel/'+this.state.name+'/'+ description+'/'+username +'/'+ image_url
            fetch(url,{method:'POST'}).then(response=>{
                if (response.status===200)
                {
                     response.json().then(response=>{
                         this.setState({chanel_msg:response.chanel_msg})
                         if(this.state.chanel_msg==='chanel_created')
                         {
                             this.close()
                             return this.props.resetList()
                         }


                 })
                }
            })
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

        render(){
    return(
        <div id='new-chanel-cont'>
            <div id='new-chanel'>
                <div id='name-close'>
                    <div></div>
                    <span>New Channel<span style={{'color':'#fafafa','font-weight':'bold'}}>{this.state.chanel_msg}</span></span>
                    <div id='close' onClick={this.close}><img src={require('../imgs/Icon ionic-ios-close-circle-outline.svg')}/></div>
                </div>
            <div id='new-chanel-inputs-cont'>
                <div id='name-and-img'>
                    <div className='add-img'>
                        <input type='text' onKeyDown={this.keyDown} autoComplete='off' name='name' onChange={this.handleChange} placeholder='Name'/>
                        <div className='icon-cont'>
                             <img src={require('../imgs/Icon open-pencil.svg')}/>
                        </div>
                    </div>

                        <label className='add-img' style={{border:'#d9435f 1px solid'}}>
                            <input onChange={this.changeImgN} id='file-input' type="file"/>
                            <span style={{width:'75%'}}>{this.state.img_name}</span>
                            <div className='icon-cont'>
                            <img src={require('../imgs/Icon material-add-a-photo.svg')}/>
                            </div>
                        </label>


                </div>
                <div id='chanel-desc'>
                    <input onKeyDown={this.keyDown} onChange={this.handleChange} name='description' type='text' placeholder='Description'/>
                </div>

            </div>
            <div id='create-btn' onClick={this.subimitChannel}>
                <div >
                    CREATE
                </div>
            </div>
            </div>
        </div>)
    }
}

export default Newchanel