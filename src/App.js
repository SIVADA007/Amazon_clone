import React from "react";
import "./App.css";
import "./Header.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";  // Import the Login component
import { IntlProvider } from "react-intl"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

// Sample messages for internationalization
const messages = {
  en: {
    "app.subtitle": "Subtotal",
    "app.items": "items",
    // Add more translation strings as needed
  },
};

function App() {
  return (
    <IntlProvider locale="en" messages={messages["en"]}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            {/* Use the Login component */}
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
