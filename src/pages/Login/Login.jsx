import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase.init";
import { useRef, useState } from "react";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRef = useRef();
  // handle sign in form
  const handleSignInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setSuccess(false);
    setErrorMessage("");
    // sign in user
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        if (!result.user.emailVerified) {
          alert("Please verify your email address");
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  // forget password
  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email for reset password");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-6xl mb-6 text-center">Please Sign Up</h1>
      <form
        className="w-1/4 mx-auto p-4 rounded-2xl shadow-2xl space-y-6"
        onSubmit={handleSignInForm}
      >
        <input
          className="w-full p-2 rounded"
          type="email"
          name="email"
          ref={emailRef}
          placeholder="Email"
        />
        <br />
        <input
          className="w-full p-2 rounded"
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <button
          onClick={handleForgotPassword}
          className="underline cursor-pointer"
        >
          Forgot Password
        </button>
        <br />
        <input
          className="w-full btn bg-violet-600 hover:bg-violet-500 text-gray-200"
          type="submit"
          value="Sign In"
        />
        <p>
          Are you new user? Then Please{" "}
          <Link className="text-blue-600 font-bold" to="/signup">
            Sign Up
          </Link>
        </p>
        {success && <p className="text-green-600">User Login Successfuly</p>}
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
