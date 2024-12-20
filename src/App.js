import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Products from "./components/pages/Product/Products";
import Orders from "./components/pages/Orders/Orders";
import Customers from "./components/pages/Customers";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import RecentPost from "./components/pages/RecentPost";
import Reports from "./components/pages/Reports";
import EditOrder from "./components/pages/Orders/EditOrder";
import CreateOrder from "./components/pages/CreateOrder";
import ProductList from "./components/pages/Product/ProductList";
function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="app d-flex h-100">
        {/* Sidebar */}
        <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

        <div
          className={`content-wrapper ${isSidebarCollapsed ? "collapsed" : ""}`}
          style={{
            width: isSidebarCollapsed ? "calc(100% - 0)" : "calc(100% - 106px)",
            transition: "margin-left 0.3s ease",
          }}
        >
          {/* Header */}
          <Header
            className={`header ${isSidebarCollapsed ? "collapsed" : ""}`}
            toggleSidebar={toggleSidebar}
          />

          {/* Main Content */}
          <main style={{marginTop: "67px", minHeight: "100vh"}}
            className={`main-content p-3 ${isSidebarCollapsed ? "collapsed" : ""}`}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/recent-post" element={<RecentPost />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/editorder" element={<EditOrder />} />
              <Route path="/createorder" element={<CreateOrder />} />
              <Route path="/productslist" element={<ProductList />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;