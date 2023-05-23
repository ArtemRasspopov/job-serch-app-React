import React from "react";
import { Header } from "./Header/Header";
import EmptyPage from "../pages/EmptyPage/EmptyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchVacancyPage from "../pages/SearchVacancyPage/SearchVacancyPage";
import FavoriteVacancyPage from "../pages/FavoritesVacancyPage/FavoritesVacancyPage";
import VacancyOnePage from "../pages/VacancyOnePage/VacancyOnePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="site">
        <Header />
        <Routes>
          <Route path="/" element={<SearchVacancyPage />} />
          <Route path="/vacancy/:id" element={<VacancyOnePage />} />
          <Route path="/favourites" element={<FavoriteVacancyPage />} />
          <Route path={"empty" && "*"} element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
