import React from "react";

function SidebarItem({ src }) {
  //Создаем функциональный компонент,и аргументом я вставляю свойство этого компонента, которое передается из родительского компонента, и используется для передачи данных между компонентами
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={src} alt="day's playlist" />
      </a>
    </div>
  );
}

export default SidebarItem;
