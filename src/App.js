// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import MenuMakanan from './Component/MenuMakanan/MenuMakanan';
import MenuMinuman from './Component/MenuMinuman/MenuMinuman';

class App extends Component {
  constructor () {
    super();
    this.state = {
      namaResto : 'Codepolitan'
    }
  }

  handleGantiNama = (resto) => {
    this.setState({
      namaResto : resto,
    })
    
  }

  render () { 
    return (
      <div style={{width: 600, textAlign:'center', padding: '10px', margin:'auto'}}>
        <h1>Cafe and Resto {this.state.namaResto}</h1>
        <button onClick={()=> this.handleGantiNama('Programmer')}>Ganti Nama Resto</button>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu="Ayam Bakar" hargaMenu="25.000" />
        <h2>Menu Minuman</h2>
        <MenuMinuman namaMenu="Juice Melon" hargaMenu="15.000"/>
      </div>
    )
  }
}

export default App;
