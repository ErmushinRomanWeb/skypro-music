import React from "react";
import SidebarItem from "./SidebarItem.jsx";
import Skeleton from "./Skeleton.jsx";
import { useState } from "react";

function Sidebar({ state }) {
  // всю логику мы прописываем до return
  const [visible, setVisible] = useState(false); //функция меняет локальный state компонента
  setTimeout(() => {//!это асинхронная функция
    setVisible(true);//!Код не останавливается когда начинает считаться таймер
  }, 3000);

  let componentShown = state.cardImage.map((element) => {
    return visible ? (
      <SidebarItem key={element.id} src={element.src} />
    ) : (
      <Skeleton
        className="sidebar__item"
        width={250}
        height={150}
        key={element.id}
        src={element.src}
      />
    );
  });

  return (
    //после return у нас только разметка, то есть, то, что будет отображаться на странице
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Ermushin Roman</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
        {componentShown}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
