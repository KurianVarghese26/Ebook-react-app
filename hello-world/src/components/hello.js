import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";

class Hello extends Component{
    
    render(){
        const {name,sweetName,children} = this.props
        return(
            <div>
                <h1>He! {name} also known as {sweetName} </h1>
                {children}
            </div>
        )
    }
}

export default Hello;