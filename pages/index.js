import Head from "next/head";

import { wrapper } from "../store";

import { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { loadProducts, selectProducts } from "../lib/slices/productSlice";
import Layout from "../components/Layout/Layout";

const Home = (props) => {
  //Redux
  const dispatch = useDispatch();
  const { products } = useSelector(selectProducts);

  var slides = [
    {
      src: "img/canhdiem.jpg",
    },
    {
      src: "img/canh_diem3.jpg",
    },
    {
      src: "img/canhdiem.jpg",
    },
  ];
  let [slideIndex, setSlideIndex] = useState(1);

  // Next/previous controls
  function plusSlides(n) {
    var slide = (slideIndex += n);
    if (slide > slides.length) setSlideIndex(1);
    else if (slide < 1) setSlideIndex(slides.length);
    else setSlideIndex(slide);
  }

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Layout>
        <section id="home-body">
          <div className="banner-container">
            <div className="categories-list">
              <div className="category">
                <h6>Food</h6>
                <div className="categories-sublist">
                  <div className="sub-category">
                    <p>Food</p>
                  </div>
                  <div className="sub-category">
                    <p>Drink</p>
                  </div>
                  <div className="sub-category">
                    <p>Electric</p>
                  </div>
                </div>
              </div>
              <div className="category">
                <h6>Drink</h6>
                <div className="categories-sublist">
                  <div className="sub-category">
                    <p>1</p>
                  </div>
                  <div className="sub-category">
                    <p>2</p>
                  </div>
                  <div className="sub-category">
                    <p>3</p>
                  </div>
                </div>
              </div>
              <div className="category">
                <h6>Electric</h6>
              </div>
            </div>
            <div className="banners">
              <div className="main-banner">
                {/* Full-width images with number and caption text */}
                {slides.map((image, index) => (
                  <div
                    className={"mySlides fade"}
                    style={slideIndex - 1 == index ? { display: "block" } : {}}
                    key={index}
                  >
                    <img src={image.src} style={{ width: "100%" }} />
                  </div>
                ))}

                {/* Next and previous buttons */}
                <a className="prev" onClick={() => plusSlides(-1)}>
                  ❮
                </a>
                <a className="next" onClick={() => plusSlides(1)}>
                  ❯
                </a>
              </div>
              {/* The dots/circles */}
              <div style={{ textAlign: "center" }}>
                {slides.map((image, index) => (
                  <span
                    key={index}
                    className={
                      "dot " + (slideIndex - 1 == index ? "active" : "none")
                    }
                    onClick={() => currentSlide(index + 1)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="product-section">
              <h3 className="title-product-section">Sản phẩm bán chạy</h3>
              <div className="products">
                {products.map((product, index) => (
                  <div key={index} className="product">
                    <div className="product-image">
                      <a href="product.htm">
                        <img src="img/canhdiem.jpg" alt="No data" />
                      </a>
                    </div>
                    <h6>{product.title}</h6>
                    <div className="price">
                      <p>{product.price}</p>
                      <p className="discount-price">700.000 VND</p>
                    </div>
                  </div>
                ))}
                <div className="product">
                  <div className="product-image">
                    <a href="product.htm">
                      <img src="img/canhdiem.jpg" alt="No data" />
                    </a>
                  </div>
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div className="price">
                    <p>500.000 VND</p>
                    <p className="discount-price">700.000 VND</p>
                  </div>
                </div>
                <div className="product">
                  <div className="product-image out-of-stock">
                    <a href="product.htm"></a>
                    <a href="product.htm">
                      <img src="img/canhdiem.jpg" alt="No data" />
                    </a>
                    <span>Out of stock</span>
                  </div>
                  <h6>Lorem ipsum dolor sit amet.</h6>
                  <div className="price">
                    <p>500.000 VND</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
// Read manual about `getServerSideProps` or `getStaticProps` usage. Choose what fits you better
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(loadProducts());
  }
);

export default Home;
