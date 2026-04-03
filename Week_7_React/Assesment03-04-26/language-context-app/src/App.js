import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  return (
    <LanguageProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Multi Language App</h1>
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
