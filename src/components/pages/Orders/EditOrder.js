import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function EditOrder() {
    const [selectedType, setSelectedType] = useState("home");
    const [selectedBilling, setSelectedBilling] = useState("Billing_home");
    // delivery
    const shippingSteps = [
        {
            title: "Order was placed (Order ID: #32543)",
            description: "Your order has been placed successfully",
            date: "Tuesday 11:29",
            completed: true,
        },
        {
            title: "Pick-up",
            description: "Pick-up scheduled with courier",
            date: "Wednesday 11:29",
            completed: true,
        },
        {
            title: "Dispatched",
            description: "Item has been picked up by courier",
            date: "Thursday 11:29",
            completed: true,
        },
        {
            title: "Package arrived",
            description: "Package arrived at an Amazon facility, NY",
            date: "Saturday 15:20",
            completed: false,
        },
        {
            title: "Dispatched for delivery",
            description: "Package has left an Amazon facility, NY",
            date: "Today 14:12",
            completed: false,
        },
        {
            title: "Delivery",
            description: "Package will be delivered by tomorrow",
            date: null,
            completed: false,
        },
    ];

    return (
        <>
            <div className='container editorder-section'>
                <div className='row'>
                    <div className='col-md-8 mb-3'>
                        <div className='card mb-3'>
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
                        <div className="card">
                            <div className="container mt-4">
                                <h4 className="card-title mb-4">Shipping activity</h4>
                                <ul className="list-unstyled position-relative">
                                    {shippingSteps.map((step, index) => (
                                        <li
                                            key={index}
                                            className="d-flex position-relative mb-4"
                                            style={{ paddingLeft: "2rem",}}
                                        >
                                            {/* Step Indicator */}
                                            <span
                                                className={`position-absolute top-0 start-0 translate-middle rounded-circle border ${step.completed ? "bg-primary" : "bg-secondary"
                                                    }`}
                                                style={{
                                                    width: "9px",
                                                    height: "9px",
                                                    marginTop: "8px",
                                                    marginLeft: "6px",
                                                }}
                                            ></span>

                                            {/* Line */}
                                            {index < shippingSteps.length - 1 && (
                                                <span
                                                    className="shipping_timeline position-absolute top-0 start-0 translate-middle"
                                                    style={{
                                                        width: "1px",
                                                        height: "77px",
                                                        backgroundColor: step.completed ? "#0d6efd" : "#6c757d",
                                                        marginLeft: "6px",
                                                        marginTop:"55px",
                                                    }}
                                                ></span>
                                            )}

                                            {/* Step Content */}
                                            <div>
                                                <h6
                                                    className={`fw-bold ${step.completed ? "text-dark" : "text-secondary"
                                                        }`}
                                                >
                                                    {step.title}
                                                </h6>
                                                <p className="mb-0 text-muted" style={{ fontSize: "0.9rem" }}>
                                                    {step.description}
                                                </p>
                                                {step.date && (
                                                    <small className="text-muted">{step.date}</small>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card mb-3 customer-details">
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
                                <div className="d-flex justify-content-between modalBtn">
                                    <h6 className="mb-1" style={{ color: "#000", fontWeight: "500", lineHeight: "25px", }}>Contact info</h6>
                                    <h6 className="mb-1">
                                        <button type="button" class="btn p-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ textDecoration: "underline", color: "dodgerblue" }}>
                                            Edit
                                        </button>
                                    </h6>
                                </div>
                                <p style={{ fontSize: "14px" }} className=" mb-1">Email: Shamus889@yahoo.com</p>
                                <p style={{ fontSize: "14px" }} className=" mb-0">Mobile: +1 (609) 972-22-22</p>
                            </div>
                        </div>
                        {/* second card */}
                        <div class="card mb-3 customer-details">
                            <div class="card-header d-flex justify-content-between">
                                <h5 class="card-title m-0">Shipping address</h5>
                                <h6 class="m-0"><button type="button" class="btn p-0" data-bs-toggle="modal" data-bs-target="#shipping_address" style={{ textDecoration: "underline", color: "dodgerblue" }}>Edit</button></h6>
                            </div>
                            <div class="card-body">
                                <p class="mb-0">45 Roker Terrace <br />Latheronwheel <br />KW5 8NW,London <br />UK</p>
                            </div>
                        </div>
                        {/* Thrid Card */}
                        <div class="card mb-3 customer-details">
                            <div class="card-header d-flex justify-content-between">
                                <h5 class="card-title m-0">Billing address</h5>
                                <h6 class="m-0"><button type="button" class="btn p-0" data-bs-toggle="modal" data-bs-target="#billing_address" style={{ textDecoration: "underline", color: "dodgerblue" }}>Edit</button></h6>
                            </div>
                            <div class="card-body">
                                <p class="mb-6">45 Roker Terrace <br />Latheronwheel <br />KW5 8NW,London <br />UK</p>
                                <h5 class="mb-1">Mastercard</h5>
                                <p class="mb-0">Card Number: ******4291</p>
                            </div>

                        </div>

                    </div>
                </div>
                {/* Billing Address */}
                <div class="modal fade" id="billing_address" tabindex="-1" aria-labelledby="billing_addressLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-body">
                                <div class="text-center mb-6">
                                    <h1 class="mb-1" style={{ fontSize: "1.375rem", fontWeight: "600" }}>Add New Address</h1>
                                    <p style={{ color: "#b1adad" }}>Add new address for express delivery</p>
                                </div>
                                {/* Form */}
                                <div className="container my-5 p-4 bg-white">
                                    {/* Address Type Selection */}
                                    <div className="row mb-4">
                                        <div className="col-md-6 mb-3 col-sm-12 position-relative">
                                            <div className={`p-3 border rounded ${selectedBilling === "Billing_home" ? "border-primary" : ""
                                                }`}
                                                onClick={() => setSelectedBilling("Billing_home")}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <h6 className="text-primary text-center">🏠 Home</h6>
                                                <p className="text-center text-muted mb-0">Delivery time (9am - 9pm)</p>
                                                {selectedBilling === "Billing_home" && (
                                                    <div className="text-center mt-2 position-absolute top-0">
                                                        <input class="form-check-input" type="radio" name="check" id="Billing_hone" checked />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3 col-sm-12  position-relative">
                                            <div
                                                className={`p-3 border rounded ${selectedBilling === "Billing_office" ? "border-primary" : ""
                                                    }`}
                                                onClick={() => setSelectedBilling("Billing_office")}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <h6 className="text-primary text-center">🏢 Office</h6>
                                                <p className="text-center text-muted mb-0">Delivery time (9am - 5pm)</p>
                                                {selectedBilling === "Billing_office" && (
                                                    <div className="text-center mt-2 position-absolute top-0">
                                                        <input class="form-check-input" type="radio" name="check" id="Billing_offices" checked />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Form Fields */}
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">First Name</label>
                                                <input type="text" className="form-control" placeholder="John" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Last Name</label>
                                                <input type="text" className="form-control" placeholder="Doe" />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Country</label>
                                            <select className="form-select">
                                                <option>Select value</option>
                                                <option>USA</option>
                                                <option>India</option>
                                                <option>Canada</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Address Line 1</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="12, Business Park"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Address Line 2</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Mall Road"
                                            />
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Landmark</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nr. Hard Rock Cafe"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">City</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Los Angeles"
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">State</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="California"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Zip Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="99950"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-check mb-4">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="billingAddress"
                                            />
                                            <label className="form-check-label" htmlFor="billingAddress">
                                                Use as a billing address?
                                            </label>
                                        </div>

                                        {/* Submit and Cancel Buttons */}
                                        <div className="d-flex justify-content-center gap-2">
                                            <button type="submit" className='submitBtn me-2'>
                                                Submit
                                            </button>
                                            <button type="button" className='cancelBtn border rounded p-2 bg-white'>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Shippind Adress Form Modal */}
                <div class="modal fade" id="shipping_address" tabindex="-1" aria-labelledby="shipping_addressLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-body">
                                <div class="text-center mb-6">
                                    <h1 class="mb-1" style={{ fontSize: "1.375rem", fontWeight: "600" }}>Add New Address</h1>
                                    <p style={{ color: "#b1adad" }}>Add new address for express delivery</p>
                                </div>
                                {/* Form */}
                                <div className="container my-5 p-4 bg-white">
                                    {/* Address Type Selection */}
                                    <div className="row mb-4">
                                        <div className="col-md-6 mb-3 col-sm-12 position-relative">
                                            <div className={`p-3 border rounded ${selectedType === "home" ? "border-primary" : ""
                                                }`}
                                                onClick={() => setSelectedType("home")}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <h6 className="text-primary text-center">🏠 Home</h6>
                                                <p className="text-center text-muted mb-0">Delivery time (9am - 9pm)</p>
                                                {selectedType === "home" && (
                                                    <div className="text-center mt-2 position-absolute top-0">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3 col-sm-12  position-relative">
                                            <div
                                                className={`p-3 border rounded ${selectedType === "office" ? "border-primary" : ""
                                                    }`}
                                                onClick={() => setSelectedType("office")}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <h6 className="text-primary text-center">🏢 Office</h6>
                                                <p className="text-center text-muted mb-0">Delivery time (9am - 5pm)</p>
                                                {selectedType === "office" && (
                                                    <div className="text-center mt-2 position-absolute top-0">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Form Fields */}
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">First Name</label>
                                                <input type="text" className="form-control" placeholder="John" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Last Name</label>
                                                <input type="text" className="form-control" placeholder="Doe" />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Country</label>
                                            <select className="form-select">
                                                <option>Select value</option>
                                                <option>USA</option>
                                                <option>India</option>
                                                <option>Canada</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Address Line 1</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="12, Business Park"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Address Line 2</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Mall Road"
                                            />
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Landmark</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Nr. Hard Rock Cafe"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">City</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Los Angeles"
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">State</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="California"
                                                />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label">Zip Code</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="99950"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-check mb-4">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="billingAddress"
                                            />
                                            <label className="form-check-label" htmlFor="billingAddress">
                                                Use as a billing address?
                                            </label>
                                        </div>

                                        {/* Submit and Cancel Buttons */}
                                        <div className="d-flex justify-content-center gap-2">
                                            <button type="submit" className='submitBtn me-2'>
                                                Submit
                                            </button>
                                            <button type="button" className='cancelBtn border rounded p-2 bg-white'>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-body">
                                <div class="text-center mb-6">
                                    <h1 class="mb-1" style={{ fontSize: "1.375rem", fontWeight: "600" }}>Edit User Information</h1>
                                    <p style={{ color: "#b1adad" }}>Updating user details will receive a privacy audit.</p>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col-md-6'>
                                        <div class="mb-3">
                                            <label for="first_name" class="form-label">First Name</label>
                                            <input type="text" class="form-control" id="first_name" />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="mb-3">
                                            <label for="last_name" class="form-label">Last Name</label>
                                            <input type="text" class="form-control" id="last_name" />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div class="mb-3">
                                            <label for="username" class="form-label">Username</label>
                                            <input type="text" class="form-control" id="username" />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="mb-3">
                                            <label for="taxID" class="form-label">Tax ID</label>
                                            <input type="text" class="form-control" id="taxID" />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class=" mb-3">
                                            <label for="number" class="form-label">Phone</label>
                                            <input type="number" class="form-control" aria-label="number" />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div class=" mb-3">
                                            <label for="number" class="form-label">City</label>
                                            <select class="form-select form-select-sm" aria-label="Small select example">
                                                <option selected>Jaipur</option>
                                                <option value="1">Jodhpur</option>
                                                <option value="2">Ajmer</option>
                                                <option value="3">Tonk</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-12 text-center'>
                                        <button className='submitBtn me-2'>Submit</button>
                                        <button className='cancelBtn border rounded p-2 bg-white' data-bs-dismiss="modal" aria-label="Close">Cancel</button>

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