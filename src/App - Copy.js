import React, { Component } from 'react';
import logo from './logo-WIT-2019.svg';

import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";

import cvAdd from './cvadd'; //Mhran - legg til ny CV
import cvSearch from './cvsearch'; //Rahah - ser etter CV med et navn
import cvExport from './cvexport'; //Nam - exporterer valgt CVer til PDF
import cvShow from './cvshow';  // viser alle CVer på nettsider
import cvList from './cvlist'; // leser data fra cvdata.json

const listOfCV = cvList();
console.log('list of CV: ', listOfCV);

//object to store searched string
const searchName = ''

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="CV database"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Search CV"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Add CV"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
      </div>
      // <div>
      //   {cvShow(listOfCV)}
      //   <form ><button onClick={() => cvAdd} >Add</button></form>
      //   <form ><button onClick={() => cvExport(listOfCV)} > Export CV</button></form>
      //   <form >
      //     <div>
      //       name: <input value={searchName} />
      //     </div>
      //     <div>
      //       <button onClick={() => cvSearch}>Search name</button>
      //     </div>
      //   </form>
      // </div>
    );
  }
}
export default App;
