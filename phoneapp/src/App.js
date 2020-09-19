import React, { useState,useEffect, Component } from 'react'
import phoneService from './services/phones'
import axios from 'axios';
// filter component
import Filter from './components/Filter';
// personForm component
import PersonForm from './components/PersonForm';
// persons component
import Persons from './components/Persons';
// feedback Component
import Feedback from './components/Feedback';
// Error Component
import Error from './components/Error';
const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')
  const [ feedback, setFeedback ] = useState(null)
  const [ error, setError ] = useState("")

  useEffect(()=>{
   
    phoneService.getAll().then(response=>{
      //set person ka array t khu param mr htae py pyn ya ml
      setPersons(response.data);
    })
  },[]);
  const handlerNameInput=(e)=>{
    // console.log(e.target.value);
    setNewName(e.target.value);
  }
  const handlerNumberInput=(e)=>{
    setNewNumber(e.target.value);
  }
  const handlerFilterInput=(e)=>{
    e.preventDefault();
    setFilterValue(e.target.value);
  }
  // create person
  const add=(e)=>{
    e.preventDefault();
   //check the input name is already have or not
    let confirm,id,sameName,name,arrayIndex;
    persons.forEach((person,i)=>{
      if(person.name===newName){
        arrayIndex=i;
        sameName=true;
        id=person.id; 
        name=person.name   
        // console.log(person.name,newName);
      }
      
        
    })
    if(sameName){
      confirm=window.confirm(`${name} is already added to phonebook,replace the old number with a new one?`);
      if(confirm){
        // update data in server
        let person=persons.find(person=>person.id==id);
        let dataObj={
          ...person,
          number:newNumber
        }
        // console.log(dataObj);
        phoneService.update(dataObj,id).then((response)=>{
          // update data in array
          // console.log(arrayIndex);
          persons[arrayIndex]=response.data;

          setPersons(persons.map(person=>person));
        })
      }else{
        console.log('done');
      }
   
    }else{
      //create a new person
      let personObj={
       
        name:newName,
        number:newNumber
      }
      phoneService.create(personObj).then((response)=>{
        // concat method return a new array persons.concat so person htal ka array value twy yw concat htl ka array value yw paung pe new array return pyan
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
        setFeedback(`${response.data.name} is  Added`);
        setTimeout(()=>{
          setFeedback(null);
        },5000)
        // console.log(feedback);
      })
    }

  }
  const deletePersonHandler=(id)=>()=>{
    let person=persons.find(person=>person.id==id);
    // console.log(person);

    let yes=window.confirm(`Are u Sure Want to Delete ${[person.name]}`);
    
    if(yes){
      phoneService.remove(id).then(()=>{
        
        setPersons(persons.filter(person=>person.id!=id));
      }).catch((err)=>{
        setError(error+"this operation occur a server error");
        console.log(error)
      })
    }
  }  
  
  return (
    <div>
      <h2>Phonebook</h2>
       
      <Filter handlerFilterInput={handlerFilterInput} filterValue={filterValue} />
      <Error err={error}/>
      <Feedback feedback={feedback} />
      <h3>Add a new</h3>
      <PersonForm add={add} newName={newName} handlerNameInput={handlerNameInput} newNumber={newNumber} handlerNumberInput={handlerNumberInput}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filterValue={filterValue} deletePersonHandler={deletePersonHandler}/>
    </div>
  )
}

export default App