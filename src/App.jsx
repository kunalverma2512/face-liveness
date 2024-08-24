
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
// import AuthPage from './Pages/AuthPage';
import LivenessPage from './Pages/LivenessPage';
// import ProfilePage from './Pages/ProfilePage';
import NotFoundPage from './Pages/NotFoundPage';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

const App = () => {
  return (
    <Router>
      <Header />
        <div className="flex flex-col min-h-screen">
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            <Route path="/liveness" element={<LivenessPage />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
      </div>
      <Footer />
    </Router>
    
  );
};

export default App;
