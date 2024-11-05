import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Services/userSlice";
import LogoUsername from "../../../Image/icon/logo-username.svg";
import LogoPsssword from "../../../Image/icon/logo-password.svg";

export default function LoginPageAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.user);

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await dispatch(login({ username, password }));

    if (result.meta.requestStatus === "fulfilled") {
      // Jika login berhasil, arahkan ke halaman dashboard
      navigate("/dashboard/admin");
    }
  };

  return (
    <div className="h-screen md:flex" id="nonCopyInput" htmlFor="nonCopyInput">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-950 to-blue-500 justify-around items-center hidden">
        <div className="w-2/3">
          <h1 className="text-white font-bold text-5xl font-sans">
            Portal NetSkyA
          </h1>
          <p className="text-white mt-1">Menghubungkan Ide dengan Teknologi</p>
        </div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="w-2/3" onSubmit={handleLogin}>
          <p className="text-2xl font-normal text-gray-600 mb-2">
            Welcome Back
          </p>
          <div className="flex mb-6">
            <div className="text-blue-500 font-bold text-6xl">
              Double O Bakery
            </div>
          </div>
          <div className="flex items-center shadow-xl py-2 px-3 rounded-xl">
            <img src={LogoUsername} className="w-7 h-7" alt="" />
            <input
              className="pl-2 ms-3 outline-none border-none bg-none rounded-lg w-full"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center shadow-xl py-2 px-3 rounded-xl mt-3">
            <img src={LogoPsssword} className="w-7 h-7" alt="" />
            <input
              className="pl-2 ms-3 outline-none border-none rounded-lg w-full"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="m-2 absolute">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          </div>
          <div className="flex mt-10">
            <button className="block w-full mr-1 bg-slate-200 mt-4 py-2 shadow-xl hover:bg-slate-300 rounded-lg text-blue-900 font-semibold mb-2">
              <Link to="/">
                <p className="text-xl font-semibold text-blue-800">
                  Cancel
                </p>
              </Link>
            </button>
            <button
              type="submit"
              className="block w-full bg-blue-700 shadow-lg mt-4 py-2 ml-1 text-xl hover:bg-blue-900 rounded-lg text-white font-semibold mb-2"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
