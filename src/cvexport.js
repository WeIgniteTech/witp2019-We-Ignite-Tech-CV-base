import * as jsPDF from 'jspdf'
// npm install jspdf --save
// import * as jsPDF from 'jspdf'
//https://www.npmjs.com/package/jspdf

//npm install jspdf jspdf-autotable
//https://github.com/simonbengtsson/jsPDF-AutoTable

//object to create PDF

const CvExport = (item) => {
  let doc = new jsPDF()
  const CvExportList = (exportList) => {
    console.log('exportList :', exportList)
    console.log('length of item:', exportList.length)
    let i = 1
    //doc.text(text,column, row)

    exportList.map((item) => {
      doc.text('Name:' + item.name + '   Age:' + item.age + '\r\n', 10, 10 * i)
      i = i + 1
    })
    doc.save('cvListExport.pdf')
  }

    CvExportList(item)

}

export default CvExport;