import React from "react";
import AppRouting from "./pages/routes";

function App({ state }) {
  //! по сути, мы просто работаем со значением переменной, которая неявно объявляется при получении параметра.
  return (
    <AppRouting state={state}/>
  );
}
export default App;
