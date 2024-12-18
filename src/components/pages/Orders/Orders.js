import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";

export default function Orders() {
  const [click, setClick] = useState();
  const filterhandle = () => {
    setClick(true);
  }
  const handleClose = () => {
    setClick(false);
  }
  // Add Additional Filter
  const [filters, setFilters] = useState([]);

  const addFilter = () => {
    setFilters([...filters, { field: '', operator: '', value: '' }]);
  };

  const filterAddhandle = () => {
    addFilter();
  };

  const filterAddClose = (index) => {
    setFilters(filters.filter((filter, i) => i !== index));
  };
  return (
    <>
      <div className='container customers-section'>
        {click && (
          <div className='card p-4 mb-3'>
            <div className="filterbox">
              <div className='d-flex justify-content-between mb-3'>
                <h5 className="card-title">Filters</h5>
                <button className='border bg-white rounded-circle' onClick={handleClose} style={{ padding: "2px 6px", }}><i class="bi bi-x"></i></button>
              </div>
              <div className='row'>
                <div className='col-md-12 d-flex gap-2'>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Create at</option>
                    <option value="1">Customer Name</option>
                    <option value="2">Customer Email</option>
                    <option value="2">Customer Phone</option>
                    <option value="2">Status</option>
                    <option value="2">Amount</option>
                    <option value="2">Shipping Method</option>
                    <option value="2">Payment Method</option>
                    <option value="2">Payment Status</option>
                  </select>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Is Equal to</option>
                    <option value="1">Greater Than</option>
                    <option value="2">Less Than</option>
                  </select>
                  <div className='col-md-3'>
                    <div className="input-group" style={{ maxWidth: "300px" }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Value"
                        aria-label="Search"
                      />
                    </div>
                  </div>
                </div>
                {filters.map((filter, index) => (
                  <div key={index} className='col-md-12 mt-3 d-flex gap-2'>
                    <select class="form-select" aria-label="Default select example" style={{ width: "75%" }}>
                      <option selected>Create at</option>
                      <option value="1">Customer Name</option>
                      <option value="2">Customer Email</option>
                      <option value="2">Customer Phone</option>
                      <option value="2">Status</option>
                      <option value="2">Amount</option>
                      <option value="2">Shipping Method</option>
                      <option value="2">Payment Method</option>
                      <option value="2">Payment Status</option>
                    </select>
                    <select class="form-select" aria-label="Default select example" style={{ width: "75%" }}>
                      <option selected>Contains</option>
                      <option value="0">Is Equal To</option>
                      <option value="1">Greater Than</option>
                      <option value="2">Less Than</option>
                    </select>
                    <select class="form-select" aria-label="Default select example" style={{ width: "75%" }}>
                      <option selected>Pending</option>
                      <option value="0">Processing</option>
                      <option value="1">Compeleted</option>
                      <option value="2">Cancel</option>
                      <option value="2">Partial Returned</option>
                      <option value="2">Returned</option>
                    </select>
                    <button className='border bg-white p-2 rounded' onClick={() => filterAddClose(index)}><i className='bi bi-trash text-danger'></i></button>
                  </div>
                ))}
                <div className='col-md-6 mt-3 '>
                  <button className="bg-white p-2 rounded border me-2" onClick={filterAddhandle}>Add Additional Filter</button>
                  <button className="bg-white p-2 rounded border">Apply</button>
                </div>
              </div>
            </div>
          </div>

        )}

        <div className='card p-4 '>
          <h5 className="card-title">Orders </h5>
          <div className='row'>
            <div className='col-md-8 col-sm-6 col-xs-12'>
              <div className=' mb-3' style={{ width: "fit-content" }}>
                <div class="btn-group me-2 mt-2">
                  <button type="button" class="btn border rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Bulk Actions
                  </button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item">
                      <div class="dropdown">
                        <li class="">Bulk Changes &raquo;</li>
                        <div class="dropdown-content">
                          <a href="#">Create at</a>
                          <a href="#">Name</a>
                          <a href="#">Status</a>
                        </div>
                      </div>

                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li class="dropdown-item">Delete</li>
                  </ul>
                </div>
                <button className="btn filter-btn me-2 mt-2" onClick={filterhandle}>Filters</button>
                <button className='btn border bg-white me-2 mt-2 rounded'><i class="bi bi-plus"></i> Create</button>
                <div class="btn-group me-2 mt-2">
                  <button type="button" class="btn border rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-download"></i> Export <i className='bi bi-chevron-down'></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><i className='bi bi-filetype-csv'></i> CSV</li>
                    <li class="dropdown-item"><i className='bi bi-filetype-xls'></i>Excel</li>
                  </ul>
                </div>
                <button className='btn border bg-white me-2 mt-2 rounded'><i class="bi bi-arrow-clockwise"></i> Reload</button>
              </div>
            </div>
            <div className='col-md-4 mt-2 mb-3'>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </div>
            </div>
          </div>
          <div class="table-responsive text-nowrap">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Payment Status</th>
                  <th>Status</th>
                  <th>Tax Amount</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>23</td>
                  <td>Prati Patil dvucops@gmail.com</td>
                  <td>$ 1,000</td>
                  <td>Paypal</td>
                  <td><span class="badge bg-label-success me-1">Compeleted</span></td>
                  <td><span class="badge bg-label-primary me-1">Active</span></td>
                  <td>$ 100</td>
                  <td>
                    <ul className='d-flex mb-0 ps-1'>
                      <li style={{ listStyleType: "none" }}>
                        <Link to="/editorder">
                          <i className='bi bi-pencil-square text-primary me-1'></i>
                        </Link>
                      </li>
                      <li style={{ listStyleType: "none" }}>
                        <Link>
                          <i className='bi bi-trash3 text-danger me-1'></i>
                        </Link>
                      </li>
                    </ul>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
