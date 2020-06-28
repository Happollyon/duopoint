import React from "react";
import EditProfile from "./EditProfile";
import FindDuo from "./FindDuo";


class Menu_spand extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            duo:'',
            username:'',
            url:'',
            description:'',
            lane1:'',
            lane2:'',
            change_duo:'',
            elo:''
        }

        this.toggle=this.toggle.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.updateCall=this.updateCall.bind(this)
        this.updateCall=this.updateCall.bind(this)
    }
            componentDidMount()
            {
                this.setState({url:localStorage.getItem('url'),username:localStorage.getItem('username'),description:localStorage.getItem('description'),lane1:localStorage.getItem('lane1'),lane2:localStorage.getItem('lane2'),duo:localStorage.getItem('duo'),elo:localStorage.getItem('elo')})
                    if(localStorage.getItem('duo')==='true')
                    {
                        document.getElementById('toggle').style.justifyContent='flex-end'
                    }else
                    {
                        document.getElementById('toggle').style.justifyContent='flex-start'
                    }
            }

            toggle()
            {   if(this.state.duo==='false')
            {
                this.setState({duo:'true'})
                document.getElementById('toggle').style.justifyContent='flex-end'
            }else{
                this.setState({duo:'false'})
                document.getElementById('toggle').style.justifyContent='flex-start'
            }

             }


            handleChange(event)
            {
                let name= event.target.name
                this.setState({[name]:event.target.value})
            }


           updateCall()
           {    let checkimage = document.getElementById("file-input-profile").files;
                  console.log(checkimage)
               console.log(checkimage[0])
                 if(document.getElementById("file-input-profile").files.length===0)
               {   let img_url= localStorage.getItem('url')

                   let url='/backend/update/'+this.state.username+'/'+ this.state.duo+'/'+ this.state.elo+'/'+ this.state.lane1+'/'+ this.state.lane2+'/'+ this.state.description+'/'+localStorage.getItem('username')+'/'+ img_url

                   fetch(url,{method:'POST'}).then(response=> {
                       if (response.status === 200) {

                           response.json().then(response => {
                               alert('all good')
                               localStorage.setItem('username',this.state.username)
                               localStorage.setItem('elo',this.state.elo)
                               localStorage.setItem('lane1',this.state.lane1)
                               localStorage.setItem('lane2',this.state.lane2)
                               localStorage.setItem('url',this.state.url)
                               localStorage.setItem('description',this.state.description)
                               localStorage.setItem('duo',this.state.duo)

                           })
                       } else
                           {
                           alert('nope')
                        }
                   })
           }else{ alert('x')
                   var files = document.getElementById("file-input-profile").files;
                   var file = files[0]
                   if(file) //if user is uploading image
                   {
                       let url = '/backend/uploadimage/'+file.name+'/'+file.type
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

                                   let url='/backend/update/'+this.state.username+'/'+ this.state.duo+'/'+ this.state.elo+'/'+ this.state.lane1+'/'+ this.state.lane2+'/'+ this.state.description+'/'+localStorage.getItem('username')+'/'+ image_url

                                   fetch(url,{method:'POST'}).then(
                                       response=>{
                                           if(response.status===200)  // if response is 200
                                           {   alert('1')
                                               localStorage.setItem('username',this.state.username)
                                               localStorage.setItem('elo',this.state.elo)
                                               localStorage.setItem('lane1',this.state.lane1)
                                               localStorage.setItem('lane2',this.state.lane2)
                                               localStorage.setItem('url',image_url)
                                               localStorage.setItem('description',this.state.description)
                                               localStorage.setItem('duo',this.state.duo)
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

    render() {
            console.log()
        return(

     <div id="menu-spand" className={this.props.class_name}>
         <EditProfile  updateCall={this.updateCall} handleChange={this.handleChange} expand_menu={this.props.expand_menu} openpic={this.props.openpic} duo={this.state.duo} logout={this.props.logout}toggle={this.toggle}/>
         <FindDuo resetList={this.props.resetList}/>

     </div>

        )
 }
}

export default Menu_spand