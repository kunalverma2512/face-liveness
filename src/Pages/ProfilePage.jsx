
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col lg:flex-row">
        {/* Profile Details Section (Left) */}
        <div className="w-full lg:w-1/2 pr-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-center lg:text-left mb-6">Profile Details</h1>
          
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <p className="text-gray-700 mb-2"><strong>Name:</strong> John Doe</p>
            <p className="text-gray-700 mb-2"><strong>Aadhaar Number:</strong> 1234 5678 9012</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> johndoe@example.com</p>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91-123-456-7890</p>
          </div>

          <div className="text-center lg:text-left mt-4">
            <Link to="/auth" className="text-blue-500 hover:underline">Back to Authentication</Link>
          </div>
        </div>

        {/* Profile Picture Section (Right) */}
        <div className="w-full lg:w-1/2 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-lg">Profile Picture</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
