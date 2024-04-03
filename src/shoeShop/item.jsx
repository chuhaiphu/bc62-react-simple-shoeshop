/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Item extends Component {

  render() {
    return (
      <div className="col mb-5">
        <div className="card h-100">
          <img className="card-img-top" src={this.props.shoe.image} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{this.props.shoe.name}</h5>
              ${this.props.shoe.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={() => this.props.viewDetails(this.props.shoe)}>View Details</a></div>
          </div>
        </div>
      </div>
    )
  }

}
