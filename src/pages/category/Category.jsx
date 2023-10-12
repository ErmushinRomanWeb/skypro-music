import React from "react";
import NavMenu from "../../components/NavMenu/NavMenu.jsx";
import TrackList from "../../components/TrackList/TrackList.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer.jsx";
import * as S from "./StyledCategory.jsx";


//что такое
function Category({ cardImage }) {
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
export default Category;