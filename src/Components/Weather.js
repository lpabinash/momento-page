// import ReactWeather from 'react-open-weather';
// //Optional include of the default css styles
// import 'react-open-weather/lib/css/ReactWeather.css';
// <ReactWeather forecast="today" apikey="34140d96c2ad22d503d80004ffc14544" type="auto" />


import React, { Component } from 'react'
import moment from 'moment'
import classes from './weather.module.css';


// import "./App.css"
 
class Example extends Component {
  state = {
    data:[],
    lat: undefined,
    lon: undefined,
    city: undefined,
    sky: undefined,
    temperature: undefined,
    unit:undefined,
    // temperatureF: undefined,
    icon: undefined,
    sunrise: undefined,
    sunset: undefined,
    errorMessage: undefined,
    counte  :1
  }


  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getWeather = async (latitude, longitude) => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ac9589d4e20d2570510d5868d99875f2&units=metric`);
    const data = await api_call.json();
    console.log(data)
    this.setState({data:data})
    // console.log(data.weather[0].icon)

    this.setState({
      lat: latitude,
      lon: longitude,
      city: data.name,
      sky:data.weather[0].description,
      temperature: Math.round(data.main.temp),
      unit:'°C',
      // temperatureF: Math.round(data.main.temp * 1.8 + 32),
      icon: data.weather[0].icon,
      sunrise: moment.unix(data.sys.sunrise).format("hh:mm a"),
      sunset: moment.unix(data.sys.sunset).format("hh:mm a"),
    })
  }

  onMinesBlown=()=>{
    this.setState({counte:this.state.counte+1})
        if(this.state.counte%2==1){
                this.setState({temperature:Math.round(this.state.data.main.temp * 1.8 + 32),unit:'°F'})
  }else{
    this.setState({temperature:Math.round(this.state.data.main.temp),unit:'°C'})
  }
}



  componentDidMount() {
    this.getPosition()
    .then((position) => {
       this.getWeather(position.coords.latitude,     
       position.coords.longitude)
     })
     .catch((err) => console.log(err.message));
     this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon),
      600000
    );
 }

componentWillUnmount() {
  clearInterval(this.timerID);
}
  render () {
    if(this.state.city){
      return (
     
        <div className={classes.dist}>
        {/* <Weather id="dist" unit="C" city="BENGALURU" appid="ac9589d4e20d2570510d5868d99875f2" /> */}
        <div><img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} className={classes.icon} alt="weather icon"/></div>
      <h3 className={classes.temp} onClick={this.onMinesBlown}>{this.state.temperature}<span>{this.state.unit}</span></h3>
      <h2 className={classes.sky}>{this.state.sky}</h2>
      <div>{this.state.city}</div>
      
        </div>
       
      )
    }else{
      return(
        <div className={classes.dist}>Loading....</div>
      )
    }
    
  }
}
export default Example