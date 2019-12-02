// return an array of CV objects from airtable database
import React from 'react';
//API ID: keymR4xBC0cAWCtQX
//base ID: appHifVOL5knsbeGc
//link to data https://api.airtable.com/v0/appHifVOL5knsbeGc/CV-base?api_key=keymR4xBC0cAWCtQX

//https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
//https://flaviocopes.com/airtable/


let dataCV = new Array();

const CvListData = () => {
    const fetch = require('node-fetch');
    const urlCV = 'https://api.airtable.com/v0/appHifVOL5knsbeGc/CV-base?api_key=keymR4xBC0cAWCtQX'

    fetch(urlCV).then(res => res.json()).then((json) => {
        json.records.map((item, i) => {
            dataCV.push(item.fields)
        })
        console.log('Data CV in fetch:', dataCV)
        //dataCV = json.records
        // console.log('Data json.records:', json.records)
    })
    console.log('Data out fetch:', dataCV)
    console.log('Data out fetch 0:', dataCV[0])

    return dataCV
}

export default CvListData;