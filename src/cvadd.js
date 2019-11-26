import React from 'react'

// to add new CVs

let newAge = ''
let newName = ''
const CvAdd = (listOfCV) => {
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
      let showString=person.name.toString()+' was added'
      window.alert(showString)
      showString='List of CVs \r\n'+'Name and age \r\n'
      listOfCV.map((item,i) => {
        showString+=((i+1).toString()) +'. '+ item.name + '  - ' + item.age + '\r\n'
      })
      window.alert(showString)
    }
  }


return (
  <div>
    <form onSubmit={AddCV}>
      <table>
        <tr><td>Name: </td><td><input onChange={handleNameChange} /></td></tr>
      
      
        <tr><td>Age: </td><td><input onChange={handleAgeChange} /></td></tr>
      
        <tr><td></td><td align='center'><button type="submit">Add</button></td></tr>
        </table>
    </form>
    </div>
);
}

export default CvAdd;