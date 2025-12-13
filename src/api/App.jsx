import Router from "./router/Router.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
