import React, { useState } from 'react';
import CvShow from './cvshow';

//search CV by name
let found = -1;
let foundCV = [[]];

const CvSearch = (listOfCV) => {
  const [newSkill, setSkill] = useState('');

  const resultSearch = () => {
    //console.log('Found after run:', found)
    if (found === 1) {
      console.log('CV is found')
      return (
        <div>
          {CvShow(foundCV)}
        </div>
      )
    };
    if (found === 0) {
      //  console.log('CV is not found')
      return (<p>We found no one with the required talent</p>)
    };
    if (found === -1) {
      //    console.log('Search is not running')
      return (<p></p>)
    };
  }

  const SearchSkill = (event) => {
    event.preventDefault()
    // console.log('Search pressed. The skill to search is:', newSkill)
    // console.log(found, foundCV)
    found = 0
    let foundNumber = 0
    foundCV = [[]]
    listOfCV.map((item) => {
      const listSkill = item.skills.toString().replace(/, /gi, ",").split(',')
      //console.log('ListSkill', listSkill)
      listSkill.map((skillItem) => {
        if (skillItem.toString().toUpperCase() === newSkill.toUpperCase()) {
          foundCV[foundNumber] = item
          foundNumber++
          // console.log(item.skills)
          // console.log(skillItem)
        }
        return found //not necessary to return this object
      });
      return found //not necessary to return this object
    }
    )
    if (foundNumber > 0) { found = 1 } else {found = 0}
    // console.log('Found: ', found)
    // console.log('Search skill:', newSkill)
    resultSearch()
    setSkill('')

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
