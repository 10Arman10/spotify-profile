import React, { useEffect } from "react";
import "./styles/Profile.css";
import Sidebar from "./sidebar/Sidebar";
import Content from "./Content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profilepage from "../pages/Profilepage/Profilepage";
import Artist from "../pages/Artistpage/Artistpage";
import Tracks from "../pages/Trackspage/Tracks.js";
import Recent from "../pages/Recentpage/Recent";
import Playlist from "../pages/Playlistpage/Playlist";
import Artistabout from "../pages/Artistpage/Artistabout";
import Trackabout from "../pages/Trackspage/Trackabout";
import Recentpage from "../pages/Recentpage/Recentpage";

const Profile = () => {
  return (
    <div className="profile">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Profilepage />} />
            <Route path="/artists" element={<Artist />} />
            <Route path="/artists/:id" element={<Artistabout />} />
            <Route path="/tracks/:id" element={<Trackabout />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/recent/:id" element={<Recentpage />} />
            <Route path="/playlists" element={<Playlist />} />
          </Routes>
        </Sidebar>
        <Content />
      </BrowserRouter>
    </div>
  );
};

export default Profile;
