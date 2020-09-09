import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";

const UserAddress = () => {
  return (
    <>
      <Head>
        <title>User Address</title>
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
                  <a>
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
                  <a className="active">
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
              <h2>Địa chỉ</h2>
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
                  <label htmlFor="company">Công ty</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Hãy nhập email của bạn"
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
                  <label htmlFor="gender">Tỉnh/Thành phố</label>
                  <select name="city" id>
                    <option value={1}>All</option>
                    <option value={1}>All</option>
                    <option value={1}>All</option>
                    <option value={1}>All</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="district">Quận/Huyện</label>
                  <select name="district" id>
                    <option value={1}>All</option>
                    <option value={1}>All</option>
                    <option value={1}>All</option>
                    <option value={1}>All</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="district">Phường xã</label>
                  <select name="district" id>
                    <option value={1}>All</option>
                    <option value={1}>All</option>
                    <option value={1}>All</option>
                    <option value={1}>All</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Địa chỉ</label>
                  <textarea name="address" id rows={5} defaultValue={""} />
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

export default UserAddress;
