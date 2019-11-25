import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';

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
      <div className='App'>
        <Navbar />
        <Section
          title='Welcome to WIT CV database'
          subtitle='The We Ignite Tech program is a three month evening course aiming to get people with a tech background closer to the norwegian IT market. The first iteration of the We Ignite Tech program has just finished. Twelve participants just graduated and some of them have already steped into the IT market. 
          Enlighted by this positive experience, 
          we will start a new session of the program in september 2019.
          A Step Closer To Your IT Career In Norway.
          ACCURATE TECHNOLOGIES:
          The program is based on modern and well used technologies (programming languages, frameworks, tools and methodologies).
          INDUSTRY STANDARDS:
          Course material is based on our teachers experience from the field in the norwegian and international IT industry.
          The We Ignite Tech program is a three month evening course aiming to get people with a tech background closer to the norwegian IT market. The first iteration of the We Ignite Tech program has just finished. Twelve participants just graduated and some of them have already steped into the IT market. 
          Enlighted by this positive experience, 
          we will start a new session of the program in september 2019.
          A Step Closer To Your IT Career In Norway.
          ACCURATE TECHNOLOGIES:
          The program is based on modern and well used technologies (programming languages, frameworks, tools and methodologies).
          INDUSTRY STANDARDS:
          Course material is based on our teachers experience from the field in the norwegian and international IT industry.
'
          dark={true}
          id='section1'
          htmlcode={cvShow(listOfCV)}
        >
        </Section>
        <Section
          title='Search CV'
          subtitle='Enter a name to search'
          dark={false}
          id='section2'
          htmlcode={cvSearch(listOfCV)}
        />
        <Section
          title='Add CV'
          subtitle='Enter detail of an employee'
          dark={true}
          id='section3'
          htmlcode={cvAdd()}
        />
      </div>
    );
  }
}

export default App;
