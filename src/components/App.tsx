import React from "react";
import {Header} from "./Header/Header";
// import SearchVacancyPage from "../pages/SearchVacancyPage/SearchVacancyPage";
import VacancyPage from "../pages/VacancyPage/VacancyPage";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <SearchVacancyPage/> */}
      <VacancyPage/>
    </div>
  );
}

export default App;
