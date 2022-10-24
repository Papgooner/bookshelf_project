import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import ErrorPage from './pages/errorPage/errorPage';
import FrontPage from './pages/frontPage/frontPage';
import ShelfPage from './pages/shelfPage/shelfPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<FrontPage />} />
        <Route path="/Shelf" element={<ShelfPage />} />
      </Routes>
    </div>
  );
}

export default App;
