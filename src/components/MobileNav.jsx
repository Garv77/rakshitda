import React from "react";

const MobileNav = () => {
  return (
    <>
      {/* Top Nav */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
           
            <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">
              Neem Krori Traders
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:7465076529"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              (+91) 7465076529
            </a>
           
          </div>
        </div>
      </nav>

      {/* Bottom Nav */}
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/essentials"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Essentials
                </a>
              </li>
              <li>
                <a
                  href="/office-supplies"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Office Items
                </a>
              </li>
              <li>
                <a
                  href="/clothing"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Clothing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
