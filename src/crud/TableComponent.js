import React from 'react';
import {Table} from 'react-bootstrap';

const TableComponent = ({foods, editData, deleteData}) => {
    return (
        <div>
            <Table striped bordered hover className='text-center'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama Makanan</th>
                        <th>Deskripsi</th>
                        <th>Harga</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{food.nama}</td>
                                <td>{food.deskripsi}</td>
                                <td>{food.harga}</td>
                                <td colSpan={2}>
                                    <button className='btn btn-success w-100 mb-2' onClick={() => editData(food.id)}>Edit Data</button>
                                    <button className='btn btn-danger w-100' onClick={() => deleteData(food.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default TableComponent