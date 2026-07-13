import React from "react";
import ComponentA from "./Component/ComponentA";
import Timer from "./Timer/TimerOne";


class App extends React.Component {

  constructor(){
    super();
    this.state={
      mount:true,
      timerOn:false
    }
  }

  handleToUnmount=()=>{
    this.setState((prevState)=>({mount:!prevState.mount}))

  }

  handleToTimer=()=>{
    this.setState((prevState)=>({timerOn:!prevState.timerOn}))
  }

  render(){
  return (<>
  <button onClick={this.handleToUnmount}>Mount</button>
    {this.state.mount?<Timer timerOn={this.state.timerOn}  />:null}
    <button onClick={this.handleToTimer}>{this.state.timerOn?"Start":"Stop"}</button>
  
  </>
    
    
    
  );
}
}
export default App;
