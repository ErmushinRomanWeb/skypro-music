import React from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import TrackList from "./components/TrackList/TrackList";
import Sidebar from "./components/Sidebar/Sidebar";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import { Route, Routes  } from "react-router-dom";
import * as S from "./StyledApp"

//что такое
function App({ state }) {
  return (
    <S.AppWrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <Routes>
          </Routes>
          <TrackList />
          <Sidebar state={state} />
        </S.Main>
        <AudioPlayer />
      </S.Container>
    </S.AppWrapper>
  );
}
//!то есть логика в том, что мы просто заменяем все теги на компоненты, кторые заранее создали и отстилизовали
export default App;
