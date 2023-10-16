import React from "react";
import { NavLink, useParams } from "react-router-dom";

export const Category = () => {
  const { id } = useParams();
console.log(useParams(3));
  let category = 'ghbdtn';

  if (id === "1") {
    category = <div>ПЛЕЙЛИСТ ДНЯ</div>;
  } else if (id === "2") {
    category = <div>100 ТАНЦЕВАЛЬНЫХ ХИТОВ</div>;
  } else if (id === "3") {
    category = <div>ИНДИ ЗАРЯД НА ОБУЧЕНИЕ</div>;
  }

  return(
    <div style={{ backgroundColor: "black" }}>
        {category}
        <NavLink style={{color: 'red', textDecoration: 'none'}} to={'/'}> 
            Вернуться на глваную
        </NavLink>
        </div>
    ) 
};
