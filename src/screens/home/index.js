import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Feed from "../feed/index";
import Trending from '../trending/index';
import Library from '../library/index';
import Player from '../player/index';
import Favorites from '../favorites/index';
import "./home.css";

export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Routes>
            <Route path="/library" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favorites" element={<Favorites />} />   
            </Routes>
            </div>
    </Router>
  );
}
