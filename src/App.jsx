import "./App.css";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import AdminDashboard from "./screens/adminDashboard";
import LoginPage from "./screens/loginPage";
import Leads from "./screens/leads";
import Manager from "./screens/manager";
import SalesTeam from "./screens/salesTeam";
import AddCompany from "./screens/addCompany";
import axios from "axios";
import Companies from "./screens/companies";
import Addcampaign from "./screens/addcampaign";
import Campaigns from "./screens/campaigns";
import Register from "./screens/register";
import ResetPassword from "./screens/resetpassword";
import Cookies from "universal-cookie";
import ProtectedRoutes from "./protectedRoutes";

const cookies = new Cookies();

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/sales-team" element={<SalesTeam />} />
            <Route path="/register-company" element={<AddCompany />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/add-campaign" element={<Addcampaign />} />
            <Route path="/campaigns" element={<Campaigns />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
};

export const authAxios = axios.create({
  baseUrl: process.env.REACT_APP_BASE_URL,
  headers: {
    "x-access-token": cookies.get("access_token"),
  },
});

export default App;
