import { useState } from 'react';

const AadhaarForm = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Aadhaar authentication logic here
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <label className="block text-sm font-medium text-gray-700">Aadhaar Number:</label>
      <input
        type="text"
        value={aadhaarNumber}
        onChange={(e) => setAadhaarNumber(e.target.value)}
        className="mt-2 p-2 border border-gray-300 rounded-md w-full"
        placeholder="Enter your Aadhaar number"
      />
      <button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
        Authenticate
      </button>
    </form>
  );
};

export default AadhaarForm;
