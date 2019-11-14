import React from 'react';
import cvList from './cvlist';

// to show all available CVs


function cvShow(props) {
  console.log('props: ',props)
  
  const listItems = props.map((item) =>
  <li key={Math.random()}>
    Name: {item.name} Age: {item.age}
  </li>
);
  return (
    <ul> {listItems}</ul>
  );
}

export default cvShow;