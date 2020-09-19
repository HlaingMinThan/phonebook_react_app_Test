import React from 'react';
import Person from './Person';
const Persons=({persons,filterValue,deletePersonHandler})=>{
  let filteredPerson=persons.filter(person=>person.name.toLowerCase().includes(filterValue.toLowerCase()));
  // delete person
  
  return (
      <div>
        <ul>
            {
              filteredPerson.map(person=>{
                return <Person key={person.id} person={person} deletePersonHandler={deletePersonHandler}/>

              })
            }
        </ul>
      </div>
    
    )
  }
export default Persons;