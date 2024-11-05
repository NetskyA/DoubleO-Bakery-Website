import { Link } from "react-router-dom";
import Gif1 from "../../Image/ImageGif1.gif";
import { Outlet, useNavigate } from "react-router-dom";

export default function Registerpage() {
    let navigate = useNavigate();
    return (
        <>
            <div className="bd-black">
                <div
                    className="min-h-screen flex justify-center items-center bg-fixed bg-cover bg-center z-20"
                    style={{
                        backgroundImage: `url(${Gif1})`,
                        boxShadow: 'inset 0 0 15px 5px rgba(0, 0, 0, 0.5), 0 0 15px 5px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <div className="w-full max-w-md p-8">
                        <div className="bg-white bg-opacity-75 border-double border-4 border-primary rounded-tl-RoundedSF rounded-br-RoundedSF p-5">
                            <h2 className="text-2xl font-semibold text-gray-700 text-center">Double O Bakery</h2>
                            <p className="text-lg text-gray-600 text-center">Create a new account</p>
                            <div className="mt-5 flex items-center justify-between">
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                                <a href="#" className="text-xs text-center text-gray-800 uppercase">or</a>
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                            </div>
                            <form>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative mb-6">
                                            <input autoComplete="off" id="username" name="username" type="text" className="peer rounded-xl border-2 border-gray-400 placeholder-transparent h-10 w-full text-gray-900 focus:outline-none focus:border-primary" placeholder="Username" />
                                            <label htmlFor="username" className="absolute left-0 ps-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                        </div>
                                        <div className="relative mb-6">
                                            <input autoComplete="off" type="password" name="password" id="password" className="peer rounded-xl border-2 border-gray-400 placeholder-transparent h-10 w-full text-gray-900 focus:outline-none focus:border-primary" placeholder="Password" />
                                            <label htmlFor="password" className="absolute left-0 ps-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className="relative mb-6">
                                            <input autoComplete="off" type="text" name="numberphone" id="numberphone" className="peer rounded-xl border-2 border-gray-400 placeholder-transparent h-10 w-full text-gray-900 focus:outline-none focus:border-primary" placeholder="Phone number" />
                                            <label htmlFor="numberphone" className="absolute left-0 ps-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">Phone number</label>
                                        </div>
                                        <div className="relative mb-6">
                                            <input autoComplete="off" id="email" name="email" type="email" className="peer rounded-xl border-2 border-gray-400 placeholder-transparent h-10 w-full text-gray-900 focus:outline-none focus:border-primary" placeholder="Email" />
                                            <label htmlFor="email" className="absolute left-0 ps-3 -top-5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="pb-11">
                                        <button onClick={() => navigate("/login/user")} className="text-white bg-seventh font-bold py-2 px-4 w-full rounded-xl hover:bg-gray-600">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
