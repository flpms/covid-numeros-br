import React, { Component } from 'react';

import { CaseNumbers } from './case-numbers';

export const Panel = props =>{
  if (!props.data) {
    return <div>Carregando</div>
  }

  const numbers = Object.keys(props.data)
    .sort()
    .filter(key => key !== 'titulo')
    .filter(key => props.data[key])
    .map((key,i) => <CaseNumbers key={key+i} title={key} number={props.data[key]} />)

  return (
    <div className="card-body">
      <h2 className="card-title">{props.title}</h2>
      <div className="row justify-content-between">
        {numbers}
      </div>
    </div>
  );
}