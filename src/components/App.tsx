import React from "react";
import Header from "./Header/Header";
import { PageContainer } from "./containers/PageContainer";

function App() {
  return (
    <div className="app">
      <PageContainer>
        <Header />
      </PageContainer>
    </div>
  );
}

export default App;
