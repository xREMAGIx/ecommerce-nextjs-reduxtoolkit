import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";

const CheckoutPaymentdetail = () => {
  return (
    <>
      <Head>
        <title>Payment Detail</title>
      </Head>
      <Layout>
        <section id="check-out-1">
          <div className="progressbar-container">
            <h4>Checkout process</h4>
            <ul className="progressbar">
              <li className="active">Shipping Information</li>
              <li className="onstage">Payment Detail</li>
              <li>Review your order</li>
            </ul>
          </div>
          <h1 />
          <div className="container">
            <div className="check-out-info">
              <div className="form-group">
                <input type="radio" name="payment" />
                <p>Thanh toán khi nhận hàng</p>
              </div>
              <div className="form-group">
                <input type="radio" name="payment" />
                <p>Thanh toán qua cổng PayPal</p>
              </div>
              <div className="form-group">
                <input type="radio" name="payment" />
                <p>Thanh toán qua thẻ Visa</p>
              </div>
              <div className="form-group">
                <input type="radio" name="payment" />
                <p>Thanh toán qua cổng VN Pay</p>
              </div>
            </div>
            <div className="check-out-cart">
              <div className="cart-title">
                <h2>Your cart</h2>
                <span>2</span>
              </div>
              <div className="check-out-cart-products">
                <div className="check-out-cart-product">
                  <div className="check-out-cart-image">
                    <img src="img/canhdiem.jpg" alt />
                  </div>
                  <div>
                    <p className="title">Lorem ipsum dolor sit amet.</p>
                    <p>Quantity: 1</p>
                  </div>
                  <p className="price">200,000VND</p>
                </div>
                <div className="check-out-cart-product">
                  <div className="check-out-cart-image">
                    <img src="img/canhdiem.jpg" alt />
                  </div>
                  <div>
                    <p className="title">Lorem ipsum dolor sit amet.</p>
                    <p>Quantity: 1</p>
                  </div>
                  <p className="price">200,000VND</p>
                </div>
                <div className="total-price">
                  <h2>Total:</h2>
                  <p>400,000 VNĐ</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CheckoutPaymentdetail;
