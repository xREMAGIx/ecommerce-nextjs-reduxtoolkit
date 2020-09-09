import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { wrapper } from "../../store";
import { loadProducts, selectProducts } from "../../lib/slices/productSlice";
import Layout from "../../components/Layout/Layout";

const ProductList = () => {
  const { products } = useSelector(selectProducts);

  return (
    <>
      <Head>
        <title>Product List</title>
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
        <section id="products-list-body">
          <div className="container">
            <div className="categories">
              <h4>Categories</h4>
              <ul>
                <li>
                  <a href="products-list.htm">Lorem, ipsum dolor.</a>
                </li>
                <li>
                  <a href="products-list.htm">Lorem, ipsum dolor.</a>
                </li>
                <li>
                  <a href="products-list.htm">Lorem, ipsum dolor.</a>
                </li>
                <li>
                  <a href="products-list.htm">Lorem, ipsum dolor.</a>
                </li>
                <li>
                  <a href="products-list.htm">Lorem, ipsum dolor.</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="products-bar">
                <p>10 Products founds</p>
                <div className="filters">
                  <div className="limit">
                    <p>Limit</p>
                    <select name="limit" id>
                      <option value={1}>1</option>
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                  </div>
                  <div className="sort">
                    <p>Sort by</p>
                    <select name="sort" id>
                      <option value={1}>A - Z</option>
                      <option value={5}>Z - A</option>
                      <option value={10}>Price Increase</option>
                      <option value={20}>Price Decrease</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="products">
                {products.map((product, index) => (
                  <div key className="product">
                    <div className="product-image">
                      {product.images.length > 0 ? (
                        <img src={product.images[0].image} alt="Nodata" />
                      ) : (
                        <img src="img/canhdiem.jpg" alt="Nodata" />
                      )}
                    </div>
                    <h6>{product.title}</h6>
                    <p>{product.price}</p>
                    <button>Add to Cart</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="pagination">
          <form className="pagination">
            <button className="button prev">
              <i className="icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 5.88L15.29 4 8 12l7.29 8L17 18.12 11.44 12z"
                    fillrule="evenodd"
                  />
                </svg>
              </i>
            </button>
            <span className="text pageText">Page:</span>
            <input className="input" type="number" />
            <span className="text">trên tổng số 100</span>
            <button className="button next">
              <i className="icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 5.88L9.71 4 17 12l-7.29 8L8 18.12 13.56 12z"
                    fillRule="evenodd"
                  />
                </svg>
              </i>
            </button>
          </form>
        </section>
      </Layout>
    </>
  );
};
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(loadProducts());
  }
);

export default ProductList;
