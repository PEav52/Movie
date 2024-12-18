import { Routes, Route } from "react-router-dom";
import PosPage from "./page/PosPage";
import SideBarLayout from "./Components/SideBarLayout";
import CustomerPage from "./page/CustomerPage";
import CancelPage from "./page/CancelPage";
import RentalsPage from "./page/RentalsPage";
import SalePage from "./page/SalePage";
import SettingPage from "./page/SettingPage";
import HomePage from "./page/HomePage";
import NotfoundPage from "./page/NotfoundPage";
import Authentication from "./Components/Authentication";
import AuthenticationPage from "./page/AuthenticationPage";

const App = () => {
  return (
    <div className="flex">
      <Routes>
        <Route element={<SideBarLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pos" element={<PosPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/cancle" element={<CancelPage />} />
          <Route path="/rentals" element={<RentalsPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/setting" element={<SettingPage />} />

          {/* login */}
          <Route element={<Authentication />}>
            <Route path="/login" element={<AuthenticationPage />} />
          </Route>

          {/* not found */}
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
