import React from "react";
import SidebarItem from "./SidebarItem.jsx";

function Sidebar({state}) {
  return (
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
          {state.cardImage.map((element) => {
            return <SidebarItem key={element.id} src={element.src} />; //
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
