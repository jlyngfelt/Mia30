import { useState, useEffect } from "react";
import { AdminLogin } from "./auth/AdminLogin";
import { AdminPanel } from "./auth/AdminPanel/AdminPanel";
import { Form } from "./components/form/Form";
import { Menu } from "./components/menu/Menu";
import "./App.css";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("adminLoggedIn") === "true") {
      setShowAdmin(true);
    }
  }, []);

  return (
    <>
      <Menu />
      {showAdmin ? <AdminPanel /> : <AdminLogin />}
      <Form />
    </>
  );
}

export default App;
