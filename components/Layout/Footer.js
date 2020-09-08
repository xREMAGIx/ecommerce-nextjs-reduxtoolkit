import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer id="main-footer">
        <div className="container">
          <div>
            <h2>Oganic Logo</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              debitis quidem est suscipit ut sequi at, inventore rerum in.
              Accusamus!
            </p>
            <ul className="social-icons">
              <li>
                <a>
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fab fa-google" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-section">Information</h2>
            <ul className="footer-link">
              <li>
                <a>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a>Lorem, ipsum dolor.</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-section">Usefull Link</h2>
            <ul className="footer-link">
              <li>
                <a>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a>Lorem, ipsum dolor.</a>
              </li>
              <li>
                <a>Lorem, ipsum dolor.</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-section">Subcribe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              omnis?
            </p>
            <form action="" className="email-subcribe">
              <input type="text" />
              <button type="submit">
                <i className="fas fa-paper-plane" />
                Submit
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
