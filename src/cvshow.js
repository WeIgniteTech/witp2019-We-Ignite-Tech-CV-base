import React from 'react';
import cvList from './cvlist';

// to show all available CVs


function cvShow(listOfCV) {
  console.log('props: ',listOfCV)
  
  const listItems = listOfCV.map((item) =>
  <li key={Math.random()}>
    Name: {item.name} Age: {item.age}
  </li>
);
  return (
    <ul> {listItems}</ul>
  );
}

export default cvShow;