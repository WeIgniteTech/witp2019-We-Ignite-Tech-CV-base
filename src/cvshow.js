import React from 'react';
import CvExport from './cvexport';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// to show all available CVs


const CvShow = (listOfCV) => {
  // console.log('props cvShow: ', listOfCV)

  const listItems = listOfCV.map((item, i) =>
    <tr key={i}><td>{i + 1}.</td><td> {item.name}</td><td>{item.age}</td></tr>
  );
  const ExportCV = (event) => {
    event.preventDefault()
    //CvExport(listOfCV)
    const doc = new jsPDF();

    const headRows = () => {
      return [{ id: 'ID', name: 'Name', Age: 'Age' }];
    }
    const bodyRows = () => {
      const showTableContent = listOfCV.map((item, i) =>
        [i+1,item.name,item.age]
      );
      return showTableContent
    }
    doc.autoTable({
      head: headRows(),
      body: bodyRows(),
      showHead: true,
      // Note that the "id" key below is the same as the column's dataKey used for 
      // the head and body rows. If your data is entered in array form instead you have to 
      // use the integer index instead i.e. `columnStyles: {5: {fillColor: [41, 128, 185], ...}}`
      columnStyles: {
        id: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' },
        text: { cellWidth: 'auto' }
      }

    });
    doc.save('table.pdf');
  }
  return (
    <div>
      <div>
        <p></p>
        <table id='tbShow'>
          <tbody>
            <tr>
              <th width="50" align="left">No.</th><th width="100" align="left">Name</th><th width="20">Age</th></tr>
            {listItems}
          </tbody>
        </table>
      </div>
      <div>
        <form onSubmit={ExportCV}>
          <button type="submit">Export to PDF</button>
        </form>
      </div>
    </div>
  );
}

export default CvShow;