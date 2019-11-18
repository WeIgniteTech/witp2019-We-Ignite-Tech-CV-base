import React from 'react';
import * as jsPDF from 'jspdf'

//object to create PDF
let doc = new jsPDF()
let textOut = ''

const cvExport = (exportList) => {
  console.log('exportList :', exportList)
  exportList.map((item) => {
    textOut += 'Name:' + item.name + '   Age:' + item.age + '\r\n'
  })
    console.log(textOut)
    doc.text(textOut,10,10)
    doc.save('cvListExport.pdf')
}

export default cvExport;