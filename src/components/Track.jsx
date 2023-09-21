import React, { useState } from "react";
import Skeleton from "./Skeleton";

function Track() {
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    setVisible(true);
  }, 3000);

  let componentShown = !visible ? (
    <div className="playlist__track track">
      <div className="track__title">
        <Skeleton
          className="track__title-image track__title-image__skeleton"
          width={51}
          height={51}
        />
        <Skeleton className="track__title-text" width={356} height={19} />
      </div>
      <Skeleton className="track__author" width={271} height={19} />
      <Skeleton className="track__album" width={271} height={19} />
      <div className="track__time">
        <svg className="track__time-svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </svg>
        <span className="track__time-text">4:44</span>
      </div>
    </div>
  ) : (
    <div className="playlist__track track">
      <div className="track__title">
        <div className="track__title-image">
          <svg className="track__title-svg" alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className="track__title-text">
          <a className="track__title-link" href="http://">
            Guilt <span className="track__title-span"></span>
          </a>
        </div>
      </div>
      <div className="track__author">
        <a className="track__author-link" href="http://">
          Nero
        </a>
      </div>

      <div className="track__album">
        <a className="track__album-link" href="http://">
          Welcome Reality
        </a>
      </div>

      <div className="track__time">
        <svg className="track__time-svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </svg>
        <span className="track__time-text">4:44</span>
      </div>
    </div>
  );

  return <div className="playlist__item">{componentShown}</div>;
}

export default Track;
