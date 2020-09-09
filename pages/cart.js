import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/Layout/Layout";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <Layout>
        <section id="main-cart">
          <div className="container">
            <div className="cart-title">
              <p>Your Cart (1 product)</p>
            </div>
            <div className="cart-info">
              <div className="cart-products">
                <div className="cart-product">
                  <div className="cart-product-image">
                    <img src="img/canhdiem.jpg" alt />
                  </div>
                  <div className="cart-product-info">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque adipisci quis dicta aut facilis labore ab provident
                      reprehenderit, nemo commodi.
                    </p>
                    <div className="cart-product-actions">
                      <button className="delete-from-cart">
                        <i className="fas fa-trash" />
                        Delete
                      </button>
                      <button className="buy-later">Buy Later</button>
                    </div>
                  </div>
                  <div className="cart-price">
                    <div className="price">
                      <p>22,000,000 VNĐ</p>
                    </div>
                    <p className="discount-price">25,000,000 VNĐ</p>
                  </div>
                  <div className="cart-quantity">
                    <input type="number" defaultValue={1} />
                  </div>
                </div>
                <div className="cart-product">
                  <div className="cart-product-image">
                    <img src="img/canhdiem.jpg" alt />
                  </div>
                  <div className="cart-product-info">
                    <div className="text-info">
                      <h4>Lorem ipsum dolor sit amet.</h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Tempora, provident!
                      </p>
                    </div>
                    <div className="cart-product-actions">
                      <button className="delete-from-cart">
                        <i className="fas fa-trash" />
                        Delete
                      </button>
                      <button className="buy-later">Buy Later</button>
                    </div>
                  </div>
                  <div className="cart-price">
                    <div className="price">
                      <p>22,000,000 VNĐ</p>
                    </div>
                    <p className="discount-price">20,000 VNĐ</p>
                  </div>
                  <div className="cart-quantity">
                    <input type="number" defaultValue={1} />
                  </div>
                </div>
                <div style={{ float: "right" }}>
                  <Link href="/products">
                    <a className="btn-continue">
                      <i className="fas fa-angle-left" />
                      <p>Continue shopping</p>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="cart-check-out">
                <h3>
                  Total <span>(2 items)</span> :
                </h3>
                <p className="total-price">400,000 VNĐ</p>
                <Link href="/checkout/ship-info">
                  <a>
                    <button className="check-out">Check out</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Cart;
