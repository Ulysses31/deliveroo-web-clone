import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import RestaurantComponent from "./components/RestaurantComponent";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/restaurant" element={<RestaurantComponent />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
