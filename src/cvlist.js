import React, { Component } from 'react'
import cvData from './cvdata';

// to load data from json file
// return an array of CV objects
const listofCV= cvData.personer;

function cvList() {
    return listofCV
}

export default cvList;