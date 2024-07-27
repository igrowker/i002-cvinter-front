import React from 'react';

const Drawer: React.FC = () => {
  return (
    <div className="relative text-center">
      <div
        id="drawer-navigation"
        className="absolute top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto bg-[#95BE9E]"
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Menu
        </h5>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 00-1.066-.998 8.5 8.5 0 109.039 9.039.999.999 0 00-1-1.066h.002z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0011 1.02V10h8.975a1 1 0 001-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0012.5 0z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 00-2.4-.569V2h1a1 1 0 100-2h-2a1 1 0 00-1 1v2H9.89A6.977 6.977 0 0112 8v5h-2V8A5 5 0 100 8v6a1 1 0 001 1h8v4a1 1 0 001 1h2a1 1 0 001-1v-4h6a1 1 0 001-1V8a5 5 0 00-2.582-4.377ZM6 12H4a1 1 0 010-2h2a1 1 0 010 2z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 00-2 2v1a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2zm0 5H2V2h16zM16 13H4a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2v-1a2 2 0 00-2-2zm0 3H4v-1h12zM16 7H4a2 2 0 00-2 2v1a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2zm0 3H4V9h12z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Usuarios</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M15 0H3a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V3a3 3 0 00-3-3zM3 2h12a1 1 0 011 1v1H2V3a1 1 0 011-1zm12 16H3a1 1 0 01-1-1V6h14v11a1 1 0 01-1 1z" />
                  <path d="M11 13H7a1 1 0 100 2h4a1 1 0 100-2z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">CV'S</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M9 0a5 5 0 00-5 5v3.09a5.001 5.001 0 00.975 9.81 3.5 3.5 0 006.05 0A5.001 5.001 0 0014 8.09V5a5 5 0 00-5-5zm0 2a3 3 0 013 3v3a3 3 0 01-6 0V5a3 3 0 013-3zm2.5 16a1.5 1.5 0 01-3 0h3z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Configuraciones</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
