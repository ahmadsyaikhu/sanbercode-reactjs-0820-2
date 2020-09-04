import React, { Component } from "react";

class Tabel extends Component {
  render() {
    return (
      <div className="body">
        <div className="form">
          <table>
            <tr>
              <th>Nama :</th>
              <th>Harga :</th>
              <th>Berat :</th>
            </tr>
            <tr>
              <td>Nama :{this.props.item.nama}</td>
              <td>Harga :{this.props.item.harga}</td>
              <td>Berat :{this.props.item.berat}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Tabel;
