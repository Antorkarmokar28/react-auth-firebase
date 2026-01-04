import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassWord, setShowPassword] = useState(false);
  const handleSignInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    if (!terms) {
      setErrorMessage("Please accept our terms and condition!");
      return;
    }
    // clear error state
    setErrorMessage("");
    setSuccess(false);
    // regular expression
    const regularExpressionPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (regularExpressionPass.test(password) === false) {
      setErrorMessage(
        "Please you given atlist 6 character, capital letter, lower letter and atleast one digit"
      );
      return;
    }
    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-6xl mb-6 text-center">Please SignIn</h1>
      <form
        className="w-1/4 mx-auto p-4 rounded-2xl shadow-2xl space-y-6"
        onSubmit={handleSignInForm}
      >
        <input
          className="w-full p-2 rounded"
          type="email"
          name="email"
          placeholder="Email"
        />
        <br />
        <div className="relative">
          <input
            className="w-full p-2 rounded"
            type={showPassWord ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <button
            onClick={() => setShowPassword(!showPassWord)}
            className="btn btn-sm absolute top-1 right-2"
          >
            {showPassWord ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <label className="label">
          <input type="checkbox" name="terms" className="checkbox" />
          Accept Our Terms and Condition
        </label>
        <br />
        <input
          className="w-full btn bg-violet-600 hover:bg-violet-500 text-gray-200"
          type="submit"
          value="Sign In"
        />
        {success && (
          <p className="mt-6 text-green-600">User login successfully</p>
        )}
        <p className="mt-6 text-red-600">{errorMessage}</p>
      </form>
    </div>
  );
};

export default Login;
