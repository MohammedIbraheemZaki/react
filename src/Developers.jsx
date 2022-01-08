import React from 'react'
import Person from './Person'
function Developers({persons, nameChange}) {
  return (
    <div>
      {persons.map((person, index) => (
      <Person 
        id={person.id}
        key={person.id} 
        name={person.name}
        index={index}
        city={person.city} 
        />))}
    </div>
      
      )}
      // emmitHandle={() => {handleEmmit(person.id)}} 

export default Developers;