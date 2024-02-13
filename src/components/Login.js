import { useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
    accountType: "",
  });

  const toggleSignup = () => {
    setIsLogin((prev) => !isLogin);
  };

  const handleChangeUser = async (e) => {
    await setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));

    console.log(user);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? "Log in to your account" : "Sign up!"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmitForm}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleChangeUser}
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleChangeUser}
              />
            </div>
          </div>

          {/* Account Type */}
          {!isLogin && (
            <div>
              <label htmlFor="accountType" className="sr-only">
                Account Type
              </label>
              <select
                id="accountType"
                name="accountType"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                onChange={handleChangeUser}
                value={user.accountType}
              >
                <option value="None">Choose account type here</option>
                <option value="Admin">Admin</option>
                <option value="Contributor">Contributor</option>
                <option value="Service Provider">Service Provider</option>
              </select>

              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                {/* Arrow icon */}
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.7-.29l-3-3a1 1 0 111.4-1.42L10 10.59l2.3-2.3a1 1 0 111.4 1.42l-3 3a1 1 0 01-.7.29z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
            {isLogin ? (
              <div className="flex">
                <div>Don't have an account?</div>
                <div
                  onClick={toggleSignup}
                  className="ml-1 text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Sign up instead!
                </div>
              </div>
            ) : (
              <div className="flex">
                <div>Do you already have an account?</div>
                <div
                  onClick={toggleSignup}
                  className="ml-1 text-indigo-600 hover:text-indigo-500 cursor-pointer"
                >
                  Log in instead!
                </div>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* Heroicon name: lock-closed */}
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 8V6a5 5 0 0110 0v2h2a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {isLogin ? "Log in" : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
