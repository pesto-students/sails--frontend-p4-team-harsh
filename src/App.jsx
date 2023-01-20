import "./App.css";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import AdminDashboard from "./screens/adminDashboard";
import LoginPage from "./screens/loginPage";
// import Basicdetail from "./components/popup/basicdetail";
// import Performance from "./components/popup/performance";
// import DeleteUser from "./components/popup/deleteuser";
// import Logout from "./components/popup/logout";
// import NewLeads from "./components/newleads";
// import Createnewuser from "./screens/createnewuser";
// import Resetpassword from "./screens/resetpassword"
// import Conversionrate from "./components/conversionrate";



function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </Layout>
      {/* <Basicdetail /> */}
      {/* <Performance /> */}
      {/* <DeleteUser message="Are you sure you want to delete user?" /> */}
      {/* <Logout /> */}
      {/* <NewLeads message="New Leads Today" /> */}
      {/* <Createnewuser /> */}
      {/* <Resetpassword /> */}
      {/* <Conversionrate /> */}

    </div>
  );
}

export default App;
