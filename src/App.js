import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from "./videocard"
import Background from './Components/Background';
import ReactWeather from 'react-open-weather';
//Optional include of the default css styles
import 'react-open-weather/lib/css/ReactWeather.css';
import Example from './Components/Weather'
import Todo from './Components/Todo'


class App extends React.Component  {

  // componentDidMount() {
  //     localStorage.setItem('TODO',JSON.stringify(["todo1",'todo2']))
  // }
  render(){
    return (
      <div className="App">
        {/* <Counter/> */}
        <Background/>
        <Example />
        <Todo/>
       
      {/* <ReactWeather forecast="today" apikey="ac9589d4e20d2570510d5868d99875f2" /> */}
      </div>
    );
  }
  
}

export default App;
