import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";
import { actListHoSoApi } from "./modules/action";

class Dashboard extends Component {
  componentDidMount() {
    document.title = "Dich vụ công | Trạng thái hồ sơ";
    this.props.fetchListHoSo();
  }
  render() {
    const renderHtml = () => {
      const { loading, data } = this.props;
      if (loading) return <Loader key={9999999} />;
      return (
        data &&
        data.map((item) => {
          return (
            <>
              <div className="col-12">
                <div className="border rounded border-1 my-3 px-3 py-3">
                  <h4>{item.title}</h4>
                  <p className="my-2 text-black-50">
                    Họ và tên: <strong>{item.fullname}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    CMND: <strong>{item.cmnd}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Ngày tháng năm sinh:{" "}
                    <strong>{item.ngaythangnamsinh}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Số nhà: <strong>{item.sonha}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Huyện nhà: <strong>{item.huyennha}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Tỉnh nhà: <strong>{item.tinhnha}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Số điện thoại: <strong>{item.sdt}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Email: <strong>{item.email}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Tiêu đề: <strong>{item.title}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Hồ Sơ: <strong>{item.hoso}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Description: <strong>{item.description}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Thư mục: <strong>{item.category}</strong>
                  </p>
                  <p className="my-2 text-black-50">
                    Loại: <strong>{item.field}</strong>
                  </p>
                  <button className="btn btn-primary float-end px-5">Ký</button>
                </div>
              </div>
            </>
          );
        })
      );
    };
    return (
      <div className="mt-5 pt-5">
        <div className="container bg-white rounded shadow">
          <h2 className="text-center pt-3">Hồ sơ</h2>
          <div className="container mt-5 mb-2">
            <div className="row">{renderHtml()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listHoSoReducer.loading,
    data: state.listHoSoReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListHoSo: () => {
      dispatch(actListHoSoApi());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
