// return an array of CV objects from airtable database
import { useEffect, useState } from 'react';
//API ID: keymR4xBC0cAWCtQX
//base ID: appHifVOL5knsbeGc
//link to data https://api.airtable.com/v0/appHifVOL5knsbeGc/CV-base?api_key=keymR4xBC0cAWCtQX

//https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
//https://flaviocopes.com/airtable/


function CvListData() {
  const [listOfCV, setListOfCV] = useState([])
  // const [loading, setLoadingState] = useState(false)
  let listTemp = []
  function fetchData() {
    fetch('https://api.airtable.com/v0/appHifVOL5knsbeGc/CV-base?api_key=keymR4xBC0cAWCtQX')
      .then(res => res.json())
      .then(json => {
        setListOfCV(json.records)

      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  listOfCV.map(item => listTemp.push(item.fields))

  //console.log('listTemp to return', listTemp)

  return listTemp

}

export default CvListData;
