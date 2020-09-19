import React from 'react';

const Person=({person,deletePersonHandler})=>{
    return (
        <div>
             <li>
                {person.name}-{person.number}
                <button onClick={deletePersonHandler(person.id)}>delete</button>
              </li>
        </div>
    )
}
export default Person;