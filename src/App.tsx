import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import MainBody from "./pages/MainBody";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainBody />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
