import React, { useState } from "react";
import FilterButton from "./FilterButton";

const Filter = () => {//объявляем компоненту, важно, что вся логика прописывается до return, так, как return должен вернуть нам разметку, которая должна отрисоваться
  const [activeFilter, setActive] = useState(null);//деструктурируем результат функции useState, получаем 2 переменные, одна равна состоянию объекта, вторая равна, функции, которая меняет данное состояние, ВАЖНО, что когда мы после = пишем в аргумент функции null, этим самым мы присвоили activeFilter занчение null

  const changeStateFilter = (state) => {//
    // передается пропсом в дочерний компонент FilterButton ВЫЗЫВАЕТСЯ ТАМ ЖЕ, принимает строку, котрая соответствует критерию фильтра
    console.log(state);
    if (state === activeFilter) {//сдесь строка фильтра сравнивается с текущим состоянием, то есть с той строкой, которая в текущий момент находится в переменной activeFilter
      setActive(null);//если строка в аргументе равна строке в переменной, то меняем состояние на null, то есть закрываем блок.
    } else {
      setActive(state);
    }
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterButton //вызываем компоненту, для того, чтобы она отобразилась в разметке, причем мы используем 1 компонент, который становится 3 кнопками, так как вызываетя 3 раза с разными пропсами
        isOpen={activeFilter === "author"} //пропс который передает дочернему элементу условие используется в FilterButton 
        title={"исполнителю"} 
        changeStateFilter={() => { //передаем пропсом функцию, которая принимает строку
          changeStateFilter("author");//вызов функци
        }}
      />
      <FilterButton 
        isOpen={activeFilter === "year"}
        title={"году выпуска"}
        changeStateFilter={() => {
          changeStateFilter("year");
        }}
      />
      <FilterButton
        isOpen={activeFilter === "ganre"}
        title={"жанру"}
        changeStateFilter={() => {
          changeStateFilter("ganre");
        }}
      />
    </div>
  );
};

export default Filter;
