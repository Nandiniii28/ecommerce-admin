import React from 'react'
import { Link } from 'react-router-dom'

export default function EditOrder() {
    return (
        <>
            <div className='container editorder-section'>
                <div className='row'>
                    <div className='col-md-8 mb-3'>
                        <div className='card'>
                            <div className='p-4 pb-0'>
                                <div className='card-title d-flex justify-content-between'>
                                    <h4>Edit Order</h4>
                                    <span className='badge bg-label-danger' style={{ height: "-webkit-fill-available" }}><i className='bi bi-cart me-1'></i>Uncomplete</span>
                                </div>
                            </div>
                            <hr className='m-0' />
                            <div className='card-body px-0'>
                                <div className='table-responsive'>
                                    <table className='table table-hover w-100'>
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <div className="form-check d-flex justify-content-center align-items-center">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                                    </div>
                                                </th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
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
                                                <td> 2  </td>
                                                <td> ₹1.3L  </td>
                                                <td> ₹2.6L </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check d-flex justify-content-center align-items-center">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecke3" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-start align-items-center text-nowrap">
                                                        <div className="avatar-wrapper">
                                                            <div className="avatar avatar-sm me-3">
                                                                <img src="/admin-img/facecream.png" alt="product-Wooden Chair" className="rounded-2 object-fit-cover img-fluid" style={{ width: "2.5rem", height: "2.5rem" }} />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <h6 className="text-heading mb-0">Face cream</h6>
                                                            <small>Gender:Women</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> 2  </td>
                                                <td> ₹1.3L  </td>
                                                <td> ₹2.6L </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check d-flex justify-content-center align-items-center">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" />
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
                                                <td> 2  </td>
                                                <td> ₹1.3L  </td>
                                                <td> ₹2.6L </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="form-check d-flex justify-content-center align-items-center">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-start align-items-center text-nowrap">
                                                        <div className="avatar-wrapper">
                                                            <div className="avatar avatar-sm me-3">
                                                                <img src="/admin-img/nikejordan.png" alt="product-Wooden Chair" className="rounded-2 object-fit-cover img-fluid" style={{ width: "2.5rem", height: "2.5rem" }} />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <h6 className="text-heading mb-0">Nike Jordan</h6>
                                                            <small>Size:8UK</small>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td> 2  </td>
                                                <td> ₹1.3L  </td>
                                                <td> ₹2.6L </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="accordion accordion-flush" id="product-summary">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#productSummary" aria-expanded="false" aria-controls="productSummary">
                                                    Products Summary
                                                </button>
                                            </h2>
                                            <div id="productSummary" className="accordion-collapse collapse" data-bs-parent="#product-summary">
                                                <div className="accordion-body">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>Quantity:</td>
                                                                <td>2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Subtotal:</td>
                                                                <td>$2093</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Discount:</td>
                                                                <td>$2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Shipping fee:</td>
                                                                <td>$2</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tax:</td>
                                                                <td>$28</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Payment Method:</td>
                                                                <td>Cash on Delivery</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Payment Status:</td>
                                                                <td>Processing</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Order Status:</td>
                                                                <td>Processing</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Order Date:</td>
                                                                <td>2023-01-01</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Delivery Date:</td>
                                                                <td>2023-01-05</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Payment Date:</td>
                                                                <td>2023-01-06</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total:</td>
                                                                <td>$2113</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className='d-flex justify-content-end gap-2'>
                                                        <button className='btn PrintBtn'><i className='bi bi-printer me-1'></i>Print Invoice</button>
                                                        <button className='btn DownloadBtn'><i className='bi bi-download me-1'></i>Download Invoice</button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card mb-6 customer-details">
                            <div className="card-header">
                                <h5 className="card-title m-0">Customer details</h5>
                            </div>
                            <div className="card-body customer-id">
                                <div className="d-flex justify-content-start align-items-center mb-5">
                                    <div className="avatar me-3">
                                        <img src="/admin-img/avatar.png" alt="Avatar" className="rounded-circle" />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <Link href="app-user-view-account.html" className="text-body text-nowrap">
                                            <h6 className="mb-0">Shamus Tuttle</h6>
                                        </Link>
                                        <span>Customer ID: #58909</span></div>
                                </div>
                                <div className="d-flex justify-content-start align-items-center mb-5">
                                    <span className="avatar rounded-circle bg-label-success me-3 d-flex align-items-center justify-content-center">
                                        <i className="bi bi-cart ti-lg"></i>
                                    </span>
                                    <h6 className="text-nowrap mb-0" style={{ color: "#444050", }}>12 Orders</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="mb-1">Contact info</h6>
                                    <h6 className="mb-1"><Link href=" javascript:void(0)">Edit</Link></h6>
                                </div>
                                <p className=" mb-1">Email: Shamus889@yahoo.com</p>
                                <p className=" mb-0">Mobile: +1 (609) 972-22-22</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}