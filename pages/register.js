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
    username: "",
    password: "",
    repassword: "",
  });

  useEffect(() => {
    // async function dispatchRegister() {
    //   await dispatch(register(formData));
    // }
    // dispatchRegister();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <section id="register-form">
        <form action method="post">
          <h1>Register</h1>
          <div className="form-input">
            <input
              type="text"
              name="register-email"
              id="register-email"
              required
            />
            <label htmlFor="register-email">Email</label>
            <span />
          </div>
          <div className="form-input">
            <input
              type="password"
              name="register-password"
              id="register-password"
              required
            />
            <label htmlFor="register-password">Password</label>
            <span />
          </div>
          <div className="form-input">
            <input
              type="password"
              name="register-password"
              id="register-password"
              required
            />
            <label htmlFor="register-password">Re-enter Password</label>
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
