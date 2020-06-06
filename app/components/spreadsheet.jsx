import React from 'react';

export const SpreadSheat = props => (
<div className="card">
    <p className="card-header">Planilha completa</p>

    <div class="card-body">
      <h4 className="card-title">Nome: {props.name}</h4>
      <p class="card-text">
        Usuário: {props.user} <br />
        id: {props.userId} <br />
        Nome do arquivo: {props.file.name}
      </p>
    
      <a href={props.file.url} className="btn btn-primary">
        Fazer donwload
      </a>
    </div>
</div>)