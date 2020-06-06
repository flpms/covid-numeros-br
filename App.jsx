import React, { Component } from 'react';

import SaudeAPI from './app/services/saude-api-v2';
import {Panel} from './app/components/panel';
import {SpreadSheat} from './app/components/spreadsheet';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };

    return this;
  }

  componentDidMount() {
    this.getCases();
  }

  getCases = async () => {
    try {
      this.setState({
        load: true
      });
      
      const [geral, geralV2] = await Promise.all([
        SaudeAPI.geral(),
        SaudeAPI.geralV2()
      ]);
  
      const [numbers, { results: [results]}] = await Promise.all([
        geral.json(),
        geralV2.json(),
      ]);

      this.setState({
        planilhas: {
          arquivo: results.arquivo,
          arquivo_srag: results.arquivo_srag
        },
        planilha: numbers.planilha,
        numbers: numbers,
        load: false
      });
    } catch(e) {
      console.error(e);
      this.setState({
        error: {
          message: 'Não foi possivel carregar dados',
          err
        }
      });
    }
  } 

  render() {

    if (this.state.error) {
      return <>
        <p>{this.state.error.message}</p>
        <code>{this.state.error.err}</code>
      </>
    }

    if (this.state.load && !this.state.numbers) {
      return <div className="dashboard container-fluid">Carregando</div>
    }

    return (
      <div className="dashboard container-fluid">
        <h1>Números de Covid19 no Brasil</h1>
        
        <p>
          Essa página consulta diretamente os dados do Ministério da Saúde<br />
          Por esse motivo pode apresentar inconsistencias.
        </p>

        <div className="card">
          <Panel title="Confirmados" data={
            (this.state.numbers && this.state.numbers.confirmados)
          }/>
        </div>

        <div className="card">
          <Panel title="Óbitos" data={
            (this.state.numbers && this.state.numbers.obitos)
          } />
        </div>

        {this.state.planilha && <SpreadSheat 
          title={"v1"}
          userId={this.state.planilha.usuario_id}
          name={this.state.planilha.nome}
          user={this.state.planilha.usuario}
          file={this.state.planilha.arquivo}
        />}

        {this.state.planilhas && <SpreadSheat
          title={`v2 - XLSX`}
          name={this.state.planilhas.arquivo.name}
          file={this.state.planilhas.arquivo}
        />}

        {this.state.planilhas && <SpreadSheat
          title={`v2 - CSV SRAG`}
          name={this.state.planilhas.arquivo_srag.name}
          file={this.state.planilhas.arquivo_srag}
        />}
      </div>
    )
  }
}

export default App