import React, {
    Component
} from "react";

class Header extends Component {
    // State digunakan untuk menyimpan data yang nanti akan digunakan oleh Component.
    // Sebaiknya data yang dikirim dari App.js disimpan ke dalam state lalu baru ditampilkan di dalam komponen menggunakan state.
    constructor(props){
        super(props);

        this.state = {
            judul: 'Ini judul dari state',
            dataMakanan: props.list,
        };        
    }

    render() {
      return (
        <div>
            <h2>Makanan Khas Indonesia</h2>
            <h2>Component dari Class Header</h2>
            <h3>{ this.state.judul }</h3>
            <h3>Mengakses props dari App secara langsung : { this.props.list }</h3>
            <h3>Mengkases props dari State : { this.state.dataMakanan }</h3>
        </div>
      );
    }
}

// export bisa dilakukan ketika membuat component, seperti :
// export default class Header extends Component {}
export default Header;