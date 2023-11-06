import { useState } from "react";
import Sidebar from "./Components/sidebar/sidebar";
import MainDashboard from "./Components/MainDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCustomer from "./Components/AddCustomer";
import CustomerList from "./Components/CustomerList";
import Layout from "./Components/Layout";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainDashboard />} />
            <Route path="/addCustomer" element={<AddCustomer />} />
            <Route path="/customerList" element={<CustomerList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
