
import { Link } from 'react-router-dom';

const LivenessPage = () => {


  return (
    <div className="bg-gradient-to-r from-indigo-900 to-gray-800 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex">
        <div className="w-full lg:w-1/2 pr-8">
          <h1 className="text-2xl font-bold text-center lg:text-left mb-6">Face Liveness Check</h1>
          <p className="text-gray-700 mb-4">
            To ensure the security of your authentication, we need to verify that you are a live person.
            Please follow the instructions below.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Instructions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-gray-700">Ensure you are in a well-lit environment.</li>
              <li className="text-gray-700">Keep your face within the camera frame.</li>
              
            </ul>
          </div>

          <div className="text-center lg:text-left mb-4">
            <p className="text-gray-700">
              The camera is active. Please follow the instructions to complete the liveness check.
            </p>
          </div>

          {/* <button
            className="w-full bg-black text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition"
            onClick={() => alert('Liveness Check Complete')}
          >
            Complete Liveness Check
          </button> */}

          <div className="text-center lg:text-left mt-4">
            <Link to="/" className="text-blue-500 hover:underline">&larr;Back</Link>
          </div>
        </div>

        {/* Camera Frame Section */}
        <div className="w-full lg:w-1/2 bg-gray-200 rounded-lg flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">Camera View</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivenessPage;
