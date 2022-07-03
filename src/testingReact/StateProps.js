import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan : 'Bakso'
        }
    }

    gantiMakanan = (nama_makanan) => {
        this.setState({
            makanan: nama_makanan
        });
    }

    render() {
        return (
        <div>
            <h2>{this.state.makanan}</h2>
            <button onClick={() => this.gantiMakanan("tes")}>Change Makanan</button>
            <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
        </div>
        );
    }
}
