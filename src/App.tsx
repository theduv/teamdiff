import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router/Router";
import Modal from "react-modal";

import "./App.css";
import { AuthContextProvider } from "./contexts/Auth";

const queryClient = new QueryClient();

Modal.setAppElement("#root");

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
