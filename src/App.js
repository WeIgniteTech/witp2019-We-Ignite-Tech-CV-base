import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";

import cvAdd from './cvadd'; //Mhran - legg til ny CV
import cvSearch from './cvsearch'; //Rahah - ser etter CV med et navn
import cvExport from './cvexport'; //Nam - exporterer valgt CVer til PDF
import cvShow from './cvshow';  // viser alle CVer på nettsider
import cvList from './cvlist'; // leser data fra cvdata.json

const listOfCV = cvList();
console.log('list of CV: ', listOfCV);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Welcome to WIT CV database"
          subtitle="CVs of all employees"
          htmlcode={cvShow(listOfCV)}
          dark={true}
          id="section1"
        >
          {cvShow(listOfCV)}
        </Section>
        <Section
          title="Search CV"
          subtitle='Search CV by name'
          dark={false}
          id="section2"
        />
        <Section
          title="Add CV"
          subtitle='Add a new CV to the database'
          dark={true}
          id="section3"
        />
      </div>
    );
  }
}

export default App;
