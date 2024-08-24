
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          
          {/* Company Information */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Company Info</h4>
            <p className="mb-2">Address: 123 Main Street, Anytown, USA</p>
            <p className="mb-2">Phone: +1 (234) 567-8900</p>
            <p className="mb-2">Email: contact@company.com</p>
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
          
          {/* Authentication and Security */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Authentication & Security</h4>
            <ul>
              <li className="mb-2"><a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a></li>
              <li className="mb-2"><a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a></li>
              <li className="mb-2"><a href="/security" className="hover:text-gray-400">Security Measures</a></li>
              <li className="mb-2"><a href="/faqs" className="hover:text-gray-400">FAQs</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="/" className="hover:text-gray-400">Home</a></li>
              <li className="mb-2"><a href="/auth" className="hover:text-gray-400">Authentication</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-gray-400">About Us</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Newsletter Signup</h4>
            <p className="mb-4">Stay updated with our latest news and offers. Sign up for our newsletter.</p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="mb-2 p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
              />
              <button type="submit" className="p-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white">
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        {/* Social Media Links */}
        <div className="mt-10 text-center">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
