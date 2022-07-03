import React from 'react'

const makanan = [
    {
        nama: 'Basko',
        harga: 12000
    },
    {
        nama: 'Soto',
        harga: 10000
    },
    {
        nama: 'Mie Ayam',
        harga: 7000
    },
    {
        nama: 'Rawon',
        harga: 15000
    },

    {
        nama: 'Rawon',
        harga: 15000
    }
];

const totalBayar = makanan.reduce((totalHarga, makanan) => {
    return totalHarga + makanan.harga;
}, 0);

const Map = () => {
    return (
        <div>
            <h2>Map</h2>
            <ul>
                {makanan.map((food, index) => (
                    <li>{index+1}. {food.nama} - {food.harga}</li>
                ))}
            </ul>

            <h2>Map, Filter harga lebih dari 12000</h2>
            <ul>
                {makanan.filter((food) => food.harga > 12000)
                    .map((food, index) => (
                        <li>{index+1}. {food.nama} - {food.harga}</li>
                    ))}
            </ul>

            <h2>Map, Reduce total semua harga : {totalBayar}</h2>
            
        </div>
    )
}

export default Map