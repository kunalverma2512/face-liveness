import { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [aadharNumber, setAadharNumber] = useState('');

  const handleInputChange = (e) => {
    setAadharNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Aadhaar Number Submitted:", aadharNumber);
  };

  return (
    <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Aadhaar Authentication</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="aadhar-number" className="text-gray-700 font-semibold mb-2">Aadhaar Number</label>
            <input
              type="text"
              id="aadhar-number"
              value={aadharNumber}
              onChange={handleInputChange}
              placeholder="Enter your Aadhaar Number"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition"
          >
            Authenticate
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
