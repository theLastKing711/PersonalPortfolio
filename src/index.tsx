import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Languages from "./pages/Languages";
import Skills from "./Skills";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-black min-h-screen flex flex-col">
        <div className="container mx-auto relative">
          <Header />
          <main className="h-full px-4">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/languages" element={<Languages />} />
              <Route path="/skills" element={<Skills />}></Route>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
