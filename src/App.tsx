import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import BarberDashboard from './pages/BarberDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';
import React from "react";
import type { ReactNode, ErrorInfo } from "react";


class ErrorBoundary extends React.Component<{ children: ReactNode }, { hasError: boolean }> {
  state: { hasError: boolean } = { hasError: false };
  static getDerivedStateFromError(_error: unknown): { hasError: boolean } {
    return { hasError: true };
  }
  componentDidCatch(_error: unknown, _errorInfo: ErrorInfo): void {
    // log error
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<ErrorBoundary><LoginScreen /></ErrorBoundary>} />
          <Route path="/register" element={<ErrorBoundary><RegisterScreen /></ErrorBoundary>} />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/barber-dashboard" element={
            <ProtectedRoute>
              <BarberDashboard />
            </ProtectedRoute>
          } />
          <Route path="/appointments" element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          } />
          
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
