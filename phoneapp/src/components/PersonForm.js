import React from 'react'
const PersonForm=({add,newName,handlerNameInput,newNumber,handlerNumberInput})=>{
    return (
      <div>
         <form onSubmit={add}>
          <div>
            name: <input value={newName} onChange={handlerNameInput} />
          </div>
          <div>number: <input value={newNumber} onChange={handlerNumberInput} /></div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }
export default PersonForm;