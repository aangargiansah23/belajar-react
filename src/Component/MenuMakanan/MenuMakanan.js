import React from "react";

var MenuMakanan = (props) => {

  if (props.stock !== 0) {
    return (
      <div style={{border: '1px solid black', width: 300, margin: 'auto'}}>
        <p>Nama Makanan : {props.namaMenu} </p>
        <p>Harga : {props.hargaMenu}</p>
        <p>Stock : {props.stock}</p>
      </div>
  );
  } else {
    return null;
  }
};

export default MenuMakanan;