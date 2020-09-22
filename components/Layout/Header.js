import Link from "next/link";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout, selectUser } from "../../lib/slices/userSlice";
import { useRouter } from "next/router";
const Header = () => {
  //Redux
  const dispatch = useDispatch();
  const { token } = useSelector(selectUser);
  const handleSubmit = (e) => {
    console.log("asdasdasdasdasdasdadsdsa");
    e.preventdefault();
    router.push({
      pathname: "/products",
    });
  };

  const router = useRouter();
  return (
    <>
      {/* Topbar */}
      <section id="main-topbar">
        <div className="container">
          <div>Work time: Monday - Friday: 08AM-06-PM</div>
          <div>
            <ul>
              <li>
                <Link href="/login" as="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/register" as="/register">
                  <a>Register</a>
                </Link>
              </li>
              <li>
                <a href="#">Vietnamese</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <section id="main-navbar">
        <div className="navbar-2">
          <div className="container">
            <Link href="/">
              <div className="logo">Oganic</div>
            </Link>
            <form
              className="search"
              onSubmit={(e) => {
                e.preventDefault();
                router.push({
                  pathname: "/products",
                });
              }}
            >
              <input type="text" placeholder="Nhập từ khóa" />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
            <div className="icons">
              <div className="heart-icon">
                <Link href="#">
                  <a className="favorite-link">
                    <span className="flaticon-heart">
                      <div className="number">1</div>
                    </span>
                  </a>
                </Link>

                <div>
                  <Link href="/favorite" as="/favorite">
                    <a>
                      <p>Danh sách</p>
                      <p>yêu thích</p>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="cart-icon">
                <Link href="/cart" as="/cart">
                  <a className="cart-link">
                    <span className="flaticon-shopping-cart">
                      <div className="number">12</div>
                    </span>
                    <div>
                      <p>Giỏ</p>
                      <p>Hàng</p>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="user-icon">
                <div className="user-btn">
                  <a>
                    <i className="fas fa-user" />
                  </a>

                  <a>
                    <p>Tài khoản</p>
                  </a>
                </div>
                <div className="user-container">
                  {token == "" ? (
                    <div className="user-menu">
                      <h6>
                        Welcome to <strong>Organic</strong>
                      </h6>
                      <Link href="/login" as="/login">
                        <a>
                          <button className="login-btn">Đăng nhập</button>
                        </a>
                      </Link>
                      <div className="py-1" />
                      <span>Bạn là khách hàng mới?</span>
                      <Link href="/register" as="/register">
                        <a>
                          <button className="register-btn">Đăng kí</button>
                        </a>
                      </Link>
                    </div>
                  ) : (
                    <div className="user-menu">
                      <h6>
                        Welcome <strong>Username</strong>
                      </h6>
                      <Link href="/user/info" as="/user/info">
                        <a>
                          <button className="login-btn">Profile</button>
                        </a>
                      </Link>
                      <div className="py-1" />

                      <button
                        className="register-btn"
                        onClick={() => {
                          dispatch(logout());
                        }}
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-1">
          <div className="container">
            <div className="categories-container">
              <div className="categories">
                <div className="text">
                  <i className="fas fa-align-left" />
                  <p>Danh mục</p>
                </div>
              </div>
              <div className="categories-list">
                <div className="category">
                  <h6>Food</h6>
                  <div className="categories-sublist">
                    <div className="sub-category">
                      <h6>Food</h6>
                    </div>
                    <div className="sub-category">
                      <h6>Drink</h6>
                    </div>
                    <div className="sub-category">
                      <h6>Electric</h6>
                    </div>
                  </div>
                </div>
                <div className="category">
                  <h6>Drink</h6>
                  <div className="categories-sublist">
                    <div className="sub-category">
                      <h6>1</h6>
                    </div>
                    <div className="sub-category">
                      <h6>2</h6>
                    </div>
                    <div className="sub-category">
                      <h6>3</h6>
                    </div>
                  </div>
                </div>
                <div className="category">
                  <h6>Electric</h6>
                </div>
              </div>
            </div>
            <div className="nav-link">
              <ul>
                <Link href="/">
                  <a href="/">
                    <li>Trang chủ</li>
                  </a>
                </Link>

                <a href="#">
                  <li>Giới thiệu</li>
                </a>
                <a href="#">
                  <li>Event</li>
                </a>
                <a href="#">
                  <li>Tài khoản ngân hàng</li>
                </a>
              </ul>
            </div>
            <div className="nav-contact">
              <i className="fas fa-headset" />
              <div className="phone-email">
                <p>
                  <span className="lead">Hotline</span>: 5555 5555
                </p>
                <p>Email: visitek@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
