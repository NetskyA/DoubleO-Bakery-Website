import { Link } from "react-router-dom";
import Gif1 from "../../Image/ImageGif1.gif";
import { Outlet, useNavigate } from "react-router-dom";
export default function LoginRegpage() {
    let navigate = useNavigate()
    return (
        <>
            <div
                className={`min-h-screen z-20`}
                style={{
                    backgroundImage: `url(${Gif1})`,
                    marginTop: '-7.4%',
                    boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5), 0 0 15px 5px rgba(0, 0, 0, 0.5)', backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="w-full justify-center items-center mx-auto p-8 lg:w-2/5">
                    <div className="w-full mt-24 lg:mt-36 bg-white m-5 border-double border-4 border-primary rounded-tl-RoundedSF rounded-br-RoundedSF">
                        <div className="m-6">
                            <h2 className="text-2xl font-semibold text-gray-700 text-center pt-5">Double O Bakery</h2>
                            <p className="text-lg text-gray-600 text-center">Welcome back!</p>
                            {/* <a href="#" className="flex items-center justify-center mt-4 text-white border-gray-100 border-1 rounded-lg shadow-md hover:bg-gray-100">
                                <div className="px-4 py-3">
                                    <svg className="h-6 w-6" viewBox="0 0 40 40">
                                        <path
                                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                            fill="#FFC107" />
                                        <path
                                            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                            fill="#FF3D00" />
                                        <path
                                            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                            fill="#4CAF50" />
                                        <path
                                            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                            fill="#1976D2" />
                                    </svg>
                                </div>
                                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                            </a> */}
                            <div className="mt-5 flex items-center justify-between">
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                                <a href="#" className="text-xs text-center text-gray-800 uppercase">or</a>
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                            </div>
                            <form
                            // onSubmit={handleSubmit(LoginPage)}
                            >
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative mb-6">
                                            <input autoComplete="off" id="username" name="username" type="text" className="peer rounded-xl border-2 border-gray-400 placeholder-transparent h-10 w-full text-gray-900 focus:outline-none focus:border-primary" placeholder="Username" />
                                            <label htmlFor="username" className="absolute left-0 ps-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                        </div>
                                        <div className="relative">
                                            <input autoComplete="off" type="password" name="password" id="password" className="peer rounded-xl border-2 border-gray-400 placeholder-transparent h-10 w-full text-gray-900 focus:outline-none focus:border-primary" placeholder="Password" />
                                            <label htmlFor="password" className="absolute left-0 ps-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="m" onClick={() => navigate("/login/user")}>
                                        <button className="text-white bg-seventh font-bold py-2 px-4 w-full rounded-xl hover:bg-gray-600">Login</button>
                                    </div>
                                    <Link to="/register">
                                        <h1 className="text-base underline font-semibold text-primary text-center pb-7 pt-5">Register</h1>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}