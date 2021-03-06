import React from "react";
import Title from "./Title";
import Messenges from "./Messenges";
import Messenger from "./Messenger";
import GifSearch from "./GifSearch";
import MenuTab from "./MenuTab";
import PlayerDetails from "./PlayerDetails";






class Chat extends React.Component{
    constructor(props) {
        super(props);
        this.state=
            {
                msg_body:[],
                chanel_id:'',
                giff:[],
                type:'stickers',
                offset:0,
                gif_search:'league of legends',
                giff_class:'',
                selected_giff:'',


             }

        this.giffCall=this.giffCall.bind(this)
        this.handleChange =  this.handleChange.bind(this)
        this.scroll=this.scroll.bind(this)
        this.selectGiff=this.selectGiff.bind(this)
        this.clear_selectedGiff = this.clear_selectedGiff.bind(this)
        this.changeType=this.changeType.bind(this)
        this.opengiff= this.opengiff.bind(this)
        this.close=this.close.bind(this)
        this.menu_tab_mobile=this.menu_tab_mobile.bind(this)

    }

    menu_tab_mobile()
    {   let menu = document.getElementById('menu')
        if(menu.style.display==='none')
        {
            menu.style.display='flex'
        }else
        {
            menu.style.display='none'
        }

    }
    componentDidMount()
    {
        this.giffCall()
        if(this.state.type==='gif')
        {
            document.getElementById('giff-toggle').style.justifyContent='flex-start'
        }
    }

    handleChange(event)
    {
        let name = event.target.name
        this.setState({[name]:event.target.value})
        this.setState({giff:[]})
    }
    scroll(event)
    {const target = event.target

        if(target.offsetHeight+target.scrollTop>=(target.scrollHeight))
        {

            let offset= this.state.offset
            offset = offset + 25
            this.setState({offset:offset})
            this.giffCall()

        }

    }
    opengiff(){
        document.getElementById('giff-search').style.display='flex'
        this.setState({giff_class:'visible'})

    }
    close()
    {
       this.setState({giff_class:'invisible'})
        setTimeout(()=>{document.getElementById('giff-search').style.display='none'},500)

    }
    changeType()
    {
        if(this.state.type==='gifs')
        {   document.getElementById('giff-toggle').style.justifyContent='flex-start'
            this.setState({type:'stickers'})
            this.setState({giff:[]})
            this.giffCall()


        }else{
            document.getElementById('giff-toggle').style.justifyContent='flex-end'
            this.setState({type:'gifs'})
            this.setState({giff:[]})
            this.giffCall()
        }

    }


    giffCall(){
        let search= encodeURI(this.state.gif_search)
        let type= encodeURI(this.state.type)
        fetch('/v1/'+type+'/search?q='+search+'&api_key=48NW50Y7uuRCv01SltBUCCJiTcCMuCtu&offset='+this.state.offset,{method:'get',Accep: 'application/json'}).then(response=>{

            if(response.status===200)
            {    response.json().then(response=>{
                if(this.state.giff!='')
                {
                    var joined = this.state.giff.concat(response.data);
                    this.setState({ giff: joined })
                }else {
                    this.setState({giff: response.data})

                }

            })


            }
        })
    }
    selectGiff(index)
    {
        this.setState({selected_giff:this.state.giff[index].images.original.url})
    }
    clear_selectedGiff()
    {
        this.setState({selected_giff:''})
    }



    render() {return(
                <div id='chat'>
                     <PlayerDetails loading={this.props.loading} hide={this.props.hide} matches={this.props.matches} riot_data={this.props.riot_data} player_info={this.props.player_info} class={this.props.player_details_class} />
                    <Title name={this.props.channel_selected.name} url={this.props.channel_selected.url}/>
                    <Messenges show_player_details={this.props.show_player_details} private_text_selected={this.props.private_text_selected} msg_feed={this.props.msg_feed} channel_selected={this.props.channel_selected}msg_body={this.state.msg_body}/>
                    <GifSearch close={this.close} giff_class={this.state.giff_class} changeType={this.changeType}handleChange={this.handleChange}  scroll={this.scroll} giffCall={this.giffCall} selectGiff={this.selectGiff} giff={this.state.giff} offset={this.state.offset}/>
                    <Messenger  clear_selectedGiff={this.clear_selectedGiff} opengiff={this.opengiff}selected_giff={this.state.selected_giff}private_text_selected={this.props.private_text_selected} name={this.props.channel_selected.name} id={this.props.channel_selected.id} />
                    <MenuTab menu_tab={this.menu_tab_mobile}/>
                </div>

            )
        }
    }



export default Chat