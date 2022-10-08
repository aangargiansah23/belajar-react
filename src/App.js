// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import MenuMakanan from './Component/MenuMakanan/MenuMakanan';
import MenuMinuman from './Component/MenuMinuman/MenuMinuman';

class App extends Component {
  constructor () {
    super();
    this.state = {
      namaResto : 'Codepolitan',
      menuMakanan : [
        {nama : 'Ayam Bakar', harga : 25000, stock : 10},
        {nama : 'Nasi Goreng', harga : 22000, stock : 0},
      ]
    }
  }

  handleGantiNama = (resto) => {
    this.setState({
      namaResto : resto,
    })
    
  }

  render () { 
    return (
      <div className='App'>
        <h1>Cafe and Resto {this.state.namaResto}</h1>
        <button onClick={()=> this.handleGantiNama('Programmer')}>Ganti Nama Resto</button>
        <h2>Menu Makanan</h2>
        <MenuMakanan
          namaMenu={this.state.menuMakanan[0].nama}
          hargaMenu={this.state.menuMakanan[0].harga}
          stock={this.state.menuMakanan[0].stock}
        />
        <MenuMakanan
          namaMenu={this.state.menuMakanan[1].nama}
          hargaMenu={this.state.menuMakanan[1].harga}
          stock={this.state.menuMakanan[1].stock}
        />
        <h2>Menu Minuman</h2>
        <MenuMinuman namaMenu="Juice Melon" hargaMenu="15.000"/>
      </div>
    )
  }
}

export default App;
