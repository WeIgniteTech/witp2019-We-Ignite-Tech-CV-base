import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
//export CV to PDF
//https://react-pdf.org/
//create style
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Name:Age:</Text>
      </View>
    </Page>
  </Document>
);

 function cvExport(exportList) {
  console.log('exportList :', exportList)
  const listItems = exportList.map((item) =>
    <View style={styles.section}>
      <Text>Name: {item.name} Age: {item.age}</Text>
    </View>
   );
}

ReactPDF.render(<MyDocument/>, `./cvlist.pdf`);

export default cvExport;