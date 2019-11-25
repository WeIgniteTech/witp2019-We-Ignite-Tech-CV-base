import React from 'react';
import * as jsPDF from 'jspdf'
// npm install jspdf --save
// import * as jsPDF from 'jspdf'


//object to create PDF
let doc = new jsPDF()
let textOut = ''
const CvExport = (item) =>{

const CvExportList = (exportList) => {
  console.log('exportList :', exportList)
  console.log('length of item:', exportList.length)
  let i=1
  //doc.text(text,column, row)
  exportList.map((item) => {
    doc.text('Name:' + item.name + '   Age:' + item.age + '\r\n', 10, 10*i)
    i=i+1
  })

    doc.save('cvListExport.pdf')
}
const CvExportItem = (exportItem) => {
  console.log('export item :', exportItem)
  doc.text('Name:' + exportItem.name + '   Age:' + exportItem.age + '\r\n', 10, 10)
  doc.save('cvListExport.pdf')
}
if (Array.isArray(item)) {
  CvExportList(item)
}else {CvExportItem(item)}
}

export default CvExport;