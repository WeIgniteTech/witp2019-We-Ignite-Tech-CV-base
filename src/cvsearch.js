import React, { useState } from 'react'

//search CV by name

const CvSearch = (listOfCV) => {
  console.log('props cvSearch:', listOfCV)
  const [newName, setNewName] = useState('')
  const handleNameChange = (event) => {
    console.log('target: ', event.target.value)
    nameToSearch = event.target.value
  }
  const foundCV = listOfCV[0]
  let nameToSearch = ''
  const searchName = (event) => {
    event.preventDefault()
    console.log('Event:',event)
    console.log('Search pressed. Name to search is:', nameToSearch)
    event.target.value=''
    let found = 0
    listOfCV.map((item) => {
      if (item.name === nameToSearch) {
        found = 1
        foundCV.name = item.name
        foundCV.age = item.age
      }
    })
    console.log('Found: ', found)
    console.log('Search name:', nameToSearch)
    if (found === 1) {
      const textFound = 'Name: ' + foundCV.name + '    Age: ' + foundCV.age
      window.alert(textFound)
    } else window.alert('CV is not found')

  }

  return (
    <div>
      <form onSubmit={searchName}>
        <div>
          <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Search</button></div>
      </form>
    </div>
    //{cvFound}
  );
}

export default CvSearch;
