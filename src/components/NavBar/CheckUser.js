import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogoutApi } from "../../container/HomeTemplate/ManagerUser/Login/modules/actionforLogin";

class User extends Component {
  handelOnLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userKH");
    this.props.fectchLogOut();
  };
  render() {
    const userData = this.props.userLoginReducer;
    if (userData) {
      return (
        <>
          <a
            className="nav-link dropdown-toggle text-black"
            href="#"
            id="navbarDropdownUser"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Chào, {userData.username}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownUser">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link
                className="dropdown-item"
                onClick={() => {
                  this.handelOnLogout();
                }}
                to="/"
              >
                Đăng xuất
              </Link>
            </li>
          </ul>
        </>

        // <div className="dropdown">
        //   <a
        //     className="text-dark text-decoration-none dropdown-toggle px-3"
        //     data-bs-toggle="dropdown"
        //     data-bs-display="static"
        //     aria-expanded="false"
        //     style={{ cursor: "pointer" }}
        //   >
        //     Chào, {userData.username}
        //   </a>
        //   <ul className="dropdown-menu dropdown-menu-lg-end">
        //     <li>
        //       <a className="dropdown-item" href="#">
        //         Menu item
        //       </a>
        //     </li>
        //     <li>
        //       <a className="dropdown-item" href="#">
        //         Menu item
        //       </a>
        //     </li>
        //     <li>
        //       <Link
        //         className="dropdown-item"
        //         onClick={() => {
        //           this.handelOnLogout();
        //         }}
        //         to="/"
        //       >
        //         Đăng xuất
        //       </Link>
        //     </li>
        //   </ul>
        // </div>
      );
    } else {
      return (
        <div>
          <Link to="/login" className="nav-link text-black mx-2">
            Đăng nhập / Đăng ký
          </Link>
        </div>
      );
    }
  }
}
const mapStapToProps = (state) => {
  return {
    userLoginReducer: state.userLoginReducer.data,
    err: state.userLoginReducer.err,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fectchLogOut: () => {
      dispatch(LogoutApi());
    },
  };
};

export default connect(mapStapToProps, mapDispatchToProps)(User);