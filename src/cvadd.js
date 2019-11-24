import React from 'react';

// to add new CVs
const addCV = () => {

}
function cvAdd() {
  return (
    <div>
      <form >
        <div>
          Name: <input />
        </div>
        <div>
          Age: <input />
        </div>
        <div>
          <button onClick={() => addCV()}>Add</button></div>
      </form>
    </div>
  );
}

export default cvAdd;