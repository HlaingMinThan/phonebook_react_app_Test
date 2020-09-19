import React from 'react';
const Filter=({filterValue,handlerFilterInput})=>{
    return (
      <div>
           filter shown with <input value={filterValue} onChange={handlerFilterInput}/>
      </div>
    )
  }
export default Filter;