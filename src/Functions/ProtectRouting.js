import React from "react";
import { Navigate, Outlet } from "react-router-dom";//!ПОМНИ, ЧТО МЫ ИСПОЛЬЗУЕМ {} ДЛЯ ТОГО, ЧТОБЫ ИНТЕРПРИТАТОР ВИДЕЛ, ЧТО ЭТО ЧАСТЬ JS

export const ProtectRouting = ({redirectPath = "/login-page"}) => {//!мы устанавливаем параметром функции выражение(по сути объявляем переменную) в которой аргумент будет равен пути в адресной строке
    if (!localStorage.name) {//!если в локалсторедже нет данных, то =>
        return <Navigate to={redirectPath} replace/>//!используем компонент Navigate, который перенаправляет пользователя по пути login-page, который привязан в роуте к компоненту
    }
    return <Outlet/>//!Этот компонент являеися контейнером для вложенных маршрутов,
}

