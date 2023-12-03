import TryForm from "../../components/TryForm/TryForm";
import "./TryItPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const TryItPage = () => {
  const [menu, setMenu] = useState();
  const [selectedFilter, setSelectedFilter] = useState(""); // Add selectedFilter state

  useEffect(() => {
    axios.get("http://localhost:8888/menu").then((response) => {
      console.log(response.data);
      setMenu(response.data);
    });
  }, []);

  return (
    <div className="tryPage">
      <div className="container">
        {/* Pass selectedFilter to TryForm */}

        <TryForm
          menu={menu}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
    </div>
  );
};
export default TryItPage;
