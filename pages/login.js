import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, selectUser } from "../lib/slices/userSlice";

const Login = () => {
  //Redux
  const dispatch = useDispatch();
  const { token } = useSelector(selectUser);

  //Main hooks
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    // async function dispatchLogin() {
    //   await dispatch(login(formData));
    // }
    // dispatchLogin();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Login </title>
      </Head>
      <section id="login-form">
        <form action method="post">
          <h1>Login</h1>
          <div className="form-input">
            <input type="text" name="login-email" id="login-email" required />
            <label htmlFor="login-email">Email</label>
            <span />
          </div>
          <div className="form-input">
            <input
              type="password"
              name="login-password"
              id="login-password"
              required
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
