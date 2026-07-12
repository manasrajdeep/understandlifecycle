import React from "react";
import ComponentA from "./Component/ComponentA";
import Timer from "./Timer/TimerOne";


class App extends React.Component {

  constructor(){
    super();
    this.state={
      mount:true
    }
  }

  handleToUnmount=()=>{
    this.setState((prevState)=>({mount:!prevState.mount}))

  }

  render(){
  return (<>
  <button onClick={this.handleToUnmount}>Mount</button>
    {this.state.mount?<Timer/>:null}
  
  </>
    
    
    
  );
}
}
export default App;
