import { BrowserRouter, Routes, Route} from "react-router-dom";
import DashBoard from "../components/DashBoard/DashBoard";
import Login from "../components/Login/Login";
const  Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;