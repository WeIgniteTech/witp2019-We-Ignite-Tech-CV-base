import React, { useState } from 'react'

//search CV by name

const [newSearchName, setSearchName] = useState('')
const foundCV = [{name:''},{age:''}]
const listOfCV
const searchName = (listOfCV) => {
  
  console.log('Search name:',newSearchName)
  let found = 0
  
  listOfCV.map((item) => {
    if (item.name === newSearchName) {
      found = 1
      foundCV = item
    }
  })
  if (found===1) {
    const textFound='Name: ' + foundCV.name+'    Age: '+foundCV.age
    window.alert(textFound)
  } else window.alert('CV is not found')
  
}


function cvSearch(props) {

  return (
    <div>
      <form onSubmit={() => searchName(props.listOfCV)}>
        <div>
          <input value={newSearchName} />
        </div>
        <div>
          <button type='submit'>Search</button></div>
      </form>
    </div>
    //{cvFound}
  );
}

export default cvSearch;
