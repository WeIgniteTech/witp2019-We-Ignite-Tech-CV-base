import React from 'react';
import logo from './logo.svg';
import Frontpage from './Frontpage/Frontpage';
import ApiDateResourceProvider from './ApiDateResourceProvider/ApiDateResourceProvider';
import cvAdd from './cvadd';
import cvSearch from './cvsearch';
import cvExport from './cvexport';
import cvShow from './cvshow';
import cvList from './cvlist';

const newName = ''

function App() {
  return (
    <div>
      <ApiDateResourceProvider>
        <Frontpage logo={logo} />
        <button>Show all</button>
        <button>Add</button>
        <button>Export CV</button>
        <form onSubmit={cvSearch}>
          <div>
            name: <input value={newName} />
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
