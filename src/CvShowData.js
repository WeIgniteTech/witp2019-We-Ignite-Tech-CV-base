import React from 'react';
import CvExport from './cvexport';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const CvShowData = (listOfCV) => {
    const listItems = listOfCV.map((item, i) =>
       // <tr key={i}><td>{i + 1}.</td><td> {item.Name}</td><td>{item.Skills}</td><td>{item.Email}</td><td>{item.Age}</td></tr>
       console.log(item)
    );
    console.log('List of CV cvdatashow', listOfCV)
    console.log('listItems', listItems)
    const ExportCV = (event) => {
        event.preventDefault()
        //CvExport(listOfCV)
        const doc = new jsPDF();

        const headRows = () => {
            return [{ id: 'ID', name: 'Name', Age: 'Age' }];
        }
        const bodyRows = () => {
            const showTableContent = listOfCV.map((item, i) =>
                [i + 1, item.name, item.age]
            );
            return showTableContent
        }
        doc.setFontSize(22);
        doc.setFontType("bold");
        doc.text(80, 12, "WIT CV list");
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
                id: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' },
                text: { cellWidth: 'auto' },
                id: { columnWidth: 10 },
                name: { columnWidth: 100 },
                Age: { columnWidth: 80 },
            }

        });
        doc.save('table.pdf');
    }
    return (
        <div>
            <div>
                <p></p>
                <table>
                    <tbody>
                        <tr>
                            <th width="10" align="left">No.</th><th width="30" align="left">Name</th><th width="50">Skills</th><th width="50">email</th><th width="10">Age</th></tr>
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

export default CvShowData;