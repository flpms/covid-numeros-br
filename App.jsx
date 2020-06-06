import React, { Component } from 'react';

import SaudeAPI from './app/services/saude-api';
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
      const result = await SaudeAPI();
      const numbers = await result.json();

      this.setState({
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
          userId={this.state.planilha.usuario_id}
          name={this.state.planilha.nome}
          user={this.state.planilha.usuario}
          file={this.state.planilha.arquivo}
        />}

      </div>
    )
  }
}

export default App