import React, { Component } from 'react'

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    handleOnInputQuantity = (event) => {
        if (event.target.value) {
            this.setState({
                [event.target.id]: event.target.value
            })
        }
        else {
            this.setState({
                [event.target.id]: 0
            })
        }
    }

    render() {
        return (
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-4">
                    <button className="btn btn-outline-primary mb-5" type="button" onClick={this.props.backToHome}>
                        Back to Home Page
                    </button>
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-4"><img className="card-img-top mb-5 mb-md-0 w-100" src={this.props.shoeDetail.image} alt="..." /></div>
                        <div className="col-md-8">
                            <div className="small mb-1 fs-4">{this.props.shoeDetail.name}</div>
                            <h1 className="display-5 fs-3 fw-bold mb-2" >{this.props.shoeDetail.shortDescription}</h1>
                            <div className="fs-5 mb-4">
                                PRICE: <span className="fw-bolder">${this.props.shoeDetail.price}</span>
                            </div>
                            <p className="lead">{this.props.shoeDetail.description}</p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" id="quantity" type="num" defaultValue={1} style={{ maxWidth: '3rem' }} onChange={this.handleOnInputQuantity} />
                                <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => this.props.add(this.props.shoeDetail, this.state.quantity)}>
                                    <i className="bi-cart-fill me-1" />
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
