import React from "react";
import FilterWindow from "./FilterWindow";

const FilterButton = (props) => {

  const {isOpen, title, changeStateFilter} = props;//деструктуризируем пропс, на переменную состояния, заголовок кнопки, и колбек функция, которя запускает логику переключения

  return (// этот див является родительским блоком над кнопкой и окном, которое будет появлятся при нажатии на кнопку
    <div 
      style={{//прописываем инлайн стили, которые делают окно фильтра независимым от родительского блока в части позиционирования на странице
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div //блок с кнопкой, в тело которой мы направляем пропс, с заголовком
      className="filter__button button-author _btn-text"
      onClick={changeStateFilter}//передаем функцию пропсом в этот компонент и ставим слушатель события, нажатия на кнопку, который запускает функцию (Filter)
        >{title}
        </div> 
        {isOpen && <FilterWindow />} {/*is open содержит в себе условие(activeFilter === "author") если условие и*/}
    </div>

    // <div className="filter__button button-year _btn-text">году выпуска</div>
    // <div className="filter__button button-genre _btn-text">жанру</div>
  );
};

export default FilterButton;
