// return an array of CV objects from airtable database
import React from 'react';
//API ID: keymR4xBC0cAWCtQX
//base ID: appHifVOL5knsbeGc
//link to data https://api.airtable.com/v0/appHifVOL5knsbeGc/CV-base?api_key=keymR4xBC0cAWCtQX

//https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
//https://flaviocopes.com/airtable/



let dataCV = [];
const CvListData = () => {

    const fetch = require('node-fetch');
    const urlCV = 'https://api.airtable.com/v0/appHifVOL5knsbeGc/CV-base?api_key=keymR4xBC0cAWCtQX'

    fetch(urlCV).then(res => res.json()).then((data) => {
        data.records.map((item, i) => {
            dataCV.push(item.fields)
        })
        console.log('Data CV in fetch:', dataCV)
        //dataCV = json.records
        console.log('Data CV[0] in fetch:', dataCV[0])
    })
    .catch(error => console.log('Error: ',error))
 

    return dataCV
}

export default CvListData;