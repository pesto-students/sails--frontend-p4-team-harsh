import "./App.css";
import "./styles/app.scss";
import Layout from "./components/layout";
import AdminDashboard from "./screens/adminDashboard";

function App() {
  return (
    <div className="App">
      <Layout>
        <AdminDashboard />
      </Layout>
    </div>
  );
}

export default App;
