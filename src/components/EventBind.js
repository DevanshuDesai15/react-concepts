import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // BINDING IN THE CLASS CONSTRUCTOR
        // this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:'GoodBye'
    //     })
    //     console.log(this)
    // }

    // CLASS PROPERTIES AS ARROW FUNCTIONS
    clickHandler = ()=>{
        this.setState({
            message: 'GoodBye'
        })
    }

    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* BINDING IN THE RENDER METHOD <button onClick={this.clickHandler.bind(this)}>Click Here</button> */}
                {/* BINDING WITH ARROW FUNCTION IN RENDER <button onClick={() => this.clickHandler()}>Click Here</button> */}
                {/*BINDING IN THE CLASS CONSTRUCTOR*/}
                <button onClick={this.clickHandler}>Click Here</button>
            </div>
        )
    }
}

export default EventBind
