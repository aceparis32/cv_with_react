import React, {
    Component
} from 'react';

// class Footer extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Halaman Footer</h3>
//                 <h3>Component ini dibuat dengan menggunakan class</h3>
//             </div>
//         );
//     }
// }

// pemanggilan variabel harus menggunakan kurung siku { }
const Footer = function (props) {
    // var nama = 'Acep Aris Mubarok';
    return (
        <div>
            <h3>Halaman Footer</h3>
            <h3>Component ini dibuat dengan menggunakan function</h3>
            <p>Nilai ini ditampilkan dari props : { props.judul }</p>
            <p>Nama saya : { props.nama }</p>
        </div>
    );
}

export default Footer;