import React, { useState } from 'react';
import logo from './logo.svg';
import Frontpage from './Frontpage/Frontpage';
import ApiDateResourceProvider from './ApiDateResourceProvider/ApiDateResourceProvider';
import cvAdd from './cvadd'; //Mhran
import cvSearch from './cvsearch'; //Rahab
import cvExport from './cvexport'; //Nam
import cvShow from './cvshow';  // viser alle CVer på nettsider
import cvList from './cvlist'; // leser data fra cvdata.json

const listOfCV = cvList();
console.log('list of CV: ', listOfCV);

//object to store searched string
const searchName = ''

function App() {
  return (
    <div>
      <ApiDateResourceProvider>
        <Frontpage logo={logo} />
        {cvShow(listOfCV)}

        <form ><button onClick={() => cvAdd} >Add</button></form>
        <form ><button onClick={() => cvExport(listOfCV)} > Export CV</button></form>
        <form >
          <div>
            name: <input value={searchName} />
          </div>
          <div>
            <button onClick={() => cvSearch}>Search name</button>
          </div>
        </form>
      </ApiDateResourceProvider>
    </div>
  );
}

export default App;
