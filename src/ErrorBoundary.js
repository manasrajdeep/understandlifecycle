import { Component } from "react";

export default class ErrorBoundary extends Component{
    constructor(){
        super();

        this.state={
            hasError:false
        }
    }


    static getDerivedStateFromError(error){
        return {
            hasError:true
        };
    }

    componentDidCatch(error,info){
        console.log("error : ",error);
        console.log("info : ",info);
    }

    render (){
        if(this.state.hasError){
            return (<h1>Something went wrong.</h1>)
        }
        return this.props.children
    }
}