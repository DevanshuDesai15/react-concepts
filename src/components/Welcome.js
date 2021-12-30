// FOR PROPS IN CLASS COMPONENTS

import React, {Component} from 'react'


// NORMAL CALSS COMPONENTS
// class Welcome extends Component {
//     render(){
//         return <h1>Class Components</h1>
//     }
// }

// USING PROPS
// class Welcome extends Component {
//     render(){
//         return (
//             <h1>Hey {this.props.name} aka {this.props.heroname}</h1>
//         )
//     }
// }

// DESTRUCTURING PROPS
class Welcome extends Component {
    render(){
        const {name, heroname} = this.props
        return (
            <h1>Hey {name} aka {heroname}</h1>
        )
    }
}

export default Welcome