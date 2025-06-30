import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Admin Pages
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;
