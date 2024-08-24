import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      
      {/* Background animation */}
      <div className="absolute inset-0 bg-no-repeat bg-cover opacity-20" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1499084732479-de2c02d45fc4")',
        }}></div>

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
        <div className="bg-orange-500 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <p className="text-xl md:text-2xl mt-5">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="mt-10 inline-block px-5 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-lg rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200">
          Go Back Home
        </Link>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mix-blend-multiply opacity-30 blur-lg"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mix-blend-multiply opacity-30 blur-xl"></div>
    </div>
  );
};

export default NotFoundPage;
