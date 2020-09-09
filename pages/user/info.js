import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";

const UserInfo = () => {
  return (
    <>
      <Head>
        <title>User Info</title>
      </Head>
      <Layout>
        <section id="breadcrumbs">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Pictures</a>
              </li>
              <li>
                <a href="#">Summer 15</a>
              </li>
              <li>Italy</li>
            </ul>
          </div>
        </section>
        <section id="user-admin">
          <div className="container">
            <section className="left-bar">
              <div className="user-account">
                <i className="fas fa-user-circle" />
                <div>
                  <p>Tài khoản của</p>
                  <a className="lead" href="#">
                    Trần Đào Sĩ Mạnh
                  </a>
                </div>
              </div>
              <ul className="actions">
                <Link href="/user/info">
                  <a className="active">
                    <li>
                      <i className="fas fa-user" />
                      Thông tin tài khoản
                    </li>
                  </a>
                </Link>
                <Link href="/user/notification">
                  <a>
                    <li>
                      i<i className="fas fa-bell" />
                      Thông báo của tôi
                    </li>
                  </a>
                </Link>
                <Link href="/user/address">
                  <a>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Địa chỉ
                    </li>
                  </a>
                </Link>
                <Link href="/user/order">
                  <a>
                    <li>
                      <i className="fas fa-receipt" />
                      Quản lý đơn hàng
                    </li>
                  </a>
                </Link>
                <Link href="/user/favorite">
                  <a>
                    <li>
                      <i className="fas fa-heart" />
                      Sản phẩm yêu thích
                    </li>
                  </a>
                </Link>
              </ul>
            </section>
            <section className="info">
              <h2>Tài khoản của tôi</h2>
              <form action>
                <div className="form-group">
                  <label htmlFor="name">Họ Tên</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Hãy nhập họ tên của bạn"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Hãy nhập số điện thoại của bạn"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Hãy nhập email của bạn"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Giới tính</label>
                  <div>
                    <input type="radio" name="gender" defaultValue="male" />
                    <label htmlFor="male">Nam</label>
                    <input type="radio" name="gender" defaultValue="female" />
                    <label htmlFor="female">Nữ</label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Ngày sinh</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <div />
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="password">Thay đổi mật khẩu</label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mật khẩu cũ</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu cũ"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mật khẩu mới</label>
                  <input
                    type="password"
                    name="new-password"
                    placeholder="Nhập mật khẩu mới"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Nhập lại mật khẩu</label>
                  <input
                    type="password"
                    name="new-password2"
                    placeholder="Nhập lại mật khẩu mới"
                  />
                </div>
                <div className="form-group">
                  <div />
                  <button type="submit" value="submit">
                    <p>Cập nhật</p>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default UserInfo;
