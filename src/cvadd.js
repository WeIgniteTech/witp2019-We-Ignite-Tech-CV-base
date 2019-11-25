import React from 'react';

// to add new CVs
const AddCV = () =>{

}
const CvAdd = () => {
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
          <button onClick={() => AddCV()}>Add</button></div>
      </form>
    </div>
  );
}

export default CvAdd;