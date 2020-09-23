import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { wrapper } from "../../store";
import { loadProduct, selectProduct } from "../../lib/slices/productSlice";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { route } from "next/dist/next-server/server/router";

const ProductDetail = () => {
  const { product } = useSelector(selectProduct);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    console.log(router.query.slug);
    router &&
      router.query &&
      router.query.slug &&
      dispatch(loadProduct(router.query.slug));
  }, [router]);

  useEffect(() => {
    console.log(product);
  }, [product]);
  //Slides function

  var slides = [
    {
      src: "../img/canhdiem.jpg",
    },
    {
      src: "../img/canh_diem3.jpg",
    },
    {
      src: "../img/canhdiem.jpg",
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

  //Tabs function
  let [tabIndex, setTabIndex] = useState(0);

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
        <section id="main-product-body">
          <div className="container">
            <div>
              <div className="images-description">
                <div className="product-images">
                  {/* Full-width images with number and caption text */}
                  <div className="main-image">
                    {product &&
                      product.images &&
                      product.images.map((image, index) => (
                        <div
                          className={"mySlides fade"}
                          style={
                            slideIndex - 1 == index ? { display: "block" } : {}
                          }
                          key={index}
                        >
                          <img
                            src={`https://localhost:5001/${image.url}`}
                            style={{ width: "100%" }}
                          />
                        </div>
                      ))}
                  </div>
                  {/* Next and previous buttons */}
                  <a className="prev" onClick={() => plusSlides(-1)}>
                    ❮
                  </a>
                  <a className="next" onClick={() => plusSlides(1)}>
                    ❯
                  </a>

                  {/* Thumbnail images */}
                  <div className="row">
                    {product &&
                      product.images &&
                      product.images.map((image, index) => (
                        <div className="column">
                          <img
                            className="demo cursor"
                            src={`https://localhost:5001/${image.url}`}
                            style={{ width: "100%" }}
                            onClick={() => setSlideIndex(index + 1)}
                            alt="Product image"
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="description">
                  <div className="rating">
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <p>3 reviews</p>
                  </div>
                  <h1>{product && product.title}</h1>
                  <div className="price">{product && product.price}VND</div>
                  <h4>Short Description:</h4>
                  <p>{product && product.descripion}</p>
                  <div>
                    <ul className="product-details">
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Lorem ipsum dolor sit.</li>
                    </ul>
                  </div>
                  <div className="size">
                    <h4>Size:</h4>
                    <div className="choice">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        defaultValue="male"
                      />
                      <label htmlFor="male">Small</label>
                    </div>
                    <div className="choice">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        defaultValue="female"
                      />
                      <label htmlFor="female">Medium</label>
                    </div>
                    <div className="choice">
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        defaultValue="other"
                      />
                      <label htmlFor="other">Large</label>
                    </div>
                  </div>
                  <div className="product-actions">
                    <input type="number" />
                    <button className="btn-primary">Add to cart</button>
                    <button className="btn-secondary">Buy Now</button>
                    <i className="far fa-heart icon-favorite" />
                  </div>
                </div>
              </div>
              <section id="product-full-detail">
                {/* Tab links */}
                <div className="tab">
                  <button
                    className="tablinks"
                    onclick="openCity(event, 'Full Descriptions')"
                  >
                    Full Descriptions
                  </button>
                  <button
                    className="tablinks"
                    onclick="openCity(event, 'Reviews')"
                  >
                    Reviews
                  </button>
                  <button
                    className="tablinks"
                    onclick="openCity(event, 'Tokyo')"
                  >
                    Tokyo
                  </button>
                </div>
                {/* Tab content */}
                <div id="Full Descriptions" className="tabcontent">
                  <h3>London</h3>
                  <p>London is the capital city of England.</p>
                </div>
                <div id="Reviews" className="tabcontent">
                  <h3>Customer Reviews</h3>
                  <div className="review-container">
                    <div className="user">
                      <img src="img/canh_diem3.jpg" alt="no data" />
                      <span>Username</span>
                    </div>
                    <div className="rating">
                      <div className="star">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="title">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="date">1/1/2020</div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta amet iste doloremque totam debitis voluptatum
                      distinctio assumenda, maxime quas, veniam consequuntur
                      voluptate esse reiciendis unde. Pariatur eveniet possimus
                      harum commodi.
                    </p>
                    <div className="actions">
                      <button className="btn-helpful">Helpful</button>
                      <button className="btn-comment">Comment</button>
                      <button className="btn-report">Report</button>
                    </div>
                  </div>
                </div>
                <div id="Tokyo" className="tabcontent">
                  <h3>Tokyo</h3>
                  <p>Tokyo is the capital of Japan.</p>
                </div>
              </section>
            </div>
            <div className="related-products">
              <p>Sản phẩm liên quan</p>
              <div className="items">
                <div className="item">
                  <div className="image">
                    <img src="/dist/img/canh_diem3.jpg" alt />
                  </div>
                  <p className="title">Lorem ipsum dolor sit amet.</p>
                  <p className="related-price">400,000 VNĐ</p>
                </div>
                <div className="item">
                  <div className="image">
                    <img src="/dist/img/canh_diem3.jpg" alt />
                  </div>
                  <p className="title">Lorem ipsum dolor sit amet.</p>
                  <p className="related-price">400,000 VNĐ</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     await store.dispatch(loadProducts());
//   }
// );

// This gets called on every request
// export const getServerSideProps = async ({ req, query, params }) => {
//   const res = await axios.get(`/api/products/${query.slug}`);

//   console.log(res.data);
//   return { props: { data: res.data } };
// };
export default ProductDetail;
