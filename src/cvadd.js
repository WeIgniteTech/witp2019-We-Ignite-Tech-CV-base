import React, { useState } from 'react'
import CvShow from './cvshow'
// to add new CVs

const CvAdd = (listOfCV) => {
  const [newName, setName] = useState('')
  const [newAge, setAge] = useState('')
  const [newSkill, setSkill] = useState('')
  const [newEducation, setEducation] = useState('')
  const [newEmail, setEmail] = useState('')
  const [newCV, setNewCV] = useState({
    addCVlist: [[{ name: '' }, { age: '' }]],
    stage: 0
  })
  const Airtable = require('airtable');
  const base = new Airtable({ apiKey: 'keymR4xBC0cAWCtQX' }).base('appHifVOL5knsbeGc');

  const handleNameChange = (event) => {
    console.log('Target Name: ', event.target.value)
    setName(event.target.value)

  }
  const handleAgeChange = (event) => {
    console.log('Target Age: ', event.target.value)
    setAge(event.target.value)
  }
  const handleSkillChange = (event) => {
    console.log('Target Age: ', event.target.value)
    setSkill(event.target.value)
  }
  const handleEducationChange = (event) => {
    console.log('Target Age: ', event.target.value)
    setEducation(event.target.value)
  }
  const handleEmailChange = (event) => {
    console.log('Target Age: ', event.target.value)
    setEmail(event.target.value)
  }

  const AddAirTable = (props) => {
    console.log('in AddAirtable', props)
    base('CV-base').create([
      {
        "fields": {
          "name": props.name,
          "age": Number(props.age),
          "skills": props.skills,
          "email": props.email,
          "education": props.education
        }

      }
    ], function (err, records) {
      // if (err) {
      //   console.error(err);
      //   return;
      // }
      // // records.forEach(function (record) {
      // //   console.log(record.getId());
      // });
    });
    console.log('added');
  }
  const AddCV = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target)
    const person = [{ name: newName, age: newAge, skills: newSkill, education: newEducation, email: newEmail }]
    console.log('CV to add:', person)
    if (listOfCV.some(personCheck => personCheck.name.toUpperCase() === person[0].name.toUpperCase())) {
      const warning = newName.toUpperCase() + ' is alreardy in the CV database'
      window.alert(warning)
    } else {
      setName('')
      setAge('')
      setSkill('')
      setEducation('')
      setEmail('')
      if (newCV.stage === 0) {
        setNewCV(person, 1)
      }
      else {
        setNewCV(newCV.concat(person[0]), 1)
      }
      // console.log('person add:', person)
      // console.log('CV list after add:', listOfCV)
    }
  }
  const AddCVToDatabase = (event) => {
    event.preventDefault()
    console.log('newCV in AddCV to database', newCV)
    newCV.map(item => AddAirTable(item))
    console.log('Add to database done')
    setNewCV([[{ name: '' }, { age: '' }]], 0);
    window.alert('The database was update successfully')
    window.location.reload(true)
  }
  const ShowAddCv = () => {
    // console.log('List added CV before add:', newCV)
    // console.log('add List length:', newCV.length)
    if (newCV.stage === 0) {
      return (
        <div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      )
    } else {
      console.log('List add CV:', newCV)
      return (
        <div>
          <p>Added CV</p>
          {CvShow(newCV)}
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
            <tr><td>Skills: </td><td><input value={newSkill} onChange={handleSkillChange} /></td></tr>
            <tr><td>Education: </td><td><input value={newEducation} onChange={handleEducationChange} /></td></tr>
            <tr><td>Email: </td><td><input value={newEmail} onChange={handleEmailChange} /></td></tr>
            <tr><td></td><td align='center'><button type="submit">Add</button></td></tr>


          </tbody>
        </table>
      </form>
      <form onSubmit={AddCVToDatabase}>
        <table>
          <tbody>
            <tr><td></td><td width='310px' align='center'><button type="submit">Confirm</button></td></tr>
          </tbody>
        </table>
      </form>
      {ShowAddCv()}
    </div>


  );
}

export default CvAdd;