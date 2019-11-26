import React from 'react';
import CvExport from './cvexport';


// to show all available CVs


const CvShow = (listOfCV) => {
  console.log('props cvShow: ', listOfCV)

  const listItems = listOfCV.map((item, i) =>
    <tr id={i.toString()}>
      <td>{i + 1}.</td><td> {item.name}</td><td></td><td>{item.age}</td>
    </tr>
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
        <tr><th>No.</th><th>Name</th><th></th><th>Age</th></tr>
        <col width="10" />
        <col width="20" />
        <col width="20" />
        {listItems}
      </table>
    </div>
    <div>
      <form onSubmit={ExportCV}>
        <button type="submit">Export all CVs to PDF</button>
      </form>
    </div>
    </div>
  );
}

export default CvShow;