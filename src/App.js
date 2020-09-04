import React from "react";
import "./App.css";
import Form from "./tugas-9/form";
import Tabel from "./tugas-10/tabel";

function App() {
  let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
  ];
  return (
    <>
      <Form />
      {/* {data.map((el) => {
        return <Tabel item={el} />;
      })} */}
    </>
  );
}

export default App;
