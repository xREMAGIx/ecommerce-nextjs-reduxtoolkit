import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { register, selectUser } from "../lib/slices/userSlice";

const Register = () => {
  //Redux
  const dispatch = useDispatch();
  const { token } = useSelector(selectUser);

  //Main hooks
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    repassword: "",
  });

  const handleSubmit = () => {
    event.preventDefault();
    if (formData.password.localeCompare(formData.repassword) != 0)
      dispatch(register(formData));
    else {
      alert("Password and respassword not match!");
    }
  };

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <section id="register-form">
        {/* <div id="snackbar">Some text some message..</div> */}

        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="form-input">
            <input
              type="text"
              name="register-email"
              id="register-email"
              required
              value={formData.email || ""}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label htmlFor="register-email">Email</label>
            <span />
          </div>
          <div className="form-input">
            <input
              type="text"
              name="register-username"
              id="register-username"
              required
              value={formData.username || ""}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <label htmlFor="register-username">Username</label>
            <span />
          </div>

          <div className="form-input">
            <input
              type="password"
              name="register-password"
              id="register-password"
              required
              value={formData.password || ""}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <label htmlFor="register-password">Password</label>
            <span />
          </div>
          <div className="form-input">
            <input
              type="password"
              name="register-repassword"
              id="register-repassword"
              required
              value={formData.repassword || ""}
              onChange={(e) =>
                setFormData({ ...formData, repassword: e.target.value })
              }
            />
            <label htmlFor="register-repassword">Re-enter Password</label>
            <span />
          </div>
          <button type="submit">Register</button>
          <div className="bottom-text">
            <span>
              Bạn đã là thành viên?{" "}
              <Link href="/login" as="/login">
                <a>Đăng nhập</a>
              </Link>
            </span>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
