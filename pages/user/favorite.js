import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";

const UserFavorite = () => {
  return (
    <>
      <Head>
        <title>Favorite</title>
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
                  <a>
                    <li>
                      <i className="fas fa-receipt" />
                      Quản lý đơn hàng
                    </li>
                  </a>
                </Link>
                <Link href="/user/favorite">
                  <a className="active">
                    <li>
                      <i className="fas fa-heart" />
                      Sản phẩm yêu thích
                    </li>
                  </a>
                </Link>
              </ul>
            </section>
            <section className="favorite">
              <h2>Sản phẩm yêu thích (2)</h2>
              <div className="items">
                <div className="item">
                  <div className="image">
                    <img src="/dist/img/canh_diem3.jpg" alt />
                  </div>
                  <div className="info">
                    <p className="title">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laboriosam, itaque!
                    </p>
                    <div className="descriptions">
                      <div className="description">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Rerum laborum magnam odit quam consectetur porro
                          qui? Culpa nesciunt corrupti doloremque mollitia,
                          vero, tempora dolores obcaecati harum ipsa voluptas
                          non qui?
                        </p>
                        <div className="start">*****</div>
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <div className="main-price">
                      <p>200,000 VNĐ</p>
                    </div>
                    <div className="discount">
                      <p>
                        <span>400,000 VNĐ</span> | 10%
                      </p>
                    </div>
                  </div>
                  <div className="close-button">
                    <i className="fas fa-times" />
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

export default UserFavorite;
