import React from 'react';
import CvExport from './cvexport';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const CvShow = (listOfCV) => {
    const listItems = listOfCV.map((item, i) =>
        <tr key={i}><td>{i + 1}.</td><td> {item.Name}</td><td>{item.Age}</td><td>{item.Skills}</td><td>{item.Email}</td><td>{item.Age}</td></tr>
    );

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