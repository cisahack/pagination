import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchApps = async () => {
      const res = axios.get("http://localhost:8080/api/apps");
      console.log(res.data);
    };
    fetchApps();
  });

  return (
    <div className="App">
      <h1>Pagination Challenge</h1>
    </div>
  );
}

export default App;
