import React from "react";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const cardImage = {
    image1: "img/playlist01.png",
    image2: "img/playlist02.png",
    image3: "img/playlist03.png",
  };
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
            <SidebarItem cardImage={cardImage.image1} />
            <SidebarItem cardImage={cardImage.image2} />
            <SidebarItem cardImage={cardImage.image3} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
