import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Header from './components/Header/Header';
import TryItPage from './pages/TryItPage/TryItPage';
import MenuPage from './pages/MenuPage/MenuPage';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <div className="mainPageBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how" element={<HowItWorks />} />
            <Route path="/form" element={<TryItPage />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}
export default App;
