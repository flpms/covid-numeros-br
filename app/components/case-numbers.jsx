import React from 'react';

export const CaseNumbers = props => <div className="col-md-auto">
  <h4 style={{textTransform:'capitalize'}}>{props.title}</h4>
  <p>
    {props.number}
  </p>
</div>;