import React, { Component } from 'react'

// memanggil props di class tidak perlu memasukkan parameter seperti function
// jangan lupa panggil this dulu
class Image extends Component {
    render() {
        return (
            <div>
                {/* <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" alt="Food" width='500' /> */}
                <img src={ this.props.linkGambar } alt="Food" width='500'/>
            </div>
        )
    }
}

export default Image;