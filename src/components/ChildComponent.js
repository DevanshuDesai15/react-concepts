import React from 'react'

// function ChildComponent(props) {
//     return (
//         <div>
//             <button onClick={props.greetHandler}>Greet Parent</button>
//         </div>
//     )
// }

// PASSING PARAMETERS WITH THE ARROW FUNCTION
function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent

// HERE CALLED A METHOD FROM PARENT COMPONENT FROM A BUTTON IN CHILD COMPONENT 
// BY PASSSING THE METHOD AS PORPS TO THE CHILD COMPONENTS 
