import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  // const [isActive, setIsActive] = useState(false);

  // const handleaAddactive = () => {
  //   setIsActive(!isActive);
  // };
  const handleClick = () => {

    return (!true); // or false
  };
  return (
    <div
      className={`sidebar bg-light text-dark d-flex flex-column ${isCollapsed ? "collapsed" : ""
        }`}
      style={{
        width: isCollapsed ? "80px" : "250px",
        transition: "width 0.3s ease",
        // height: "100vh",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Sidebar Header */}
      <div className="sidebar-header p-3 d-flex align-items-center">
        <i
          className="bi bi-layout-sidebar-inset-reverse fs-4 toggle-btn"
          onClick={toggleSidebar}
          style={{ cursor: "pointer" }}
        ></i>
        {!isCollapsed && (
          <span className="ms-2 fs-5 fw-bold">E_Com</span>
        )}
      </div>

      {/* Navigation Links */}
      <ul className="list-unstyled sidebarfixed mt-4">
        <li>
          <Link
            to="/"
            className={`nav-link d-flex align-items-center px-3 py-2 ${isCollapsed ? "justify-content-center" : ""} ${handleClick() ? "active" : ""}`}
          >
            <i className="bi bi-house me-3 fs-5"></i>
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/customers"
            className={`nav-link d-flex align-items-center px-3 py-2 ${isCollapsed ? "justify-content-center" : ""} ${handleClick() ? "active" : ""}`}
          >
            <i className="bi bi-person-check me-3 fs-5"></i>
            {!isCollapsed && <span>Customers</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`nav-link d-flex align-items-center px-3 py-2 ${isCollapsed ? "justify-content-center" : ""} ${handleClick() ? "active" : ""}`}
          >
            <i className="bi bi-box me-3 fs-5"></i>
            {!isCollapsed && <span>Products</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/orders"
            className={`nav-link d-flex align-items-center px-3 py-2 ${isCollapsed ? "justify-content-center" : ""} ${handleClick() ? "active" : ""}`}
          >
            <i className="bi bi-cart me-3 fs-5"></i>
            {!isCollapsed && <span>Orders</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/recent-post"
            className={`nav-link d-flex align-items-center px-3 py-2 ${isCollapsed ? "justify-content-center" : ""} ${handleClick() ? "active" : ""}`}
          >
            <i className="bi bi-mailbox me-3 fs-5"></i>
            {!isCollapsed && <span>Recent Post</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/reports"
            className={`nav-link d-flex align-items-center px-3 py-2 ${isCollapsed ? "justify-content-center" : ""} ${handleClick() ? "active" : ""}`}
          >
            <i className="bi bi-file-earmark-text me-3 fs-5"></i>
            {!isCollapsed && <span>Report</span>}
          </Link>
        </li>
        <li>

          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <Link to="" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"
                  className={`accordion-button collapsed w-100 nav-link d-flex align-items-center px-3 py-2 ${isCollapsed ? "justify-content-center" : ""} ${handleClick() ? "active" : ""}`}
                >
                  <i className="bi bi-gear me-3 fs-5"></i>
                  {!isCollapsed && <span className="w-100">Settings</span>}
                </Link>

              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ul>
                    <li>Abc</li>
                    <li>Abc</li>
                    <li>Abc</li>
                    <li>Abc</li>
                    <li>Abc</li>
                    <li>Abc</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
