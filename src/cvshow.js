import React from 'react';
import CvExport from './cvexport';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

//https://www.npmjs.com/package/jspdf
//https://www.npmjs.com/package/jspdf-autotable

// to show all available CVs


const CvShow = (listOfCV) => {
  // console.log('props cvShow: ', listOfCV)

  const listItems = listOfCV.map((item, i) =>
    <tr key={i}><td>{i + 1}.</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.skills}</td>
      <td>{item.education}</td>
      <td>{item.email}</td>
    </tr>
  );
  const ExportCV = (event) => {
    event.preventDefault()
    //CvExport(listOfCV)
    const doc = new jsPDF();

    const headRows = () => {
      return [{ Id: 'ID', Name: 'Name', Age: 'Age', Skills: 'Skills', Education: 'Education', Email: 'Email' }];
    }
    const bodyRows = () => {
      const showTableContent = listOfCV.map((item, i) =>
        [i + 1, item.name, item.age, item.skills, item.education, item.email]
      );
      return showTableContent
    }
    doc.setFontSize(22);
    doc.setFontType("bold");
    doc.text(80, 12, "We Ignite Tech CV");
    doc.autoTable({
      margin: { top: 20 },
      head: headRows(),
      body: bodyRows(),
      showHead: true,
      headStyles: {
        valign: 'middle',
        halign: 'center'
      },
      columnStyles: {
        Id: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' },
        text:{cellwidth:"auto"},
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
              <th width="5%" align="left">No.</th>
              <th width="15%" align="left">Name</th>
              <th width="5%">Age</th>
              <th width="30%">Skills</th>
              <th width="30%">Education</th>
              <th width="20%">Emails</th>

            </tr>
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