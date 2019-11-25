import React from 'react';
import cvList from './cvlist';

// to show all available CVs


const CvShow = (listOfCV) => {
  console.log('props cvShow: ',listOfCV)

  const listItems = listOfCV.map((item,i) =>
  <li key={Math.random()}>
    Name: {item.name} Age: {item.age}
  </li>
);
  return (
    <ul> {listItems}</ul>
  );
}

export default CvShow;