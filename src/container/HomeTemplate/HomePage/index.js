import React, { Component } from "react";
import Footer from "../Footer";
import IntroDVC from "./IntroDVC";
import SliderCarosel from "./SliderCarosel";
import ThongKETinhHinhThuLy from "./ThongKETinhHinhThuLy";
import TraCuuNhanh from "./TraCuuNhanh";

export default class HomePage extends Component {
  componentDidMount() {
    document.title = "Trang chủ | Dịch vụ công";
  }
  render() {
    return (
      <div className="pt-4 mt-5">
        <SliderCarosel />
        <TraCuuNhanh />
        <IntroDVC />
        <ThongKETinhHinhThuLy />
        <Footer />
      </div>
    );
  }
}
