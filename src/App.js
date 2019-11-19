import React, {useState} from 'react';
import logo from './logo.svg';
import Frontpage from './Frontpage/Frontpage';
import ApiDateResourceProvider from './ApiDateResourceProvider/ApiDateResourceProvider';
import cvAdd from './cvadd';
import cvSearch from './cvsearch';
import cvExport from './cvexport';
import cvShow from './cvshow';
import cvList from './cvlist';

const listOfCV= cvList();
console.log('list of CV: ',listOfCV);

//object to store searched string
const searchName=''

const stopDefault = (event) => event.preventDefault()

function App() {
  return (
    <div>
      <ApiDateResourceProvider>
        <Frontpage logo={logo} />
        {cvShow(listOfCV)}
        
        <form ><button onClick={cvAdd}>Add</button></form>
        <form onSubmit={stopDefault}><button onClick={cvExport(listOfCV)}>Export CV</button></form>
        <form >
          <div>
            name: <input value={searchName}/>
          </div>
          <div>
            <button onClick={cvSearch}>Search name</button>
          </div>
        </form>
      </ApiDateResourceProvider>
    </div>
  );
}

export default App;
