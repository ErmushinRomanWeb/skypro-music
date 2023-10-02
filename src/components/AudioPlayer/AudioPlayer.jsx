import React, { useState } from "react";
import Skeleton from "../Skeleton";
import * as S from "./StyledAudioPlauer";

function AudioPlayer() {
  //! вызывается в App.js
  const [visible, setVisible] = useState(false); //данным синтаксисом мы создаем 2 константы, которые соответствуют элементам в массиве(useState возвращает массив), причем, 2 будет объявление функции.
  setTimeout(() => {
    setVisible(true); //
  }, 3000);

  //здесь, для того, чтобы нам можно было вставить значение в разметку мы можем активно использовать переменные, можно конечно перендерить всю разметку, но тогда будет очень много дублирующегося кода

  let componentShown = visible ? ( //!Тут мы просто засовываем в переменную 2 варианта, либо то, либо другое
    <S.TrackPlayContain>
      <S.TrackPlayImage /*className="track-play__image*/>
        <svg className="track-play__svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </S.TrackPlayImage>
      <S.TrackPlayAuthor /*className="track-play__author"*/>
        <S.PrackPlayAuthorLink
          /*className="track-play__author-link"*/ href="http://"
        >
          Ты та...
        </S.PrackPlayAuthorLink>
      </S.TrackPlayAuthor>
      <S.TrackPlayAlbum /*className="track-play__album"*/>
        <a className="track-play__album-link" href="http://">
          Баста
        </a>
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  ) : (
    <S.TrackPlayContain /*className="track-play__contain"*/>
      <S.TrackPlayImage>
        <Skeleton /*className="track-play__image"*/ width={51} height={51} />
      </S.TrackPlayImage>
      <S.TrackPlayAuthor>
        <Skeleton /*className="track-play__author"*/ width={59} height={15} />
      </S.TrackPlayAuthor>
      <S.TrackPlayAlbum>
        <Skeleton /*className="track-play__album"*/ width={59} height={15} />
      </S.TrackPlayAlbum>
    </S.TrackPlayContain>
  );
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.ParPlayer>
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerPtnPrevSvg className="player__btn-prev-svg" alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerPtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <S.PlayerPtnPlaySvg alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.PlayerPtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              {componentShown}
              <S.TrackPlayLikeDis>
                <S.TrackPlayLike>
                  <svg className="track-play__like-svg" alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                </S.TrackPlayLike>
                <S.TrackPlayDisike>
                  <svg className="track-play__dislike-svg" alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </svg>
                </S.TrackPlayDisike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.ParPlayer>
          <div className="bar__volume-block volume">
            <div className="volume__content">
              <div className="volume__image">
                <svg className="volume__svg" alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </svg>
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </div>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}

export default AudioPlayer;
