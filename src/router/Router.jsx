import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Layout from '../layout/Layout.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Contacts from '../pages/Contacts.jsx';
import ContactProfile from '../pages/ContactProfile.jsx';
import Pipelines from '../pages/Pipelines.jsx';

function ProtectedRoute({ children }){
  const { user } = useAuth();
  return user ? children : <Navigate to='/login' />;
}

export default function AppRouter(){
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='contacts/:id' element={<ContactProfile />} />
        <Route path='pipelines' element={<Pipelines />} />
      </Route>
    </Routes>
  );
}