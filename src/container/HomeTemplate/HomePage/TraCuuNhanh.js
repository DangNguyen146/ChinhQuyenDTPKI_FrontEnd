import React, { Component } from "react";

class TraCuuNhanh extends Component {
  render() {
    return (
      <div className="container TraCuuNhanh">
        <div className="row">
          <div className="d-none d-md-block col"></div>
          <div className="d-none d-md-block col-3">
            <div className="bg-blue w-100 py-3 px-4 rounded shadow text-center">
              <i
                class="fa fa-search mb-2 w-100"
                style={{ fontSize: "2rem" }}
              ></i>
              <p className="fw-bold">Tra cứu thủ tục hành chính</p>
            </div>
          </div>
          <div className="d-none d-md-block col-3">
            <div className="bg-blue w-100 py-3 px-4 rounded shadow text-center">
              <i
                class="fa fa-check-square mb-2 w-100"
                style={{ fontSize: "2rem" }}
              ></i>
              <p className="fw-bold">Tra cứu trang thái hộ sơ</p>
            </div>
          </div>
          <div className="d-none d-md-block col-3">
            <div className="bg-blue w-100 py-3 px-4 rounded shadow text-center">
              <i
                class="fa fa-circle-o mb-2 w-100"
                style={{ fontSize: "2rem" }}
              ></i>
              <p className="fw-bold">Nộp hồ sơ trực tuyến</p>
            </div>
          </div>
          <div className="d-none d-md-block col"></div>
        </div>
      </div>
    );
  }
}

export default TraCuuNhanh;
