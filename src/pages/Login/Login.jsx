const Login = () => {
  const handleSignInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
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
        <input
          className="w-full p-2 rounded"
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <input
          className="w-full btn bg-violet-600 hover:bg-violet-500 text-gray-200"
          type="submit"
          value="SignIn"
        />
      </form>
    </div>
  );
};

export default Login;
