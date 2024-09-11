
const ErrorPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <div className="max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <a href="/">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Go to Homepage
          </button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
