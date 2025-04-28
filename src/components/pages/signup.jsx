"use client";

import { useState } from "react";
import { Link } from "react-router";

export default function ApolloSignup() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen bg-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center">
            <span className="text-yellow-300 text-2xl mr-2">✨</span>
            <span className="text-white text-xl font-semibold">Apollo</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-gray-200 transition">
              Get a demo
            </button>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition">
              Log in
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="mt-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Form */}
              <div className="p-8 md:p-12 lg:p-16 md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Sign up for Apollo —
                  <br />
                  free forever
                </h1>

                <p className="text-gray-600 mb-8 mt-4">
                  Find, contact, and close your ideal buyers with over 210
                  million contacts in one, easy-to-use AI sales platform.
                </p>

                <div className="mb-6">
                  <div className="flex items-start mb-4">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      />
                    </div>
                    <label
                      htmlFor="terms"
                      className="ml-2 text-sm text-gray-600"
                    >
                      By signing up, I agree to Apollo's{" "}
                      <Link href="#" className="text-gray-900 underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-gray-900 underline">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition mb-4">
                    Sign up for free
                  </button>

                  <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-3 text-gray-500 text-sm">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                    Sign up with Google
                  </button>

                  <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 23 23"
                    >
                      <path fill="#f25022" d="M1 1h10v10H1z" />
                      <path fill="#00a4ef" d="M1 12h10v10H1z" />
                      <path fill="#7fba00" d="M12 1h10v10H12z" />
                      <path fill="#ffb900" d="M12 12h10v10H12z" />
                    </svg>
                    Sign up with Microsoft
                  </button>

                  <div className="mt-8 flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${
                            star <= 4 ? "text-yellow-400" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      4.7/5 based on 8,111 reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="md:w-1/2 relative">
                <div className="h-full">
                  <img
                    src="https://placehold.co/600x400?height=600&width=600"
                    alt="Person using Apollo"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
