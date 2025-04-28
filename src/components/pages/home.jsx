import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen">
        <nav className="bg-white px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-yellow-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </div>
              <span className="text-black font-semibold text-xl">Apollo</span>
            </Link>

            <div className="hidden md:flex ml-10 space-x-8">
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                Platform
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                Roles
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                Resources
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900">
                Pricing
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 hidden md:block"
            >
              Get a demo
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md px-4 py-2"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="bg-yellow-400 text-black font-medium rounded-md px-4 py-2 hover:bg-yellow-500"
            >
              Sign up for free
            </Link>
          </div>
        </nav>

        <div className="w-full h-screen relative bg-cover bg-center bg-no-repeat">
          <img
            src="https://netlify.apollo.io/_next/image?url=https%3A%2F%2Fnetlify.apollo.io%2F_next%2Fstatic%2Fmedia%2Fmobile.2784fd59.jpg&w=3840&q=75"
            alt="Apollo platform background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 px-4 py-16 md:py-32 max-w-7xl mx-auto">
            <div className="max-w-xl">
              <div className="text-xs font-semibold tracking-widest  uppercase mb-4">
                APOLLO AI SALES PLATFORM
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold   leading-tight mb-6">
                The only tool you need to find & engage leads
              </h1>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="px-4 py-3 rounded-md w-full sm:w-64 focus:outline-none backdrop-blur-2xl"
                />
                <button className="bg-yellow-400 text-black font-medium rounded-md px-6 py-3 hover:bg-yellow-500">
                  Sign up for free
                </button>
              </div>

              <div className="mt-4 text-sm ">
                By signing up, I agree to Apollo's
                <Link href="#" className="underline mx-1">
                  Terms of Service
                </Link>
                and
                <Link href="#" className="underline ml-1">
                  Privacy Policy
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
