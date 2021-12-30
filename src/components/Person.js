import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
            I am {person.AKA}, my seccret identity is {person.name} and I am {person.age} years old.
        </h2>
        </div>
    )
}

export default Person
