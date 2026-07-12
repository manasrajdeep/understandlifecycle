import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component {


    constructor(){
        super();

        this.state ={
            name:"ComponentA",
            data:[]
        }

        console.log("ComponentA constructor")

    }



    static getDerivedStateFromProps(){
        console.log("ComponentA getDerivedStateFromProps")
        return null;
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({data:data}))
        console.log("ComponentA  componentDidMount")
    }


    
    render(){
         console.log("ComponentA render")
         console.log(this.state.data)
         
        return(<>
            <h1> {this.state.name}</h1>
            <ul>
                {this.state.data.map((data)=>{
                    return(
                        <li>
                            {data.username}
                        </li>
                    )
                })}

            </ul>
            <ComponentB/>
        </>);
    }

}

export default ComponentA;