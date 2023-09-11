import React from "react";
import NavMenu from "./components/NavMenu";
import TrackList from "./components/TrackList";
import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <div class="wrapper">
      <div class="container">
        <main class="main">
          <NavMenu/>
          <TrackList/>
          <Sidebar/>
        </main>
          <AudioPlayer/>
      </div>
    </div>
  );
}

export default App;
