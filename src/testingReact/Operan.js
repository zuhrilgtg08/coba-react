import React, { Component } from 'react'

export default class Operan extends Component {
    // gantiMakanan(nama_makanan) {
    //     this.setState({
    //         makanan: nama_makanan
    //     });
    // }

    render() {
        const {makanan, gantiMakanan} = this.props;
        return (
        <div>
            <h1>Operan State yang menjadi Props : {makanan}</h1>
            <button onClick={() => gantiMakanan("Soto")}>Change Makanan</button>
        </div>
        )
    }
}
