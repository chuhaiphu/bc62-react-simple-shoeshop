import React, { Component } from 'react'
import Item from './item'
export default class Section extends Component {
    renderShoeList = () => {
        return this.props.shoeList.map((shoe, index) => {
            return (
                <Item key={shoe.id} shoe={shoe} viewDetails={this.props.viewDetails} />
            )
        })
    }

    render() {
        return (
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-2">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {this.renderShoeList()}
                    </div>
                </div>
            </section>

        )
    }
}
