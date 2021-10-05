import React from 'react';
//import shortid from 'shortid';
import Star from './Star';
import PropTypes from 'prop-types';

export default function Stars(props) {
  const count = props.count;
  
  let starsArr = [];
  for (let i = 0; i<count; i++) {
    //const a = shortid.generate();
    const keyI = i + Math.random();
    starsArr.push(<li key={keyI}><Star/></li>)
  }

  return (
    count ? <ul className="card-body-stars">
    {starsArr}
  </ul> : ''
  )
}

Stars.propTypes = {
  count: PropTypes.number
}

Stars.defaultProps = {
  count: 0
}
