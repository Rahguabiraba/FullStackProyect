import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Logo from "./assets/Logo_TechNova-reduce.png";

function App() {
  return (
    <Router>
      <div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
        {/* HEADER */}

        <nav class="row-span-1 bg-gradient-to-b from-black to-stone-900 w-full z-10 top-0 start-0">
          <div class="max-w-screen-xl h-full flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={Logo} class="h-14" alt="TechNova Logo" />
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                class="text-white bg-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800"
              >
                Get Started
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 text-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-transparent md:bg-transparent">
                <li>
                  <Link
                    to="/"
                    class="block py-2 px-3 text-white bg-fuchsia-700 rounded md:bg-transparent md:text-fuchsia-700 md:p-0 md:dark:text-fuchsia-500"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fuchsia-700 md:p-0 md:dark:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fuchsia-700 md:p-0 md:dark:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fuchsia-700 md:p-0 md:dark:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-fuchsia-700 md:p-0 md:dark:hover:text-fuchsia-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Definición de las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>

        {/* FOOTER */}
        <footer class="bg-gradient-to-t from-black to-stone-900">
          <div class="w-full max-w-screen-xl mx-auto md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
              <a
                href="https://flowbite.com/"
                class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <img src={Logo} class="h-8" alt="Flowbite Logo" />
              </a>
              <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="/" class="hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:underline me-4 md:me-6">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="/" class="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://flowbite.com/" class="hover:underline">
                TechNova Solutions
              </a>
              . Todos los derechos reservados.
            </span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
