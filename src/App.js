import React from 'react';
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

const searchName=''

function App() {
  return (
    <div>
      <ApiDateResourceProvider>
        <Frontpage logo={logo} />
        {cvShow(listOfCV)}
        <form onSubmit={cvShow}><button>Show all</button></form>
        <form onSubmit={cvAdd}><button>Add</button></form>
        <form onSubmit={cvExport(listOfCV)}><button>Export CV</button></form>
        <form onSubmit={cvSearch}>
          <div>
            name: <input value={searchName}/>
          </div>
          <div>
            <button type="submit">Search name</button>
          </div>
        </form>
      </ApiDateResourceProvider>
    </div>
  );
}

export default App;
