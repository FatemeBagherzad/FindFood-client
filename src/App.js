import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Header from "./components/Header/Header";
import TryItPage from "./pages/TryItPage/TryItPage";
import axios from "axios";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8888/FindFood-server/dev-data/data/data.json"
        );
        setRecipeData(response.data);
        setSearchResults([]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <BrowserRouter>
        <Header recipeData={recipeData} setSearchResults={setSearchResults} />
        <div className="mainPageBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how" element={<HowItWorks />} />
            <Route path="/form" element={<TryItPage />} />
            {/* <Route
              path="/form/:id"
              element={
                recipeData.length ? <Recipes recipeData={recipeData} /> : null
              }
            /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}
export default App;
