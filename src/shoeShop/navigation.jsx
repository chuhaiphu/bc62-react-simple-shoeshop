import React, { Component } from 'react'
import Cart from './cart'
export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Doan Vinh Phu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
            </ul>
            <button className="btn btn-outline-dark" data-toggle="modal"
              data-target="#modelId">
              <i className="bi-cart-fill me-1" />
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{this.props.totalQuantity()}</span>
            </button>
            <Cart cart={this.props.cart} deleted={this.props.deleted} updateQuantity={this.props.updateQuantity} />
          </div>
        </div>
      </nav>

    )
  }
}
