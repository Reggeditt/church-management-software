import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Members from './routes/Members';
import Ministries from './routes/Ministries';
import Finance from './routes/Finance';
import Groups from './routes/Groups';
import Events from './routes/Events';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
