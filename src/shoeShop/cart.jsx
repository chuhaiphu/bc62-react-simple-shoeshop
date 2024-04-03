import React, { Component } from "react";

export default class Cart extends Component {

  renderModalCart = () => {
    return this.props.cart.map((shoeInCart) => {
      return (
        <tr key={shoeInCart.id}>
          <td>{shoeInCart.id}</td>
          <td>{shoeInCart.name}</td>
          <td>
            <img src={shoeInCart.image} width={100} alt="" />
          </td>
          <td>
            <button onClick={() => this.props.updateQuantity(shoeInCart.id, false)}>-</button> {shoeInCart.soLuong} <button onClick={() => this.props.updateQuantity(shoeInCart.id, true)}>+</button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => this.props.deleted(shoeInCart.id)}>Delete</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">SHOES IN CART</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Codes</th>
                    <th>Shoes Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderModalCart()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
