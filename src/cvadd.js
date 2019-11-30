import React, { useState } from 'react'
import CvShow from './cvshow'
// to add new CVs

const CvAdd = (listOfCV) => {
  const [newName, setName] = useState('')
  const [newAge, setAge] = useState('')
  const [newCV, setNewCV] = useState({
    addCVlist: [[{ name: '' }, { age: '' }]],
    stage:0
  })

  const handleNameChange = (event) => {
    console.log('Target Name: ', event.target.value)
    setName(event.target.value)

  }
  const handleAgeChange = (event) => {
    console.log('Target Age: ', event.target.value)
    setAge(event.target.value)
  }

  const AddCV = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    const person = [{ name: newName, age: newAge }]
    console.log('CV to add:', person)
    if (listOfCV.some(personCheck => personCheck.name === person[0].name)) {
      const warning = newName + ' is alreardy in the CV database'
      window.alert(warning)
    } else {
      
      setAge('')
      setName('')
      if (newCV.stage===0) {setNewCV(person,1)} else {setNewCV(newCV.concat(person[0]),1)}
      listOfCV.push(person[0])
      // console.log('person add:', person)
      // console.log('CV list after add:', listOfCV)
      }
  }

  const ShowAddCv = () => {
    // console.log('List added CV before add:', newCV)
    // console.log('add List length:', newCV.length)
    if (newCV.stage === 0) {
      return (
        <p></p>
      )
    } else {
      console.log('List add CV:',newCV)
      return (
        <div>
          <p>Added CV</p>
          {CvShow(newCV)}
        </div>
      )
    }
  }

  return (
    <div>
      <form onSubmit={AddCV}>

        <table>
          <tbody>
            <tr><td>Name: </td><td><input value={newName} onChange={handleNameChange} /></td></tr>
            <tr><td>Age: </td><td><input value={newAge} onChange={handleAgeChange} /></td></tr>
            <tr><td></td><td align='center'><button type="submit">Add</button></td></tr>
          </tbody>
        </table>
       
      </form>
      {ShowAddCv()}
    </div>


  );
}

export default CvAdd;