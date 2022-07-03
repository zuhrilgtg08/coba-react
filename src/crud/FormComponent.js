import React from 'react';
import {Form, Button} from 'react-bootstrap';

const FormComponent = ({nama, deskripsi, harga, handleChange, handleSubmit}) => {
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="makanan">
                    <Form.Label>Nama Makanan</Form.Label>
                    <Form.Control type="text" placeholder="Input Nama Makanan" name="nama" value={nama} onChange={(event) => handleChange(event)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="deskripsiMakanan">
                    <Form.Label>Deskripsi Makanan</Form.Label>
                    {/* <Form.Control type="text" placeholder="Input Tentang Makanan" /> */}
                    <Form.Control as="textarea" name="deskripsi" placeholder="Deskripsi" style={{ height: '100px' }} value={deskripsi} onChange={(event) => handleChange(event)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="hargaMakanan">
                    <Form.Label>Harga</Form.Label>
                    <Form.Control type="number" name="harga" placeholder="Harga Makanan" value={harga} onChange={(event) => handleChange(event)}/>
                </Form.Group>

                <Button variant="success" type="submit">
                    Save & Change
                </Button>
            </Form>
        </div>
    )
}

export default FormComponent