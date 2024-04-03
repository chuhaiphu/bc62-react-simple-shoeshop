import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="bg-dark py-2">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h1 className="display-4 fw-bolder">SHOE SHOP</h1>
                            <p className="lead fw-normal text-white-50 mb-0">One step closer</p>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
