import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";

const CheckoutShipinfo = () => {
  return (
    <>
      <Head>
        <title>Shipping Information</title>
      </Head>
      <Layout>
        <section id="check-out-1">
          <div className="progressbar-container">
            <h4>Checkout process</h4>
            <ul className="progressbar">
              <li className="onstage">Shipping Information</li>
              <li>Payment Detail</li>
              <li>Review your order</li>
            </ul>
          </div>
          <h1 />
          <div className="container">
            <div className="check-out-info">
              <form action="check-out-2.htm">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="name" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Phone Number</label>
                  <input type="text" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <select name="city" id>
                    <option value={1}>HCM</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="city">District</label>
                  <select name="city" id>
                    <option value={1}>Quan 1</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" placeholder="Your address" />
                </div>
                <div className="form-group">
                  <label htmlFor="note">Note</label>
                  <textarea
                    name
                    id
                    rows={5}
                    placeholder="Note for us"
                    defaultValue={""}
                  />
                </div>
                <button type="submit" value="submit">
                  Continue
                </button>
              </form>
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

export default CheckoutShipinfo;
