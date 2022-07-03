import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import FormComponent from './FormComponent';
import NavbarComponent from './NavbarComponent';
import TableComponent from './TableComponent';

export default class Crud extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            foods: [],
            nama: "",
            deskripsi: "",
            harga: 0,
            id: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // console.log("Data", this.state);

        if(this.state.id === ""){
                this.setState({
                foods: [
                    ...this.state.foods,
                    {
                        id: this.state.foods.length+1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            });
        } else{
            const foodNotSelect = this.state.foods
            .filter((food) => food.id !== this.state.id)
            .map((foodFilter) => {
                return foodFilter
            });

            this.setState({
                foods: [
                    ...foodNotSelect,
                    {
                        id: this.state.foods.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            });
        }

        this.setState({
            nama: "",
            deskripsi: "",
            harga: 0,
            id: ""
        });
    }

    editData = (id) => {
        const foodSelect = this.state.foods
            .filter((food) => food.id === id)
            .map((foodFilter) => {
                return foodFilter
            });
        
            this.setState({
                nama: foodSelect[0].nama,
                deskripsi: foodSelect[0].deskripsi,
                harga: foodSelect[0].harga,
                id: foodSelect[0].id
            });
    }

    deleteData = (id) => {
        const foodDelete = this.state.foods
            .filter((food) => food.id !== id)
            .map((foodFilter) => {
                return foodFilter
            });

        this.setState({
            foods: foodDelete
        });
    }

    render() {
        console.log(this.state.foods);
        return (
            <div>
                <NavbarComponent/>
                <Container className='mt-3'>
                    <Row>
                        <Col>
                            <h2>Testing Crud</h2>
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <TableComponent foods={this.state.foods} editData={this.editData} deleteData={this.deleteData}/>
                    </Row>

                    <Row className='mt-3'>
                        <div class="col-md-8 mb-3">
                            <h2 class="mb-4">Form Create & Edit</h2>
                            <FormComponent {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}
