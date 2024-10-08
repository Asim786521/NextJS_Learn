'use client'
const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <svg
                className="h-8"
                viewBox="0 0 118 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Your SVG content here */}
                <path
                  d="M37.83 19.2047C37.2352 19.237 36.6469 19.0679 36.16 18.7247C35.9566 18.5739 35.7929 18.3758 35.6831 18.1476C35.5733 17.9193 35.5208 17.6678 35.53 17.4147V8.1447C35.5252 8.1055 35.5293 8.0656 35.5422 8.0282C35.555 7.9908 35.5762 7.9569 35.6042 7.9289C35.6322 7.9009 35.6661 7.8797 35.7035 7.8669C35.7409 7.854 35.7808 7.8499 35.82 7.8547H37.5C37.69 7.8547 37.78 7.9547 37.78 8.1447V16.6947C37.78 17.0747 37.95 17.2647 38.3 17.2647C38.4484 17.2708 38.5968 17.254 38.74 17.2147C38.94 17.2147 39.05 17.2747 39.06 17.4547L39.21 18.7047C39.2172 18.7412 39.2165 18.7787 39.208 18.8149C39.1995 18.851 39.1833 18.885 39.1605 18.9143C39.1378 18.9437 39.109 18.9679 39.0762 18.9852C39.0433 19.0025 39.0071 19.0126 38.97 19.0147C38.602 19.1363 38.2175 19.2004 37.83 19.2047Z"
                  fill="currentColor"
                />
                {/* Add other paths here */}
              </svg>
            </div>
          </div>
          {/* Add more sections below if needed */}
          <div className="text-white">
            <h2 className="font-bold text-xl">Company</h2>
            <p className="text-gray-400">Your company's description or links</p>
          </div>
          <div className="text-white">
            <h2 className="font-bold text-xl">Contact</h2>
            <ul>
              <li className="text-gray-400">Address: 123 Street</li>
              <li className="text-gray-400">Email: info@company.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
