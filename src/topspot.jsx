import React from 'react';

export default props => (
  <div classname="well">
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a
      href={
        'https://maps.google.com/?q=' +
        props.location[0] +
        ',' +
        props.location[1]
      }
      rel="noopener"
    >
      <button className="btn btn-primary">View on Map</button>
    </a>
  </div>
);
