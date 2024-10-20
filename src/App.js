import React from "react";
import "./App.css";
import "./Header.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";  // Import the Login component
import { IntlProvider } from "react-intl"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";  // Assuming you have a Payment component

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
            {/* Login Route */}
            <Route path="/login" element={<Login />} />
            
            {/* Checkout Route */}
            <Route path="/checkout" element={
              <>
                <Checkout />
              </>
            } />

            {/* Payment Route */}
            <Route path="/payment" element={
              <>
                <Payment />
                
              </>
            } />

            {/* Home Route */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
