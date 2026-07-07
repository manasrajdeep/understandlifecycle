import React from "react";

class ComponentA extends React.Component {
    constructor(){
        super();

        this.state ={
            name:"ComponentA"
        }

        console.log("ComponentA constructor")

    }

    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("ComponentA  componentDidMount")
    }

    render(){
         console.log("ComponentA render")
        return(
            <h1> ComponentA </h1>
        );
    }

}

export default ComponentA;