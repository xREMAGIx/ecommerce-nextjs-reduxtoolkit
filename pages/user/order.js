import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";

const UserOrder = () => {
  return (
    <>
      <Head>
        <title>User Order</title>
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
                  <a>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Địa chỉ
                    </li>
                  </a>
                </Link>
                <Link href="/user/order">
                  <a className="active">
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
            <section className="notifications">
              <h2>Thông báo của tôi (2)</h2>
              <div className="content">
                <div className="action-bar">
                  <div className="icons">
                    <i className="fas fa-home active" />
                    <i className="fas fa-gift" />
                    <i className="fas fa-file-invoice" />
                    <i className="fas fa-history" />
                  </div>
                  <div>
                    <i className="fas fa-grip-vertical" />
                  </div>
                </div>
                <div className="notification">
                  <div className="date-time">
                    <p>6/1/1998</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-file-invoice" />
                  </div>
                  <div className="noti-info">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptatibus quisquam, eveniet explicabo corporis facere
                      esse odio unde? Vero fugit molestiae inventore porro sint,
                      debitis ipsam quibusdam ducimus dolorem, labore quam nam
                      molestias placeat blanditiis sequi libero minus incidunt?
                      Accusantium, quisquam?
                    </p>
                  </div>
                  <div className="actions">
                    <button className="read">Đánh dấu đã đọc</button>
                    <button className="delete">Xóa</button>
                  </div>
                </div>
                <div className="notification">
                  <div className="date-time">
                    <p>6/1/1998</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-file-invoice" />
                  </div>
                  <div className="noti-info">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptatibus quisquam, eveniet explicabo corporis facere
                      esse odio unde? Vero fugit molestiae inventore porro sint,
                      debitis ipsam quibusdam ducimus dolorem, labore quam nam
                      molestias placeat blanditiis sequi libero minus incidunt?
                      Accusantium, quisquam?
                    </p>
                  </div>
                  <div className="actions">
                    <button className="read">Đánh dấu đã đọc</button>
                    <button className="delete">Xóa</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default UserOrder;
