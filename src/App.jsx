import { useContext, useEffect, useState } from "react";
import { Block, Main } from "./components";
import { ExplorerContext, ExplorerProvider } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ExplorerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/block/:number" element={<Block />} />
        </Routes>
      </BrowserRouter>
    </ExplorerProvider>
  );
}

export default App;
