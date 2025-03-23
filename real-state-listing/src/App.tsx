import './App.css'
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import ListingDetails from './components/pages/ListingDetails';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return <div className='min-h-screen flex flex-col max-w-[1440px] mx-auto bg-off-white'>
    <ScrollToTop />
    <Header />
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
    </div>
    <Footer />
  </div>;
}

export default App
