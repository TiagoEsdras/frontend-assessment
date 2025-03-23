const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] lg:min-h-[300px] bg-off-white text-dark-gray px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-center mb-6">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="px-4 py-2 bg-gold text-white rounded-lg shadow-md cursor-pointer">
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
