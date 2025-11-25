import { useState, useEffect } from "react";
import { AdminLogin } from "./auth/adminLogin/AdminLogin";
import { AdminPanel } from "./auth/AdminPanel/AdminPanel";
import { Form } from "./components/form/Form";
import { Menu } from "./components/menu/Menu";
import { Start } from "./components/start/Start";
import { Information } from "./components/information/Information";
import "./App.css";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentPage, setCurrentPage] = useState('start'); // Add state for current page

  useEffect(() => {
    if (localStorage.getItem("adminLoggedIn") === "true") {
      setShowAdmin(true);
    }
  }, []);

  // Function to handle page changes
  const handlePageChange = (pageId) => {
    setCurrentPage(pageId);
  };

  // Function to render the correct component based on current page
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'start':
        return <Start onPageChange={handlePageChange}/>;
      case 'information':
        return <Information />;
      case 'anmalan':
        return <Form />;
      case 'admin':
        return showAdmin ? <AdminPanel /> : <AdminLogin />;
      default:
        return <Start />;
    }
  };

  return (
    <div className="app">
      <div className="app__mobile">
        <Menu currentPage={currentPage} onPageChange={handlePageChange} />
        
        {/* Main content based on current page */}
        {renderCurrentPage()}
      </div>

      <div className="app__desktop-blocker">
        <p>Öppna på mobilen istället</p>
      </div>
    </div>
  );
}

export default App;