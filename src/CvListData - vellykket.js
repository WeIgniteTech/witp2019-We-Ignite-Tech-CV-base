import { useEffect, useState } from 'react';
//API ID: keymR4xBC0cAWCtQX
//base ID: appHifVOL5knsbeGc
//link to data https://api.airtable.com/v0/appHifVOL5knsbeGc/CV-base?api_key=keymR4xBC0cAWCtQX
// return an array of CV objects from airtable database

//https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
//https://flaviocopes.com/airtable/
//https://dev.to/bdbch/react-hooks-for-data-part-1-fetching-data-28ge

const dataCV = []
const useFetchCV = () => {

    // First we define the necessary states for our hook
    // this includes book, the loading state and potential errors
    const [cvListState, setcvListState] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
      // First we set the loading and error states
      setLoading(true)
      setError(null)

      fetch('https://api.airtable.com/v0/appHifVOL5knsbeGc/CV-base?api_key=keymR4xBC0cAWCtQX')
        .then(res => res.json())
        .then(json => {
          setLoading(false)
            console.log('Inside fetch',json)
            setcvListState(json.records)
        })
        .catch(err => {
          setError(err)
          setLoading(false)
        })
    }, [])
    console.log('Retrieved Data',cvListState)
    return {cvListState, loading, error }
  }

const CvListData = () => {
    
        const { cvListState, loading, error } = useFetchCV()
        console.log('Data in CV list:', cvListState)
        cvListState.map(item=>dataCV.push(item.fields))
        console.log('Data CV out fetch:',dataCV)

        return {dataCV, loading}


}

    export default CvListData;