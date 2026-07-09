import React from "react";

class ComponentB extends React.Component {


    constructor(){
        super();

        this.state ={
            name:"ComponentB ",
            data:[]
        }

        console.log("ComponentB constructor")

    }



    static getDerivedStateFromProps(){
        console.log("ComponentB getDerivedStateFromProps")
        return null;
    }


    componentDidMount(){
        console.log("ComponentB  componentDidMount")
         fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({data:data}))
    }


    
    render(){
         console.log("ComponentB render")
        //  console.log(this.state.data)
         
        return(<>
            <h2> {this.state.name}</h2>
             <ul>
                {this.state.data.map((data)=>{
                    return(
                        <li>
                            {data.email}
                        </li>
                    )
                })}

            </ul>
            </>
        );
    }

}

export default ComponentB;