import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Top from './Top';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Header list='10 Daftar Makanan'/>
        <Top/>
        <h1>Hello World!</h1>
        <List/>
        <Footer judul='Halaman Footer' nama='Acep Aris Mubarok'/>
      </div>
    );
  }
}

// Contoh membuat component function
// const Footer = function () {
//   return (
//     <div>
//       <h3>Halaman Footer</h3>
//       <h3>Component ini dibuat dengan menggunakan function</h3>
//     </div>
//   );
// }

export default App;
