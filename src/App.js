import React from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import TrackList from "./components/TrackList";
import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";
import styled from "styled-components";

const StyledAppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;

const StyledContainer = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;

const StyledMain = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
//что такое
function App({ state }) {
  return (
    <StyledAppWrapper>
      <StyledContainer>
        <StyledMain>
          <NavMenu />
          <TrackList />
          <Sidebar state={state} />
        </StyledMain>
        <AudioPlayer />
      </StyledContainer>
    </StyledAppWrapper>
  );
}
//!то есть логика в том, что мы просто заменяем все теги на компоненты, кторые заранее создали и отстилизовали
export default App;
