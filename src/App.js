import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';

import CvAdd from './cvadd'; //Mhran - legg til ny CV
import CvSearch from './cvsearch'; //Rahah - ser etter CV med et navn

import CvShow from './cvshow';  // viser alle CVer på nettsider
import CvListData from './cvListData';



const listOfCV = CvListData();
console.log('list of CV in App: ', listOfCV);

const App = () => {
    return (
      <div className='App'>
        <Navbar />
        <Section
          title='Welcome to We ignite tech CV database'
          subtitle='The We Ignite Tech program is a three month evening course aiming to get people with a tech background closer to the norwegian IT market. The first iteration of the We Ignite Tech program has just finished. Twelve participants just graduated and some of them have already steped into the IT market. 
          Enlighted by this positive experience, 
          we will start a new session of the program in september 2019.
          A Step Closer To Your IT Career In Norway.
          '
         htmlcode={CvShow(listOfCV)}
          dark={true}
          id='section1'
          
        >
        </Section>
        <Section
          title='Search talents'
          subtitle='Enter the skill you need'
          dark={false}
          id='section2'
          htmlcode={CvSearch(listOfCV)}
        />
        <Section
          title='Add CV'
          subtitle='Enter detail of the applicant'
          dark={true}
          id='section3'
          htmlcode={CvAdd(listOfCV)}
        />
      </div>
    );
  }


export default App;
