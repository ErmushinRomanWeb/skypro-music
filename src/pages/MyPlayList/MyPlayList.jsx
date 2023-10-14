import React from "react";
import * as S from "./StyledMyPlayList"
export const MyPlayList = () => {
    return (
            <S.PlayListWrapper>
                <h1>
                    MY PLAY LIST
                </h1>
                <S.GoBackLink to={'/'}>
                    На главную
                </S.GoBackLink>
            </S.PlayListWrapper>
        )
}