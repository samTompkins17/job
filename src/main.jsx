import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routees/Approutes";
import "./styles/global.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);