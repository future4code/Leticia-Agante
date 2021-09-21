import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";


export default class App extends React.Component{
  state = {
    etapa: 1
  }

  irParaProximaEtapa = () => {
    const ProximaEtapa = this.state.etapa + 1;
    this.setState({etapa: ProximaEtapa});
  }
  
  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;  
      case 4:
        return <Final />;   
    }
  }

  mostrarBotao = () => {
    if (this.state.etapa <= 3 ){
      return(<button onClick={this.irParaProximaEtapa}>Próxima etapa</button>)
    }
  }

  render() {
    return(
      <div>
        {/* aparece na tela */}
        {this.renderizaEtapa()}

        {this.mostrarBotao()}
      </div>
    );
  }
}

