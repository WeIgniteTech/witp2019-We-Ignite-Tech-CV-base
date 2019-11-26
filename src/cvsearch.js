import React from 'react';
import CvExport from './cvexport';

//search CV by name

const CvSearch = (listOfCV) => {

  const handleNameChange = (event) => {
    console.log('target: ', event.target.value)
    nameToSearch = event.target.value
  }
  let found = 0

  //console.log('props cvSearch:', listOfCV)
  const foundCV = listOfCV[0]
  let nameToSearch = ''
  const SearchName = (event) => {
    event.preventDefault()
    console.log('Event:', event)
    console.log('Search pressed. Name to search is:', nameToSearch)
    event.target.value = ''

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
      const textFound = 'CV found. \r\nName: ' + foundCV.name + '    Age: ' + foundCV.age
      window.alert(textFound)
    } else window.alert('CV is not found')

  }
  const ExportCV = (event) => {
    event.preventDefault()
    if (found!==1) {
      window.alert('There is no CV for exporting')
    } else (
      CvExport(foundCV)
    )
  }
  return (
    <div>
      <form onSubmit={SearchName}>
        <div>
          <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Search</button></div>
      </form>
      <form onSubmit={ExportCV}>
        <div>
         
        </div>
        <div>
          <button type="submit">Export the selected CV to PdF</button></div>
      </form>
    </div>

  );
}

export default CvSearch;
