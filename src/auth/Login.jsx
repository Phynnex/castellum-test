import { useState } from "react";
import AuthLayout from "./components/AuthLayout";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <AuthLayout>
      <p className="font-bold text-3xl text-center text-text ">
        Login to Your Account
      </p>

      <form className="mt-4 space-y-4 font-raleway">
        <div>
          <input
            type="text"
            placeholder="Email Address"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3 w-full px-3 py-3 border border-subtleText  rounded-md outline-none text-text font-raleway text-sm"
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3 w-full px-3 py-3 border border-subtleText rounded-md outline-none text-text font-raleway text-sm"
            required
          />
          <Link to="/forget-password"  className="flex justify-end text-primary mt-2 font-medium">Forgot Password?</Link>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md  text-sm font-medium text-white bg-primary mt-3"
          >
            Login
          </button>
        </div>

        <p className="text-center">
          Don’t have an Account?
          <span className="text-primary ml-2 font-medium">
            <Link to="/create-account">Sign up</Link>
          </span>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
