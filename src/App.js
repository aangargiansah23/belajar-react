// import logo from './logo.svg';
import './App.css';
import MenuMakanan from './Component/MenuMakanan/MenuMakanan';
import MenuMinuman from './Component/MenuMinuman/MenuMinuman';

function App() {
  return (
    <div className="App">
      <h1>Cafe and Resto Codepolitan</h1>
      <h2>Menu Makanan</h2>
      <MenuMakanan namaMenu="Ayam Bakar" hargaMenu="25.000" />
      <h2>Menu Minuman</h2>
      <MenuMinuman namaMenu="Juice Melon" hargaMenu="15.000"/>
    </div>
  );
}

export default App;
