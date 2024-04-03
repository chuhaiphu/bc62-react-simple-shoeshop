import React, { Component } from 'react'
import Navigation from './navigation'
import Header from './header'
import Section from './section'
import Footer from './footer'
import ItemDetails from './item-details'
import data from './data.json'

export default class ShoeShop extends Component {
  state = {
    viewDetails: false,
    shoeList: data,
    shoeDetail: null,
    cart: [],
  };

  handleViewDetails = (shoe) => {
    this.setState({
      viewDetails: true,
      shoeDetail: shoe
    });
  };

  handleBackToHome = () => {
    this.setState({ viewDetails: false });
  }

  handleAddedShoe = (shoe, quantity) => {
    const shoeInCart = {
      id: shoe.id,
      name: shoe.name,
      image: shoe.image,
      soLuong: parseInt(quantity),
    }
    // todo clone cart ra ngoài để xử lý
    const updatedCart = [...this.state.cart]
    // todo khi thêm vào giỏ hàng, tìm trong giỏ hàng có sản phẩm cùng loại hay không
    const existingShoeIndex = this.state.cart.findIndex(s => s.id === shoe.id)
    // todo nếu có, update số lượng của sản phẩm đó
    if (existingShoeIndex >= 0) {
      updatedCart[existingShoeIndex].soLuong += parseInt(quantity)
    }
    // todo nếu không, thêm sản phẩm mới vào giỏ hàng
    else {
      updatedCart.push(shoeInCart)
    }
    // todo cập nhật lại giỏ hàng
    this.setState({
      cart: updatedCart
    })
  }

  handleDeleteShoe = (shoeId) => {
    const updatedCart = [...this.state.cart];
    updatedCart.splice(this.state.cart.findIndex(s => s.id === shoeId), 1);
    this.setState({
      cart: updatedCart
    })
  }

  handleUpdateQuantity = (shoeId, isPlus) => {
    const updatedCart = [...this.state.cart];
    const shoeIndex = this.state.cart.findIndex(s => s.id === shoeId);

    if (isPlus) {
      updatedCart[shoeIndex].soLuong += 1;
    }
    else {
      if (updatedCart[shoeIndex].soLuong > 1) {
        updatedCart[shoeIndex].soLuong -= 1;
      }
    }
    this.setState({
      cart: updatedCart
    })
  }

  getCartTotalQuantity = () => {
    // ? hàm reduce hoạt động như sau:
    // todo 1. đối số đầu tiên là callbackFunction, đối số thứ hai là vị trí bắt đầu
    // todo 2. hàm sẽ duyệt qua lần lượt tất cả phần tử trong mảng gọi hàm reduce
    // todo 3. mỗi lần duyệt mảng, hàm sẽ chạy callbackFunction (accumulator, current)
    // todo 3.1. accumulator là giá trị sẽ được xử lý và thay đổi xuyên suốt quá trình duyệt mảng
    // todo 3.2. current là giá trị hiện tại trong mỗi lần duyệt mảng đó
    // todo 3.3. callbackFunction sẽ chạy như sau:
    // todo 3.3.1. mỗi lần duyệt mảng, lấy giá trị accumulator xử lý với current
    // todo 3.3.2. rồi lưu giá trị accumulator cho lần duyệt mảng tiếp theo, cho tới hết mảng
    // todo 3.3.3. sau khi duyệt hết mảng, trả về giá trị total cho hàm reduce        
    return this.state.cart.reduce((totalQuantity, shoe) => {
      return totalQuantity + shoe.soLuong
    }, 0)
  }

  render() {
    if (this.state.viewDetails) {
      return <ItemDetails shoeDetail={this.state.shoeDetail} backToHome={this.handleBackToHome} add={this.handleAddedShoe} />;
    }
    return (
      <>
        <Navigation cart={this.state.cart} deleted={this.handleDeleteShoe} updateQuantity={this.handleUpdateQuantity} totalQuantity={this.getCartTotalQuantity} />
        <Header />
        <Section viewDetails={this.handleViewDetails} shoeList={this.state.shoeList} />
        <Footer />
      </>
    )
  }
}
