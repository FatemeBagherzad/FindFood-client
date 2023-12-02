import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Preferences from "./components/Preferences/Preferences";



function App() {
  return (
    <>
       <BrowserRouter>
           <Routes>
             {/* <Route path="/" element={<Restraunts />} /> */}
            <Route path="/" element={<Preferences />} />
             {/* <Route path="/form" element={<TryItPage />} /> */}
           </Routes>
          
      </BrowserRouter>
    </>
  );
}
export default App;
