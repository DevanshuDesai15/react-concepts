import React from 'react'
import Person from './Person'

function NameList() {
    
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce Wane',
            age: 30,
            AKA: 'Batman'
        },
        {
            id: 2,
            name: 'Clark Kent',
            age: 27,
            AKA: 'Superman'
        },
        {
            id: 3,
            name: 'Diana Prince',
            age: 29,
            AKA: 'Wonder Woman'
        }
    ]
    //const personList =  persons.map(person => <Person key={person.id} person={person}/>)
    const nameList =  names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
    return (
        <div>
            {nameList}
        </div>


)
}

export default NameList
