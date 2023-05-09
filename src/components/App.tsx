import React from "react";
import { Header } from "./Header/Header";
import EmptyPage from "../pages/EmptyPage/EmptyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VacancyPage from "../pages/VacancyPage/VacancyPage";
import SearchVacancyPage from "../pages/SearchVacancyPage/SearchVacancyPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SearchVacancyPage />} />
          <Route path="/vacancy/:id" element={<VacancyPage />} />
          <Route path={'empty' && '*'} element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
