import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Components/Profile';
import Gallery from './Components/Gallery';
import Header from './Components/Header';
import "./index.css";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/profile/:name" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
