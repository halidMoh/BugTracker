import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { fetchBugs } from "./features/bug/bugSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBugs());
  });
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
