import React from 'react';
import SideBar from "./Components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';

import UserDashBoard from './Pages/UserDashBoard.js';
import Analysis from './Pages/Analysis.js';
import BankAccount from './Pages/BankAccount.js';
import BankCard from './Pages/BankCard.js';
import Notifications from './Pages/Notifications.js';
import Organization from './Pages/Organization.js';
import Report from './Pages/Report.js';
import Setting from './Pages/Setting.js';
import Transactions from './Pages/Transactions.js';

import SettingBank from './Pages/SettingBank.js';
import SettingNotfication from './Pages/SettingNotification.js';
import SettingEmail from './Pages/SettingEmail.js';
import SettingAPI from './Pages/SettingAPI.js';
import SettingTeam from './Pages/SettingTeam.js';
import SettingPassword from './Pages/SettingPassword.js';

function App() {
  return (
    <Router>
    <SideBar>
      <Routes>
        <Route path="/" element={<UserDashBoard />} />
        <Route path="userDashBoard" element={<UserDashBoard />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="bankAccount" element={<BankAccount />} />
        <Route path="bankCard" element={<BankCard />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="organization" element={<Organization />} />
        <Route path="report" element={<Report />} />
        <Route path="setting" element={<Setting />}>
          {/* <Route index element={<SettingBank />} /> */}
          <Route path="settingBank" element={<SettingBank />} />
          <Route path="settingNotification" element={<SettingNotfication />} />
          <Route path="settingEmail" element={<SettingEmail />} />
          <Route path="settingAPI" element={<SettingAPI />} />
          <Route path="settingTeam" element={<SettingTeam />} />
          <Route path="settingPassword" element={<SettingPassword />} />
        </Route>
        <Route path="transactions" element={<Transactions />} />
      </Routes>
    </SideBar>
  </Router>
  );
}

export default App;
