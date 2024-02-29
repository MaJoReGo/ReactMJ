import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../src/components/Pages/Home';
import {Header} from '../src/components/Layouts/Header/Header';
import { Profile } from '../src/components/Profile/Profile';
import { Projects } from '../src/components/Projects/Projects';
import { References } from '../src/components/References/References';
import { Experience } from '../src/components/Experience/Experience';

function App() {
  return (
    <div className='ContentApp'>
      <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/references" element={<References />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;






