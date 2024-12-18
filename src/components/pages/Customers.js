import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";


export default function Customers() {
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
              <div className='d-md-flex justify-content-between mb-3'>
                <h5 className="card-title">Filters</h5>
                <button className='border bg-white rounded-circle' onClick={handleClose} style={{ padding: "2px 6px", }}><i class="bi bi-x"></i></button>
              </div>
              <div className='row'>
                <div className='col-md-12 d-md-flex gap-2'>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Create at</option>
                    <option value="1">Name</option>
                    <option value="2">Email</option>
                    <option value="2">Status</option>
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
                  <div key={index} className='col-md-12 mt-3 d-md-flex gap-2'>
                    <select class="form-select" aria-label="Default select example" style={{ width: "75%" }}>
                      <option selected>Create at</option>
                      <option value="1">Name</option>
                      <option value="2">Email</option>
                      <option value="3">Status</option>
                    </select>
                    <select class="form-select" aria-label="Default select example" style={{ width: "75%" }}>
                      <option selected>Contains</option>
                      <option value="0">Is Equal To</option>
                      <option value="1">Greater Than</option>
                      <option value="2">Less Than</option>
                    </select>
                    <input type='date' className='form-control' />
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
          <h5 className="card-title">Customers</h5>
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
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>23</td>
                  <td>
                    <ul class="list-unstyled m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" aria-label="Lilian Fuller" data-bs-original-title="Lilian Fuller">
                        <img src="/admin-img/avatar.png" alt="Avatar" class="rounded-circle img-fluid" />
                      </li>
                    </ul>
                  </td>
                  <td>Albert Cook</td>
                  <td><span class="badge bg-label-primary me-1">Active</span></td>
                  <td>abc@gmail.com</td>
                  <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bi bi-three-dots-vertical"></i></button>
                      <div class="dropdown-menu">
                        <Link class="dropdown-item waves-effect" href="javascript:void(0);"><i class="bi bi-pencil-square text-primary me-1"></i> Edit</Link>
                        <Link class="dropdown-item waves-effect" href="javascript:void(0);"><i class="bi bi-trash3 text-danger me-1"></i> Delete</Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>
                    <ul class="list-unstyled m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" aria-label="Lilian Fuller" data-bs-original-title="Lilian Fuller">
                        <img src="/admin-img/avatar.png" alt="Avatar" class="rounded-circle img-fluid" />
                      </li>
                    </ul>
                  </td>
                  <td>Albert Cook</td>
                  <td><span class="badge bg-label-primary me-1">Active</span></td>
                  <td>abc@gmail.com</td>
                  <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bi bi-three-dots-vertical"></i></button>
                      <div class="dropdown-menu">
                        <Link class="dropdown-item waves-effect" href="javascript:void(0);"><i class="bi bi-pencil-square text-primary me-1"></i> Edit</Link>
                        <Link class="dropdown-item waves-effect" href="javascript:void(0);"><i class="bi bi-trash3 text-danger me-1"></i> Delete</Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>
                    <ul class="list-unstyled m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" aria-label="Lilian Fuller" data-bs-original-title="Lilian Fuller">
                        <img src="/admin-img/avatar.png" alt="Avatar" class="rounded-circle img-fluid" />
                      </li>
                    </ul>
                  </td>
                  <td>Albert Cook</td>
                  <td><span class="badge bg-label-warning me-1">Pending</span></td>
                  <td>abc@gmail.com</td>
                  <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bi bi-three-dots-vertical"></i></button>
                      <div class="dropdown-menu">
                        <Link class="dropdown-item waves-effect" href="javascript:void(0);"><i class="bi bi-pencil-square text-primary me-1"></i> Edit</Link>
                        <Link class="dropdown-item waves-effect" href="javascript:void(0);"><i class="bi bi-trash3 text-danger me-1"></i> Delete</Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>
                    <ul class="list-unstyled m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" aria-label="Lilian Fuller" data-bs-original-title="Lilian Fuller">
                        <img src="/admin-img/avatar.png" alt="Avatar" class="rounded-circle img-fluid" />
                      </li>
                    </ul>
                  </td>
                  <td>Albert Cook</td>
                  <td><span class="badge bg-label-success me-1">Compeleted</span></td>
                  <td>abc@gmail.com</td>
                  <td>
                    <div class="dropdown">
                      <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bi bi-three-dots-vertical"></i></button>
                      <div class="dropdown-menu">
                        <Link class="dropdown-item waves-effect" href="javascript:void(0);"><i class="bi bi-pencil-square text-primary me-1"></i> Edit</Link>
                        <Link class="dropdown-item waves-effect" href="javascript:void(0);"><i class="bi bi-trash3 text-danger me-1"></i> Delete</Link>
                      </div>
                    </div>
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
