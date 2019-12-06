

import { useState, useEffect} from "react";

//API ID: keymR4xBC0cAWCtQX
//base ID: appHifVOL5knsbeGc
//link to data https://api.airtable.com/v0/appHifVOL5knsbeGc/CV-base?api_key=keymR4xBC0cAWCtQX

//https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
//https://flaviocopes.com/airtable/


// return an array of CV objects from airtable database
const CvListData = () => {
  const  [hasError, setErrors] =  useState(false)
  const  [dataCV,setDataCV ]= useState({})

  useEffect(() =>{
    async function fetchData(){
    const res = await fetch("https://api.airtable.com/v0/appHifVOL5knsbeGc/CV-base?api_key=keymR4xBC0cAWCtQX")
      .then(res => res.json())
      .then(res => this.setState({ dataCV: res }))
      .catch(() => this.setState({ hasErrors: true }));
      console.log('Data CV:', dataCV)
    }
  }
    return dataCV;
  }
export default CvListData;