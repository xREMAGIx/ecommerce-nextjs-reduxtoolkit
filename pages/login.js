import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../lib/slices/userSlice";

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
    async function dispatchLogin() {
      await dispatch(login(formData));
    }
    dispatchLogin();
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Login </title>
      </Head>
      <h1>Hello World!</h1>
    </>
  );
};

export default Login;
