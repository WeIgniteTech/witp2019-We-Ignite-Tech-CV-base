import React, { useState } from 'react';
import CvExport from './cvexport';
import CvShow from './cvshow';

//search CV by name

const CvSearch = (listOfCV) => {
  const [newSkill, setSkill] = useState('')
  const [newSearch, setSearch] = useState({
    found: -1,
    foundCV: [[]]
  })

  const resultSearch = () => {
    //console.log('Found after run:', newSearch.found)
    if (newSearch.found === 1) {
      console.log('CV is found')
      return (
        <div>
          {CvShow(newSearch.foundCV)}
        </div>
      )
    };
    if (newSearch.found === 0) {
      //  console.log('CV is not found')
      return (<p>We found no one with the required talent</p>)
    };
    if (newSearch.found === -1) {
      //    console.log('Search is not running')
      return (<p></p>)
    };
  }

  const SearchSkill = (event) => {
    event.preventDefault()
    console.log('Search pressed. Name to search is:', newSkill)
    console.log(newSearch.found,newSearch.foundCV)
    newSearch.found = 0
    let foundNumber = 0
    newSearch.foundCV=[[]]
    listOfCV.map((item) => {
      const listSkill = item.skills.toString().replace(/, /gi, ",").split(',')
      console.log('ListSkill', listSkill)
      listSkill.map((skillItem) => {
        if (skillItem.toString().toUpperCase() === newSkill.toUpperCase()) {
          newSearch.foundCV[foundNumber] = item
          foundNumber++
          console.log(item.skills)
          console.log(skillItem)
        }

      });
    }
    )
    if (foundNumber > 0) { newSearch.found = 1 } else newSearch.found = 0
    // console.log('Found: ', newSearch.found)
    // console.log('Search name:', newCvName)
    resultSearch()
    setSkill('')
 
  }
  const ExportCV = (event) => {
    event.preventDefault()
    CvExport(newSearch.foundCV[0])
  }

  const handleSkillChange = (event) => {
    //   console.log('target: ', event.target.value)
    setSkill(event.target.value)
  }

  return (
    <div>
      <form onSubmit={SearchSkill}>
        <div>
          <input value={newSkill} onChange={handleSkillChange} />
        </div>
        <div>
          <button type="submit">Search</button></div>
      </form>
      {resultSearch()}
    </div>

  );
}

export default CvSearch;
