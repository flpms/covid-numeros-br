import React from 'react';

export const SpreadSheat = props => (
<div className="card">
    <p className="card-header">Planilha completa - {props.title}</p>

    <div className="card-body">
      <h4 className="card-title">Nome: {props.name}</h4>
      <p className="card-text">
        Nome do arquivo: {props.file.name}<br />
        {props.user && `Usuário: ${props.user}`}<br />
        {props.userId && `id: ${props.userId}`}
      </p>
    
      <a href={props.file.url} className="btn btn-primary">
        Fazer donwload
      </a>
    </div>
</div>)