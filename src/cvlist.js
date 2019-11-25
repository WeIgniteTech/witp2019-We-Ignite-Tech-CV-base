import React, { Component } from 'react'
import cvData from './cvdata';

// to load data from json file
// return an array of CV objects
const listOfCV= cvData;

function CvList() {
    return listOfCV
}

export default CvList;