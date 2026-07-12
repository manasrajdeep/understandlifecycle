import React from "react";


class Timer extends React.Component{

    constructor(){
        super();

        this.state={
            name:"Timer",
            time:0

        }

        this.timer=null;
        console.log("TimerOne Constructor")

    }

    static getDerivedStateFromProps(){
        console.log("TimerOne getDerivedStateFromProps")
        return null;
    }

     shouldComponentUpdate(nextProps,nextState){
        return true;
    }

    // handleOnClick=()=>{
    //     this.setState((prevState)=>{
    //         return{count:prevState.count+1}
    //     })


    // }

    StartOrStop=()=>{
        
    }

     render(){
        return(<>
            <h2>{this.state.name}</h2>
            {/* <h2>{this.state.count}</h2>
            <button onClick={this.handleOnClick}> click </button> */}

            <h3> Time Spent: {new Date(this.state.time*1000).toISOString().slice(11,19)}</h3>
            <h3><button onClick={this.StartOrStop}>Start/Stop</button></h3>
            
            </>
        );

    }



    componentDidMount(){
        console.log("TimerOne componentDidMount")

        this.timer=setInterval(()=>{this.setState((prevState)=>({
            time:prevState.time+1}))
        },1000
    );

    }



    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("TimerOne getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("TimerOne componentDidUpdate")
        if(this.state.time===10){
            clearInterval(this.timer)
        }
    }

    componentWillUnmount(){
        console.log("TimerOne componentWillUnmount")
    }

}
export default Timer;