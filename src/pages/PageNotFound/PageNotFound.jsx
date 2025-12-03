import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50">
      <h1 className="text-7xl font-extrabold text-primary">404</h1>

      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>

      <p className="mt-3 text-gray-600 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block bg-primary hover:bg-primary/90 transition text-white font-medium px-6 py-3 rounded-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
