import React from "react";

var MenuMakanan = (props) => {
  return (
      <div style={{border: '1px solid black', width: 300, margin: 'auto'}}>
        <p>Nama Makanan : {props.namaMenu} </p>
        <p>Harga : {props.hargaMenu}</p>
      </div>
  );
};

export default MenuMakanan;