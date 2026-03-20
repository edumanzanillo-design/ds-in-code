import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import ChakraComponents from "./ChakraComponents"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/components" element={<ChakraComponents />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
