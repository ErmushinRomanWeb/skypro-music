import React from "react";

function SidebarItem({ cardImage }) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={cardImage} alt="day's playlist" />
      </a>
    </div>
  );
}

export default SidebarItem;
