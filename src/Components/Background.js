import React, { Component } from 'react';
// import Classes from "./Background.module.css"
import classes from './Background.module.css';

export class Background extends Component {

        state={
           
            wallpaper:"https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=freestocks-ebZUZ1MiVnU-unsplash.jpg",
            message:"What do you like to be called?",
            vis:"none",
            vis2:"block",
            vis3:"none",
            vis4:"block",
            vis5:"none",
            line:"none"
        }

        //  this.currentDate=new Date();
        //  hours=currentDate.getHours();
        //  minutes = currentDate.getMinutes();
        //  if(hours >=0 && hours<=9){

        //  }
        gettingTime = setInterval(() => {
            var hours = new Date().getHours();
            var minutes = new Date().getMinutes();
            var seconds = new Date().getSeconds();
            if(hours < 10){
                hours = "0" + hours;
            }
            if(minutes < 10){
                minutes = "0" + minutes;
            }
            if(seconds < 10){
                seconds= "0" + seconds;
            }
            this.setState({time:hours +":" + minutes})
        }, 1000);

        changeWall=setInterval(()=>{
            var hh = new Date().getHours();
            if (hh >= 4 && hh <= 11) {
                       this.setState({wallpaper:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=dawid-zawila--G3rw6Y02D0-unsplash.jpg", sit:" Good Morning"})
                    } else if ( hh >= 12 && hh <= 16) {
                        this.setState({wallpaper:"https://wallpapercave.com/wp/wp2141834.jpg", sit:"Good Afternoon"})
                    } else if ( hh >= 17 && hh <= 20) {
                        this.setState({wallpaper:"https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=freestocks-ebZUZ1MiVnU-unsplash.jpg", sit:"Good Evening"})
                    } else {
                       this.setState({wallpaper:"https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=nathan-anderson-L95xDkSSuWw-unsplash.jpg", sit:"Good Night"})    
                    }
        },1000);


        onupdate=(e)=>{
            if (e.key === 'Enter') {
                e.preventDefault();
                // console.log('do validate');
                this.setState({val:e.target.value,message:"What's your main focus today?",vis:"block",vis2:"none",vis3:"block"})
                console.log(e.target.value)
                localStorage.setItem('name',e.target.value)
                e.target.value='';
               
              }
                
        }
        onupdate2=(e)=>{
            if (e.key === 'Enter') {
                e.preventDefault();
                // console.log('do validate');
                this.setState({val2:e.target.value,vis3:"none",vis1:"none",vis2:"none",vis4:"none",vis5:"block"})
                console.log(e.target.value);
                e.target.value='';
               
              }
                
        }
        onselect=()=>{
            var clk=0;
            
            if(clk%2==1)
            this.setState({line:"line-through"})
            else{
                this.setState({line:"none"})
            }
            clk++;
        }
         
        ondel=()=>{
            this.setState({vis5:"none",vis3:"block",vis4:"block"})
        }


    render() {
        return (
            <div className={classes.main}>
                <h1  className={classes.time}>{this.state.time}</h1>
        <h1 style={{display:this.state.vis}} className={classes.greet}>{this.state.sit+" " + this.state.val}</h1>
                <h2 style={{display:this.state.vis4}} className={classes.message}>{this.state.message}</h2>
                <form ><input style={{display:this.state.vis2}} type="text" onKeyDown={this.onupdate} className={classes.input} />
                <input style={{display:this.state.vis3}} type="text" onKeyDown={this.onupdate2} className={classes.input} /></form>
                <div className={classes.todo} style={{display:this.state.vis5}}>
                    <input  className={classes.tick} onClick={this.onselect} type="checkbox" id="todo" />
                    <label className={classes.lbl} style={{textDecoration:this.state.line}} htmlFor="todo">{this.state.val2}</label>
                    <i className="far fa-trash-alt" onClick={this.ondel}></i>
                </div>
                <img src={this.state.wallpaper} className={classes.backgrnd} />
            </div>
        )
    }
}

export default Background


