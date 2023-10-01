import React, { useState } from "react";
import Skeleton from "./Skeleton";
import styled from "styled-components";

function AudioPlayer() {
  const [visible, setVisible] = useState(false); //данным синтаксисом мы создаем 2 константы, которые соответствуют элементам в массиве(useState возвращает массив), причем, 2 будет объявление функции.
  setTimeout(() => {
    setVisible(true); //
  }, 3000);

  //здесь, для того, чтобы нам можно было вставить значение в разметку мы можем активно использовать переменные, можно конечно перендерить всю разметку, но тогда будет очень много дублирующегося кода

  let componentShown = visible ? (//!Тут мы просто засовываем в переменную 2 варианта, либо то, либо другое
    <div className="track-play__contain">
      <div className="track-play__image">
        <svg className="track-play__svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
        </svg>
      </div>
      <div className="track-play__author">
        <a className="track-play__author-link" href="http://">
          Ты та...
        </a>
      </div>
      <div className="track-play__album">
        <a className="track-play__album-link" href="http://">
          Баста
        </a>
      </div>
    </div>
  ) : (
    <div className="track-play__contain">
      <Skeleton className="track-play__image" width={51} height={51} />
      <Skeleton className="track-play__author" width={59} height={15} />
      <Skeleton className="track-play__album" width={59} height={15} />
    </div>
  );
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <div className="player__controls">
              <div className="player__btn-prev">
                <svg className="player__btn-prev-svg" alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </svg>
              </div>
              <div className="player__btn-play _btn">
                <svg className="player__btn-play-svg" alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </svg>
              </div>
              <div className="player__btn-next">
                <svg className="player__btn-next-svg" alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </svg>
              </div>
              <div className="player__btn-repeat _btn-icon">
                <svg className="player__btn-repeat-svg" alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </svg>
              </div>
              <div className="player__btn-shuffle _btn-icon">
                <svg className="player__btn-shuffle-svg" alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </svg>
              </div>
            </div>

            <div className="player__track-play track-play">
              {componentShown}
              <div className="track-play__like-dis">
                <div className="track-play__like _btn-icon">
                  <svg className="track-play__like-svg" alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                </div>
                <div className="track-play__dislike _btn-icon">
                  <svg className="track-play__dislike-svg" alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
