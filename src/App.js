import React from "react";
import NavMenu from "./components/NavMenu";
import TrackList from "./components/TrackList";
import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";

function App( {state} ) {
  console.log(state);
  return (
    <div class="wrapper">
      <div class="container">
        <main class="main">
          <NavMenu />
          <TrackList />
          <Sidebar  state={state}/>
        </main>
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
