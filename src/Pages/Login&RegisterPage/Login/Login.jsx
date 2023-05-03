import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

const Login = () => {
  // const [googleData,setGoogleData] = useState({})
  const [error,setError] = useState('')

  const { googleLogin, gitHubLogin, setUserInfo, SignIn } = useContext(AuthContext);

  
  // Email Login -------------------------
  const handleEmailLogin = e =>{
    e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      console.log(email,password);
      SignIn(email,password)
      .then(result =>{
        const signInUser = result.user;
        console.log(signInUser);
        form.reset()
      })
      .catch(error =>{
        setError(error.message)
      })

    }
  // Email Login -------------------------


  // Google Login -------------------------
  const handleGoogleLogin = (e) => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        setUserInfo(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // Google Login -------------------------

  // GitHub Login -------------------------
  const handleGitHubLogin = (e) => {
    gitHubLogin()
      .then((result) => {
        const loggedUser = result.user;
        setUserInfo(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // GitHub Login -------------------------


  return (
    <div className="mt-20 md:w-[400px] mx-auto border p-10 shadow-2xl">
      {/* login form */}
      <form onSubmit={handleEmailLogin}>
        <h1 className="text-5xl font-semibold mb-5 ">Login Please</h1>
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 mb-5 rounded-xl"
            placeholder="Email address"
          />
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full px-3 py-2 rounded-xl mb-3"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <p className="mt-3 text-slate-500">
          Don't Have An Accout ?{" "}
          <Link className="text-blue-700" to="/register">
            Register
          </Link>
        </p>
        <input className="btn w-full mt-5" type="submit" value="Login" />
      </form>
      <hr className="border-black mb-5 mt-4" />
      <div className="flex flex-col gap-4">
        <button onClick={handleGitHubLogin} className="btn btn-outline">
          <FaGithub className="text-xl mr-2"></FaGithub>GitHub
        </button>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-accent"
        >
          <FaGoogle className="text-xl mr-2"></FaGoogle>Google
        </button>
      </div>
    </div>
  );
};

export default Login;
