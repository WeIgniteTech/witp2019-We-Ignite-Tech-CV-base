import React, { useState } from 'react';
import CvExport from './cvexport';
import CvShow from './cvshow';

//search CV by name

const CvSearch = (listOfCV) => {
  const [newCvName, setCvName] = useState('')
  const [newSearch, setSearch] = useState({
    found: -1,
    foundCV: [[{ name: '' }, { age: '' }]]
  })

  const resultSearch = () => {
    console.log('Found after run:', newSearch.found)
    if (newSearch.found === 1) {
      console.log('CV is found')
    return (<p>Name: {newSearch.foundCV[0].name}    Age: {newSearch.foundCV[0].age}</p>)
    };
    if (newSearch.found === 0) {
      console.log('CV is not found')
      return (<p>CV is not found</p>)
    };
    if (newSearch.found === -1) {
      console.log('Search is not running')
      return (<p></p>)
    };
  }

  const SearchName = (event) => {
    event.preventDefault()
    // console.log('Search pressed. Name to search is:', newCvName)
    newSearch.found = 0
    listOfCV.map((item) => {
      if (item.name === newCvName) {
        newSearch.found = 1
        newSearch.foundCV[0] = item
      }
    })
    // console.log('Found: ', newSearch.found)
    // console.log('Search name:', newCvName)
    resultSearch()
    setCvName('')
  }
  const ExportCV = (event) => {
    event.preventDefault()
    if (newSearch.found !== 1) {
      window.alert('There is no CV for exporting')
    } else (
      CvExport(newSearch.foundCV[0])
    )
  }

  const handleNameChange = (event) => {
    console.log('target: ', event.target.value)
    setCvName(event.target.value)
  }

  return (
    <div>
      <form onSubmit={SearchName}>
        <div>
          <input value={newCvName} onChange={handleNameChange} />
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
      {resultSearch()}
    </div>

  );
}

export default CvSearch;
