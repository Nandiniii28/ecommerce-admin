import React from 'react'
import { Link } from 'react-router-dom'

export default function AddProduct() {
    return (
        <>
            <div className='container addproduct-section'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="card mb-4">
                            <div className="card-widget-separator-wrapper">
                                <div className="card-body card-widget-separator">
                                    <div className="row gy-4 gy-sm-1">
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
                                                <div>
                                                    <p className="mb-1 text-color">In-store Sales</p>
                                                    <h4 className="mb-1">$5,345.43</h4>
                                                    <p className="mb-0"><span className="me-2" style={{ fontSize: "12px" }}>5k orders</span><span className="badge bg-label-success">+5.7%</span></p>
                                                </div>
                                                <span className="avatar me-sm-4">
                                                    <span className="avatar-initial rounded"><i className="ti-28px bi bi-house text-heading"></i></span>
                                                </span>
                                            </div>
                                            <hr className="d-none d-sm-block d-lg-none me-4" />
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
                                                <div>
                                                    <p className="mb-1 text-color">Website Sales</p>
                                                    <h4 className="mb-1">$674,347.12</h4>
                                                    <p className="mb-0"><span className="me-2" style={{ fontSize: "12px" }}>21k orders</span><span className="badge bg-label-success">+12.4%</span></p>
                                                </div>
                                                <span className="avatar p-2 me-lg-4">
                                                    <span className="avatar-initial rounded"><i className="ti-28px bi bi-laptop text-heading"></i></span>
                                                </span>
                                            </div>
                                            <hr className="d-none d-sm-block d-lg-none" />
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
                                                <div>
                                                    <p className="mb-1 text-color">Discount</p>
                                                    <h4 className="mb-1">$14,235.12</h4>
                                                    <p className="mb-0" style={{ fontSize: "12px" }}>6k orders</p>
                                                </div>
                                                <span className="avatar p-2 me-sm-4">
                                                    <span className="avatar-initial rounded"><i className="ti-28px bi bi-gift text-heading"></i></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <div>
                                                    <p className="mb-1 text-color">Montly Sales</p>
                                                    <h4 className="mb-1">$8,345.23</h4>
                                                    <p className="mb-0"><span className="me-2" style={{ fontSize: "12px" }}>150K orders</span><span className="badge bg-label-success">+3.5%</span></p>
                                                </div>
                                                <span className="avatar p-2">
                                                    <span className="avatar-initial rounded"><i className="ti-28px bi bi-wallet text-heading"></i></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Table Or Filters */}
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card mb-3'>
                            <div className="card-header pt-3 border-0">
                                <h5 className="card-title m-0">Filter</h5>
                            </div>
                            <div className='card-body'>
                                <div className='row border-bottom pb-3'>
                                    <div className='col-md-4 col-sm-12'>
                                        <select class="form-select form-select-sm" aria-label="Small select example">
                                            <option selected>Inactive</option>
                                            <option value="1">Status</option>
                                            <option value="2">Publish</option>
                                            <option value="3">scheduled</option>
                                        </select>
                                    </div>
                                    <div className='col-md-4 col-sm-12'>
                                        <select class="form-select form-select-sm" aria-label="Small select example">
                                            <option selected>Category</option>
                                            <option value="Household">Household</option>
                                            <option value="Office">Office</option>
                                            <option value="Electronics">Electronics</option>
                                            <option value="Shoes">Shoes</option>
                                            <option value="Accessories">Accessories</option>
                                            <option value="Game">Game</option>
                                        </select>
                                    </div>
                                    <div className='col-md-4 col-sm-12'>
                                        <select class="form-select form-select-sm" aria-label="Small select example">
                                            <option selected>Stock</option>
                                            <option value="In Stock">In Stock</option>
                                            <option value="Out of Stock">Out of Stock</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mt-4  border-bottom pb-3'>
                                    <div className='col-md-4'>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search Product"
                                                aria-label="Search"
                                            />

                                        </div>
                                    </div>
                                    <div className='col-md-8 d-md-flex gap-2 justify-content-end'>
                                        <select class="form-select form-select-sm product-pageDropdown" aria-label="Small select example">
                                            <option selected>10</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                            <option value="70">70</option>
                                            <option value="100">100</option>
                                        </select>
                                        <div class="btn-group">
                                            <button type="button" class="btn border rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="bi bi-download"></i> Export <i className='bi bi-chevron-down'></i>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li class="dropdown-item"><i className='bi bi-filetype-csv'></i> CSV</li>
                                                <li class="dropdown-item"><i className='bi bi-filetype-xls'></i>Excel</li>
                                            </ul>
                                        </div>
                                        <Link to='' class="btn btn-secondary add-new-product btn-primary ms-2 ms-sm-0 waves-effect waves-light" type="button">
                                            <span><i class="bi bi-plus me-0 me-sm-1 ti-xs"></i>
                                                <span class="d-none d-sm-inline-block">Add Product</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='table-responsive'>
                                            <table className='table table-hover w-100'>
                                                <thead>
                                                    <tr>
                                                        <th scope='col'></th>
                                                        <th scope="col">
                                                            <div className="form-check d-flex justify-content-center align-items-center">
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                            </div>
                                                        </th>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Stock</th>
                                                        <th scope="col">Quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className=''>
                                                            <button type="button" class="btn control" data-bs-toggle="modal" data-bs-target="#productEdit"></button>
                                                        </td>
                                                        <td>
                                                            <div className="form-check d-flex justify-content-center align-items-center">
                                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-start align-items-center text-nowrap">
                                                                <div className="avatar-wrapper">
                                                                    <div className="avatar avatar-sm me-3">
                                                                        <img src="/admin-img/woodenchair.png" alt="product-Wooden Chair" className="rounded-2 object-fit-cover img-fluid" style={{ width: "2.5rem", height: "2.5rem" }} />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-column">
                                                                    <h6 className="text-heading mb-0">Wooden Chair</h6>
                                                                    <small>Material: Wooden</small>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span class="text-truncate d-flex align-items-center text-heading">
                                                                <span class="avatar-sm icon-bg rounded-circle d-flex justify-content-center align-items-center bg-label-success me-2">
                                                                    <img src='./admin-img/sneakers.png' width={20} />
                                                                </span>Shoes
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <div class="form-check form-switch ps-0">
                                                                <input class="form-check-input ms-0" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                                            </div>
                                                        </td>
                                                        <td> <span style={{ color: "#6d6b77" }}>867</span>  </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            <div class="modal fade" id="productEdit" tabindex="-1" aria-labelledby="productEditLabel" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content p-0">
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        <div class="text-left p-5 pb-3 ps-3">
                                                            <h1 class="mb-1" style={{ fontSize: "1.375rem", fontWeight: "600" }}>Details of Zontrax</h1>
                                                        </div>
                                                        <div class="modal-body px-0 ps-3 pt-0">
                                                            <div className='table-responsive'>
                                                                <table className='table product-edit-modal w-100'>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className='align-content-center'>product:</td>
                                                                            <td>
                                                                                <div className="d-flex justify-content-start align-items-center text-nowrap">
                                                                                    <div className="avatar-wrapper">
                                                                                        <div className="avatar avatar-sm me-3">
                                                                                            <img src="/admin-img/woodenchair.png" alt="product-Wooden Chair" className="rounded-2 object-fit-cover img-fluid" style={{ width: "2.5rem", height: "2.5rem" }} />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-flex flex-column">
                                                                                        <h6 className="text-heading mb-0">Wooden Chair</h6>
                                                                                        <small>Material: Wooden</small>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
