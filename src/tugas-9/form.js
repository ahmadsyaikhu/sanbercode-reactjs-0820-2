import React from "react";

function Form() {
  return (
    <div className="body">
      <div className="form">
        <h1>Form pembelian Buah</h1>
        <table>
          <tr>
            <th>
              <label style={{ fontWeight: "bold" }}>Nama Pelanggan : </label>
            </th>
            <th>
              <input type="teks" />
            </th>
          </tr>
          <tr>
            <th>
              <label style={{ fontWeight: "bold" }}>Daftar Item : </label>
            </th>
            <td>
              <input type="checkbox" />
              <label>Semangka</label>
              <br />
              <input type="checkbox" />
              <label>Jeruk</label>
              <br />
              <input type="checkbox" />
              <label>Nanas</label>
              <br />
              <input type="checkbox" />
              <label>Salak</label>
              <br />
              <input type="checkbox" />
              <label>Anggur</label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="Kirim"></input>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Form;
