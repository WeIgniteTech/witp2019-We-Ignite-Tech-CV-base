import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';

import CvAdd from './cvadd'; 
import CvSearch from './cvsearch';

import CvListData from './CvListData';
import CvShowData from './CvShowData';



const listOfCV = CvListData()

console.log('list of CV app: ', listOfCV);
console.log('list of CV app 0: ', listOfCV[0]);
const introductionText="The We Ignite Tech program is a three month evening course aiming to get people with a tech background closer to the norwegian IT market. The first iteration of the We Ignite Tech program has just finished. Twelve participants just graduated and some of them have already steped into the IT market. Enlighted by this positive experience, we will start a new session of the program in september 2019. A Step Closer To Your IT Career In Norway. \n ACCURATE TECHNOLOGIES: The program is based on modern and well used technologies (programming languages, frameworks, tools and methodologies). INDUSTRY STANDARDS: Course material is based on our teachers experience from the field in the norwegian and international IT industry. The We Ignite Tech program is a three month evening course aiming to get people with a tech background closer to the norwegian IT market. The first iteration of the We Ignite Tech program has just finished. Twelve participants just graduated and some of them have already steped into the IT market.  Enlighted by this positive experience, we will start a new session of the program in september 2019. \r\n A Step Closer To Your IT Career In Norway. ACCURATE TECHNOLOGIES: The program is based on modern and well used technologies (programming languages, frameworks, tools and methodologies). \n\ INDUSTRY STANDARDS: Course material is based on our teachers experience from the field in the norwegian and international IT industry."
function App() {
    return (
      <div className='App'>
        <Navbar />
        <Section
          title='Welcome to WIT CV database'
          subtitle=''
          dark={true}
          id='section1'
          htmlcode={CvShowData(listOfCV)}
          htmlIntroduction={introductionText}
        >
        </Section>
        <Section
          title='Search CV'
          subtitle='Enter a name to search'
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
