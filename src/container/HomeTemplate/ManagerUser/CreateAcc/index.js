import React, { Component } from "react";
import { fetchCreateApi } from "./modules/action";
import { connect } from "react-redux";

class CreateAcc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: "",
    };
  }
  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    this.props.fetchCreate(this.state, this.props.history);
  };
  render() {
    const { loading } = this.props;
    if (loading)
      return (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    return (
      <section className="loginPage container-fluid mt-5 pt-4">
        <div className="row">
          <div
            className="col-12 col-md-4 imgbackgroud"
            style={{
              backgroundImage:
                "url(" + process.env.PUBLIC_URL + "/img/backgroud.png)",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="col-12 col-md-8">
            <div className="container">
              <div className="row">
                <div className="d-none d-md-block col"></div>
                <div className="col-12 col-md-8 mt-5">
                  <form
                    className="mb-5 mt-md-5"
                    onSubmit={this.handleLogin}
                    action="#"
                  >
                    <h2 className="text-center fw-bolder">Đăng ký</h2>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputNamefirst_name"
                        className="form-label"
                      >
                        Họ
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputNamefirst_name"
                        name="first_name"
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputNamelast_name"
                        className="form-label"
                      >
                        Tên
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputNamelast_name"
                        name="last_name"
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputNameusername"
                        className="form-label"
                      >
                        Tên đăng nhâp
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputNameusername"
                        name="username"
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword"
                        className="form-label"
                      >
                        Mật khẩu
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword"
                        name="password"
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputemail" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputemail"
                        name="email"
                        onChange={this.handleOnChange}
                      />
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="btn buttonPurple px-2 ">
                        Đăng ký
                      </button>
                    </div>
                  </form>
                </div>
                <div className="d-none d-md-block col"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col d-none d-md-block"></div>
            <div
              className="col-12 col-md-8 bg-light"
              style={{
                marginTop: 200,
              }}
            >
              <div className="row">
                <div className="col-6 p-0">
                  <div
                    className="h-100"
                    style={{
                      backgroundImage:
                        "url(" + process.env.PUBLIC_URL + "/img/44.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className="col-6 p-0">
                  <div className="container py-5 rounded shadow overflow-hidden">
                    <h2 className="text-center">Đăng nhập</h2>
                    <form onSubmit={this.handleLogin} action="#">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputNamefirst_name"
                          className="form-label"
                        >
                          Họ
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputNamefirst_name"
                          name="first_name"
                          onChange={this.handleOnChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputNamelast_name"
                          className="form-label"
                        >
                          Tên
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputNamelast_name"
                          name="last_name"
                          onChange={this.handleOnChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputNameusername"
                          className="form-label"
                        >
                          Tên đăng nhâp
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputNameusername"
                          name="username"
                          onChange={this.handleOnChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword"
                          className="form-label"
                        >
                          Mật khẩu
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword"
                          name="password"
                          onChange={this.handleOnChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputemail"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputemail"
                          name="email"
                          onChange={this.handleOnChange}
                        />
                      </div>

                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          className="btn buttonPurple px-2 "
                        >
                          Đăng nhập
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col d-none d-md-block"></div>
          </div>
        </div> */}
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.userCreateReducer.loading,
    err: state.userCreateReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCreate: (user, histoty) => {
      dispatch(fetchCreateApi(user, histoty));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateAcc);