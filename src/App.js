import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Notfound from "./components/Notfound";
import Profile from "./components/Profile";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";




const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>} />
      <Route path="/my-profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>} />
      <Route path="/user/:id" element={
        <ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  </BrowserRouter>
)


export default App