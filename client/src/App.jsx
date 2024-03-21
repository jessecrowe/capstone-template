import './App.css'
import { Header } from './components';
import { Route, Router, Routes } from 'react-router-dom';
import { CommunityPage } from './pages';
import { SignUpPage } from './pages';
import { WelcomePage } from './pages';




function App() {
  

  return (
    <>
   
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path="/communitypage" element={<CommunityPage />} />
      </Routes>
   
    </div>
   
     
    </>
  );
}

export default App;
