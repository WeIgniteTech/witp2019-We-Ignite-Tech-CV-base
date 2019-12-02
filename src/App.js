import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';

import CvAdd from './cvadd'; //Mhran - legg til ny CV
import CvSearch from './cvsearch'; //Rahah - ser etter CV med et navn

import CvShow from './cvshow';  // viser alle CVer på nettsider
import CvList from './cvlist'; // leser data fra cvdata.json



const listOfCV = CvList();
console.log('list of CV: ', listOfCV);

function App() {
    return (
      <div className='App'>
        <Navbar />
        <Section
          title='Welcome to WIT CV database'
          subtitle='The We Ignite Tech program is a three month evening course aiming to get people with a tech background closer to the norwegian IT market. The first iteration of the We Ignite Tech program has just finished. Twelve participants just graduated and some of them have already steped into the IT market. 
          Enlighted by this positive experience, 
          we will start a new session of the program in september 2019.
          A Step Closer To Your IT Career In Norway.
          </br> n
          ACCURATE TECHNOLOGIES:
          The program is based on modern and well used technologies (programming languages, frameworks, tools and methodologies).
          INDUSTRY STANDARDS:
          Course material is based on our teachers experience from the field in the norwegian and international IT industry.
          The We Ignite Tech program is a three month evening course aiming to get people with a tech background closer to the norwegian IT market. The first iteration of the We Ignite Tech program has just finished. Twelve participants just graduated and some of them have already steped into the IT market. 
          Enlighted by this positive experience, 
          we will start a new session of the program in september 2019.
          \r\n
          A Step Closer To Your IT Career In Norway.
          ACCURATE TECHNOLOGIES:
          The program is based on modern and well used technologies (programming languages, frameworks, tools and methodologies).
          INDUSTRY STANDARDS:
          Course material is based on our teachers experience from the field in the norwegian and international IT industry.
'
          dark={true}
          id='section1'
          htmlcode={CvShow(listOfCV)}
        >
        </Section>
        <Section
          title='Search for talents'
          subtitle='Enter the skill you need'
          dark={false}
          id='section2'
          htmlcode={CvSearch(listOfCV)}
        />
        <Section
          title='Add CV'
          subtitle='Enter detail of the employee'
          dark={true}
          id='section3'
          htmlcode={CvAdd(listOfCV)}
        />
      </div>
    );
  }


export default App;
