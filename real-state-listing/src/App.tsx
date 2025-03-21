import './App.css'
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';

function App() {
  return <div className='max-w-[1440px] mx-auto bg-off-white'>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listing/:id" element={<ListingDetails />} />
    </Routes>
    <Footer />
  </div>;
}

export default App
