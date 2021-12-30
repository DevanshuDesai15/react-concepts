// FUNCTION COMPONENTS

import React from 'react'

// NORMAL FUNCTION
/* function Greet(){
     return <h1>Hello Devanshu</h1>
} */

// BY USING ARROW FUNCTION
/* const Greet = () => <h1>Hello Devanshu</h1> */

// USING OF PROPS
// const Greet = (props) => {
//     console.log(props)
//     return <h1>Hey {props.name} aka {props.heroname}</h1>
// }

// HERE THERE IS A LIMITATION THAT PROP CAN BE RETURNED ONLY IN ONE HTML ELEMENT 
// const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h3>Hey {props.name} aka {props.heroname}</h3>
//             {props.children}
//         </div>
//         )
// }

// DESTRUCUTRING PROPS
// const Greet = ({name, heroname}) => {
//     return (
//         <div>
//             <h3>Hey {name} aka {heroname}</h3>
//         </div>
//         )
// }

// DESTRUCTURING IN FUNCTION BODY
const Greet = props => {
    const { name, heroname} = props
    return (
        <div>
            <h3>Hey {name} aka {heroname}</h3>
        </div>
        )
}

export default Greet
