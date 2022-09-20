import './App.css';
import {Component} from "react";
import {Header} from "./Header/index";
import { Footer } from './Footer';
import { Search } from './SearchODAS';
import { ListODAS } from './ListODAS';

class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

render(){
  return (
    <section className='container'>

      <div><Header/></div>
      

      <Search
        busca={this.state.busca}
        buscaODA={this.buscaODA}
        />
      <div className='posts'>
      <ListODAS
      odas={this.state.odas}
      />
      </div>


          <Footer/>
      
    </section>
  );
}
}
export default App;
