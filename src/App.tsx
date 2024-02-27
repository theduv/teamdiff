import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router/Router";
import Modal from "react-modal";

import "./App.css";

const queryClient = new QueryClient();

Modal.setAppElement("#root");

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
