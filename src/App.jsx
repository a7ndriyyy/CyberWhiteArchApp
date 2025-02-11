import HeaderComponent from './components/Header';
import { useEffect,useState,Suspense} from 'react';
import Loader from './components/Loader/Loader'
import PageRoutes from './X_File/PageRoutes';
import FooterComponent from './components/Footer/Footer';
import { GlobalStyles } from './BasicStyle/GlobalStyles';


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
