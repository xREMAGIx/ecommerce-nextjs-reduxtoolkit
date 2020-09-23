import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, selectUser } from "../lib/slices/userSlice";

const Login = () => {
  //Redux
  const dispatch = useDispatch();
  const { token } = useSelector(selectUser);

  const router = useRouter();

  //Main hooks
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (token != "")
      router.push({
        pathname: "/",
      });
  }, [token]);

  const handleSubmit = () => {
    event.preventDefault();
    console.log(formData);
    dispatch(login(formData));
  };

  return (
    <>
      <Head>
        <title>Login </title>
      </Head>
      <section id="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="form-input">
            <input
              type="text"
              name="login-username"
              id="login-username"
              required
              value={formData.email || ""}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label htmlFor="login-username">Email</label>
            <span />
          </div>
          <div className="form-input">
            <input
              type="password"
              name="login-password"
              id="login-password"
              required
              value={formData.password || ""}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <label htmlFor="login-password">Password</label>
            <span />
          </div>
          <button type="submit">Login</button>
          <div className="bottom-text">
            <span>
              Bạn chưa là thành viên?
              <Link href="/register" as="/register">
                <a> Đăng ký ngay</a>
              </Link>
            </span>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
