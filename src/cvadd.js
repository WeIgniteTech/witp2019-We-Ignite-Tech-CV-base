import React, { useState } from 'react'

// to add new CVs

let newAge = ''
let newName = ''
const CvAdd = (listOfCV) => {
  // const [persons, setPersons] = useState('')
  // const [newName, setNewName] = useState('')
  // const [newAge, setNewAge] = useState('')
  console.log('list CV in CvAdd', listOfCV)
  const handleNameChange = (event) => {
    console.log('Target Name: ', event.target.value)
    newName = event.target.value

  }
  const handleAgeChange = (event) => {
    console.log('Target Age: ', event.target.value)
    newAge = event.target.value
  }

  const AddCV = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const person = { name: newName, age: newAge }
    console.log('CV to add:', person)
    if (listOfCV.some(personCheck => personCheck.name === person.name)) {
      const warning = newName + ' is alreardy in the CV database'
      window.alert(warning)
    } else {
      listOfCV.push(person)
      console.log('CV full after added', listOfCV)
      window.alert('CV was added')
    }
  }

  //Save to json file
  //https://stackabuse.com/reading-and-writing-json-files-with-node-js/

  const writeJsonFile = require('write-json-file')
  const SaveCV = (event) => {
   
      (async () => {
        await writeJsonFile('cvdata.json', { listOfCV: true })
      })();
      event.preventDefault()
  }
  return (
    <div>
      <form onSubmit={AddCV}>
        <div>
          Name: <input onChange={handleNameChange} />
        </div>
        <div>
          Age: <input onChange={handleAgeChange} /></div>
        <div>
          <button type="submit">add</button>

        </div>
      </form>
      <form onSubmit={SaveCV}>
        <div>
          <p>Press SAVE to confirm your work</p>
          <button type="submit">SAVE</button>
        </div>
      </form>
    </div>
  );
}

export default CvAdd;