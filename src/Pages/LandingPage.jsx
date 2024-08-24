// import { useState } from 'react';
// import Modal from "../Components/Ui/Modal"
// import CameraProcessing from "../Components/Ui/CameraProcessing";


const LandingPage = () => {

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100 text-gray-900">
      
      <section 
        className="relative bg-cover bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] bg-center text-white py-24"
       
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Experience the Future of Authentication
          </h1>
          <p className="text-lg mb-8 leading-relaxed">
            Our state-of-the-art face authentication system ensures security and ease of use across all devices.
          </p>
          <a 
            href="/liveness"
            className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            // onClick={openModal}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <CameraProcessing />
      </Modal> */}

      
<section className="relative py-16 h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
  <div className="container mx-auto text-center">
    <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
      Our Key Features
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      {/* Feature 1 */}
      <div className="w-full md:w-1/3 lg:w-1/4 p-4">
        <div className="bg-gray-800 h-[180px] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-30 transform rotate-180 animate-flow"></div>
          <h3 className="text-2xl font-bold mb-4">Secure</h3>
          <p className="text-gray-300">
            High-level security for your data with cutting-edge face authentication technology.
          </p>
          <img
            src="https://via.placeholder.com/150"
            alt="Security Icon"
            className="absolute -bottom-8 -right-8 w-32 h-32 transform rotate-12 opacity-20"
          />
        </div>
      </div>

      {/* Feature 2 */}
      <div className="w-full md:w-1/3 lg:w-1/4 p-4">
        <div className="bg-gray-800 p-6 h-[180px] rounded-lg shadow-lg transform hover:scale-105 transition-transform relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 to-transparent opacity-30 transform rotate-180 animate-flow"></div>
          <h3 className="text-2xl font-bold mb-4">Fast</h3>
          <p className="text-gray-300">
            Enjoy rapid authentication with our optimized and efficient system.
          </p>
          <img
            src="https://via.placeholder.com/150"
            alt="Speed Icon"
            className="absolute -bottom-8 -right-8 w-32 h-32 transform rotate-12 opacity-20"
          />
        </div>
      </div>

      {/* Feature 3 */}
      <div className="w-full md:w-1/3 lg:w-1/4 p-4">
        <div className="bg-gray-800 p-6 h-[180px] rounded-lg shadow-lg transform hover:scale-105 transition-transform relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-green-600 to-transparent opacity-30 transform rotate-180 animate-flow"></div>
          <h3 className="text-2xl font-bold mb-4">Reliable</h3>
          <p className="text-gray-300">
            Our platform offers consistent performance and accuracy in face detection.
          </p>
          <img
            src="https://via.placeholder.com/150"
            alt="Reliability Icon"
            className="absolute -bottom-8 -right-8 w-32 h-32 transform rotate-12 opacity-20"
          />
        </div>
      </div>
    </div>
  </div>
</section>




      <div className="h-screen bg-gray-200 flex justify-center items-center">
        
        <iframe 
          width="1000" 
          height="600" 
          src="https://www.youtube.com/embed/KtMQJVZkaU8?si=KOONeB-y1ycV4eV9&controls=0&modestbranding=1&showinfo=0&rel=0&fs=0&iv_load_policy=3" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  
          allowfullscreen
          className="p-3 border border-black">
        </iframe>

      </div>

      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10">How It Works</h1>
        

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Step 1: Face Authentication</h2>
            <p className="text-lg">After registration, users will be prompted to authenticate using face recognition technology. This involves capturing a live image through the user&apos;s device camera, which will be compared against the Aadhaar database to ensure authenticity.</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="https://media.istockphoto.com/id/1168365129/photo/authentication-by-facial-recognition-concept-biometric-security-system.webp?b=1&s=612x612&w=0&k=20&c=SiSVMgc90GldQOlfsyG4THIp2CGaEz_1N2Bo7JW7A74="
             alt="Face Authentication" className="rounded-lg shadow-lg"
             width="400px"
             height="200px"
             />
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Step 2: Liveness Detection</h2>
            <p className="text-lg">To ensure the face being scanned is live and not a spoof, our system performs a liveness check. This step includes either passive detection or active engagement, where the user might be asked to blink or turn their head.</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="https://www.paravision.ai/wp-content/uploads/2024/01/intro-to-liveness_2-996x520.png" 
            alt="Liveness Detection" className="rounded-lg shadow-lg"
             width="400px"
             height="200px"
            />
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Step 3: Data Verification</h2>
            <p className="text-lg">The captured data is then verified against the Aadhaar database. This step ensures that the information provided matches the records, providing a robust layer of security.</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="https://media.istockphoto.com/id/1058694620/photo/data-security-system-shield-protection-verification.webp?b=1&s=612x612&w=0&k=20&c=1ydoCE2T9nxGQvOXZ_nIZuexowUi5FWRaqbU_CBgwEM=" 
            alt="Data Verification" className="rounded-lg shadow-lg" 
            width="400px"
            height="200px"
            />
          </div>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Step 4: Successful Authentication</h2>
            <p className="text-lg">Once the verification is complete, the user is successfully authenticated and can proceed with the intended action, such as accessing services or completing transactions.</p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src="https://plus.unsplash.com/premium_photo-1683842188982-e2920f594fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VjY2Vzc2Z1bGwlMjBhdXRoZW50aWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="Successful Authentication" className="rounded-lg shadow-lg"
            width="400px"
            height="200px"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg">Ready to get started?</p>
          <a href="/liveness" className="inline-block mt-5 px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-lg rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200">
            Authenticate Now
          </a>
        </div>
      </div>
    </div>


      






    <section className="py-16 bg-gray-100 h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>
        <div className="relative">
          <div className="flex overflow-x-auto scroll-smooth py-2 space-x-4">
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/320x240"
                alt="Gallery Item 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/320x240"
                alt="Gallery Item 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/320x240"
                alt="Gallery Item 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/320x240"
                alt="Gallery Item 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/320x240"
                alt="Gallery Item 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-80 h-60 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/320x240"
                alt="Gallery Item 4"
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
          
          {/* <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-lg">
            &larr;
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-lg">
            &rarr;
          </button> */}
        </div>
      </div>
    </section>


      {/* Call-to-Action Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Join us now to experience the best in face authentication technology and enhance your security.
          </p>
          <a 
            href="/liveness" 
            className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
          >
            start
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
