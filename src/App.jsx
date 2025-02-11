

import HeaderComponent from './components/Header';
// import Home from './components/HomePage/Home';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect,useState,Suspense} from 'react';
import Loader from './components/Loader/Loader'
import PageRoutes from './X_File/PageRoutes';
import FooterComponent from './components/Footer/Footer';
import { GlobalStyles } from './BasicStyle/GlobalStyles';


// const RegistrationForm = () => <h1>Registration Form (Coming Soon)</h1>;


function App() {
  const [showLoader, setShowLoader] = useState(true); // Loader visibility state

  useEffect(() => {
    // Simulate loader duration
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showLoader ? (
        <Loader /> // Show loader while `showLoader` is true
      ) : (
        <>
        <GlobalStyles/>
          <HeaderComponent />
          {/* <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegistrationForm />} />
            </Routes>
          </Router> */}
          <Suspense fallback={<Loader />}>
            <PageRoutes />
            </Suspense>
            <FooterComponent/>
        </>
      )}
    </div>
  );
}

export default App;
