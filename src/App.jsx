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
import Companies from "./screens/companies";
// import Addcampaign from "./screens/addcampaign";

// import Logout from "./components/popup/logout";
// import NewLeads from "./components/newleads";
import ResetPassword from "./screens/resetpassword";
// import Conversionrate from "./components/conversionrate";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/sales-team" element={<SalesTeam />} />
          <Route path="/register-company" element={<AddCompany />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/companies" element={<Companies />} />




        </Routes>
      </Layout>

      {/* <Logout /> */}
      {/* <NewLeads message="New Leads Today" /> */}
      {/* <Createnewuser /> */}
      {/* <Resetpassword /> */}
      {/* <Conversionrate /> */}
    </div>
  );
}

export default App;
