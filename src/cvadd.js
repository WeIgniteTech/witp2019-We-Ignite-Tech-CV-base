import React, { useState } from 'react'

// to add new CVs
const CvAdd = () => {
  const [persons, setPersons] = useState('')
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState('')


  const AddCV = ()=> {}

  // const AddCV = (event) => {
  //   event.preventDefault()
  //   console.log('button clicked', event.target)
  //   const person = { name: newName, number: newAge }
  //   if (listOfCV.some(personCheck => personCheck.name === person.name)) {
  //     const warning = newName + ' is alreardy in the CV database'
  //     window.alert(warning)
  //     setNewName('')
  //     setNewAge('')
  //   } else {
  //     setPersons(persons.concat(person))
  //     setNewName('')
  //     setNewAge('')
  //   }
  // }

  // }


  const handleNameChange = (event) => {
    console.log('Target: ', event.target.value)
    setNewName(event.target.value)
  }
  const handleAgeChange = (event) => {
    console.log('Target: ', event.target.value)
    setNewAge(event.target.value)
  }
  return (
    <div>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newAge} onChange={handleAgeChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default CvAdd;