import React from "react";

class ChangePic extends React.Component{
    constructor(props) {
        super(props);
        this.state=
            {
                src:''
            }
            this.loadimg=this.loadimg.bind(this)
    }

        loadimg(event)
        {
            var image = document.getElementById('file-input-msg');
            image.src = URL.createObjectURL(event.target.files[0])
            this.setState({src:image.src})
        }

    render() {
        return (
            <div id='change_pic_cont'>
                <div id="change_pic" className={this.props.classname}>
                       <div id='change_pic_left_cont'>
                           <img src={require('../imgs/Group 8.svg')}/>
                       </div>
                    <div id='change_pic_right_cont'>
                        <div id='change_pic_close'>
                            <span onClick={ this.props.closepic}>
                                 <img src={require('../imgs/Icon ionic-ios-close-circle-outline.svg')}/>
                            </span>
                        </div>


                        <div id='change_pic_img'>
                            <img src={this.state.src ? this.state.src:localStorage.getItem('url')}/>
                        </div>

                        <label className='add_img' style={{border:'#d9435f 1px solid','background':'#5E66F2'}}>
                             <input onChange={this.loadimg} id='file-input-profile' type="file"/>
                             <span style={{width:'75%','font-weight':'bolder'}}>UPLOAD</span>
                             <div className='icon-cont'>
                                    <img src={require('../imgs/Icon material-add-a-photo.svg')}/>
                             </div>
                        </label>

                       </div>

                </div>

            </div>
        );
    }
}
export default ChangePic