import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    
    render() {
        
        // USE OF SHORT CIRCUIT OPERATOR
        return this.state.isLoggedIn && <div>Welcome Devanshu</div>

        // USE OF TERNARY OPERATOR 
        // return(
        //     this.state.isLoggedIn ? (
        //         <div> Welcome Devanshu</div> ):(
        //             <div>Welcome Guest</div>
        //         )
        // )

        // USE OF ELEMENT VARIABLE 
        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Devanshu</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        
        // USE OF IF/ELSE 
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Devanshu
        //         </div>
        //     )
        // }else{
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Devanshu</div>
        //         <div>Welcome Guests</div>
        //     </div>
        // )
    }
}

export default UserGreeting
