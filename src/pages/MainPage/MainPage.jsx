import React from "react";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";
import TrackList from "../../components/TrackList/TrackList";
import Sidebar from "../../components/Sidebar/Sidebar";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import * as S from "./StyledMainPage";

//что такое
function MainPage({ cardImage }) {
  console.log(cardImage);
  return (
    <S.AppWrapper>
      <S.Container>
        <S.Main>
          <NavMenu />
          <TrackList />
          <Sidebar cardImage={cardImage} />
        </S.Main>
        <AudioPlayer />
      </S.Container>
    </S.AppWrapper>
  );
}
//!то есть логика в том, что мы просто заменяем все теги на компоненты, кторые заранее создали и отстилизовали
export default MainPage;
