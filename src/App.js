import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Notfound from "./components/Notfound";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";




const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>} />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
)


export default App