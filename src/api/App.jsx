import { AuthProvider } from "./context/AuthContext";
import AppRouter from "./router/Router";

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
