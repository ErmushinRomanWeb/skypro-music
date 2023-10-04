import React, { useState } from "react";
import Skeleton from "../Skeleton";
import * as S from "./StyledTrack";

function Track() {
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true);
  }, 3000);

  let componentShown = !visible ? (
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImageSkeleton>
          <Skeleton width={51} height={51} />
        </S.TrackTitleImageSkeleton>
        <Skeleton className="track__title-text" width={356} height={19} />
      </S.TrackTitle>
      <S.TrackAuthor>
        <Skeleton width={271} height={19} />
      </S.TrackAuthor>
      <S.TrackAlbum>
      <Skeleton width={271} height={19} />
      </S.TrackAlbum>
      <div className="track__time">
        <S.TrackTimeSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </S.TrackTimeSvg>
        <span className="track__time-text">4:44</span>
      </div>
    </S.PlaylistTrack>
  ) : (
    <S.PlaylistTrack>
      <S.TrackTitle>
        <S.TrackTitleImage>
          <S.TrackTimeSvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </S.TrackTimeSvg>
        </S.TrackTitleImage>
        <div className="track__title-text">
          <S.TrackTitleLink href="http://">
            Guilt <span className="track__title-span"></span>
          </S.TrackTitleLink>
        </div>
      </S.TrackTitle>
      <S.TrackAuthor>
        <a className="track__author-link" href="http://">
          Nero
        </a>
      </S.TrackAuthor>

      <S.TrackAlbum>
        <a className="track__album-link" href="http://">
          Welcome Reality
        </a>
      </S.TrackAlbum>

      <div className="track__time">
        <svg className="track__time-svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </svg>
        <span className="track__time-text">4:44</span>
      </div>
    </S.PlaylistTrack>
  );

  return <div className="playlist__item">{componentShown}</div>;
}

export default Track;
