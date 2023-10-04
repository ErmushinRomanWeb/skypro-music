import React from "react";
import Track from "../Track/Track";
import Filter from "../Filter";
import * as S from "./StyledTrackList"


function TrackList() {
  return (
    <S.MainCenterblock /*className="main__centerblock centerblock"*/>
      <S.CenterblockSearch /*className="centerblock__search search"*/>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterblockSearch>
      <S.CenterblockH2>Треки</S.CenterblockH2>
        <Filter/>
      <S.CenterblockContent>
        <S.ContentTitle /*className="content__title playlist-title"*/>
        <S.Column width={447}>Трек</S.Column>
                <S.Column width={321}>ИСПОЛНИТЕЛЬ</S.Column>
                <S.Column width={245}>АЛЬБОМ</S.Column>
                <S.Column width={60} align={"end"}>
                    <S.TitleSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </S.TitleSvg>
                </S.Column>
        </S.ContentTitle>
        <S.ContentPlaylist>
          <Track />
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default TrackList;
