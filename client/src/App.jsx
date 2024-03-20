import './App.css'
import { Header } from './components';
import { Route, Router, Routes } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage/CommunityPage';


function App() {
  return (
    <>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CommunityPage />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
