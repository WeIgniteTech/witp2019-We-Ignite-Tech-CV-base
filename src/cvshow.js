import React from 'react';
import CvExport from './cvexport';


// to show all available CVs


const CvShow = (listOfCV) => {
  // console.log('props cvShow: ', listOfCV)

  const listItems = listOfCV.map((item, i) =>
    <tr key={i}><td>{i + 1}.</td><td> {item.name}</td><td>{item.age}</td></tr>
  );
  const ExportCV = (event) => {
    event.preventDefault()
    CvExport(listOfCV)
  }
  return (
    <div>
      <div>
        <p></p>
        <table>
          <tbody>
            <tr>
              <th width="50" align = "left">No.</th><th width="100" align = "left">Name</th><th width="20">Age</th></tr>
            {listItems}
          </tbody>
        </table>
      </div>
      <div>
        <form onSubmit={ExportCV}>
          <button type="submit">Export all to PDF</button>
        </form>
      </div>
    </div>
  );
}

export default CvShow;