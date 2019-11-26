import React from 'react';
import cvList from './cvlist';

// to show all available CVs


const CvShow = (listOfCV) => {
  console.log('props cvShow: ', listOfCV)

  const listItems = listOfCV.map((item, i) =>
    <tr>
      <td>{i + 1}.</td><td> {item.name}</td><td></td><td>{item.age}</td>
    </tr>
  );
  return (
    <div>
      <p></p>
      <table>
        <th>No.</th><th>Name</th><th></th><th>Age</th>
        <col width="10" />
        <col width="20" />
        <col width="20" />
        {listItems}
      </table>
    </div>
  );
}

export default CvShow;