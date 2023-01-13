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

    </div>
  );
}

export default App;