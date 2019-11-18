import React from 'react';
import * as jsPDF from 'jspdf'

//object to create PDF
let doc = new jsPDF()
let textOut = ''
let i=1
const cvExport = (exportList) => {
  console.log('exportList :', exportList)
  //doc.text(text,column, row)
  exportList.map((item) => {
    doc.text('Name:' + item.name + '   Age:' + item.age + '\r\n', 10, 10*i)
    i=i+1
    // doc.addImage('./src/employee.jpg','JPEG', 10, 10*i,20,20)
    // i=i+4
  })
    //console.log(textOut)
    //doc.text(textOut,10,10)
    doc.save('cvListExport.pdf')
}

export default cvExport;