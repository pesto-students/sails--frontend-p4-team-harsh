import Cookies from "universal-cookie";
import { Outlet, Navigate } from "react-router-dom";

const cookies = new Cookies();

const useAuth = () => {
  let isAuth = false;
  const accessToken = cookies.get("access_token");
  if (accessToken) {
    isAuth = true;
  }
  return isAuth;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
