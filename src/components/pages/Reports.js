import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
export default function Reports() {

    const generateLatestDates = () => {
        const now = new Date();
        const istOffset = 5.5 * 60 * 60 * 1000;
        const istNow = new Date(now.getTime() + istOffset);
        const categories = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(istNow.getTime() + i * 60 * 60 * 1000);
            categories.push(date.toISOString());
        }
        return categories;
    };

    const [state, setState] = React.useState({
        series: [
            {
                name: "Customers",
                data: [31, 40, 28, 51, 42, 109, 100], // Example data
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: false,
                },
            },
            xaxis: {
                type: "datetime",
                categories: generateLatestDates(), // Use dynamically generated categories
                labels: {
                    datetimeFormatter: {
                        year: "yyyy",
                        month: "MMM yyyy",
                        day: "dd MMM",
                        hour: "HH:mm",
                    },
                },
            },
            yaxis: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            tooltip: {
                x: {
                    // Format to display IST time in the tooltip
                    formatter: function (val) {
                        const date = new Date(val); // Parse date
                        return date.toLocaleString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        });
                    },
                },
            },
        },
    });

    //   Order Chart
    const [orderstate, setOrderState] = React.useState({

        series: [{
            name: 'Orders',
            type: 'column',

            data: [440, 505, 414, 671, 227, 413, 201, 352, 752]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                width: [0, 4]
            },
            title: {
                text: 'Traffic Sources'
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: ['1 Jan 24', '2 Jan 24', '3 Jan 24', '4 Jan 24', '5 Jan 24', '6 Jan 24', '7 Jan 24', '8 Jan 24', '9 Jan 24',],
            yaxis: [{
                title: {
                    text: 'Orders',
                },

            }]
        },
    });
    // Sales Report

    const [salesstate, setSalesState] = React.useState({

        series: [
            {
                name: 'Earnings',
                data: [
                    { x: 'January', y: 6800 },
                    { x: 'February', y: 8200 },
                    { x: 'March', y: 2950 },
                    { x: 'April', y: 2200 },
                    { x: 'May', y: 3500 },
                    { x: 'June', y: 4500 },
                    { x: 'July', y: 4100 },
                    { x: 'August', y: 7100 },
                    { x: 'September', y: 4100 },
                    { x: 'October', y: 3100 },
                    { x: 'November', y: 2100 },
                    { x: 'December', y: 3100 },
                ]
            }
        ],
        options: {
            chart: {
                height: 600,
                type: 'bar',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['#EC7D31', '#36BDCB'],
            plotOptions: {
                bar: {
                    horizontal: true,
                    isDumbbell: true,
                    dumbbellColors: [['#EC7D31', '#36BDCB']],
                    barHeight: '10px',
                    borderRadius: 6,
                    rangeBarGroupRows: true,
                }
            },
            legend: {
                show: true,
                showForSingleSeries: true,
                position: 'top',
                horizontalAlign: 'left',
                customLegendItems: ['Sales']
            },
            fill: {
                type: 'gradient',
                gradient: {
                    gradientToColors: ['#36BDCB'],
                    inverseColors: false,
                    stops: [0, 100]
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true,
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            tooltip: {
                enabled: true,
                theme: 'dark',
                y: {
                    title: {
                        text: 'Earnings',
                    },
                    formatter: (value) => {
                        return `${value.toLocaleString()}`;
                    },
                },
            },


        },
    });

    // Total Earnings
    const [totalearning, setTotalEarning] = React.useState({
        series: [45250, 12238],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
            labels: ['Completed', 'Pending'],
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: 'Total Earnings',
                                style: {
                                    fontSize: '12px',
                                    fontWeight: 'bold',
                                    color: '#333',
                                },
                                formatter: function (w) {
                                    const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                    return `₹ ${total.toLocaleString()}`;
                                },
                            },
                        },
                    },
                },
            },
            legend: {
                position: 'bottom',
                formatter: function (val, opts) {
                    const values = [
                        `₹ ${opts.w.globals.series[0].toLocaleString()} Completed`,
                        `₹ ${opts.w.globals.series[1].toLocaleString()} Pending`
                    ];
                    return values[opts.seriesIndex];
                },
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'gradient',
            },
            title: {
                text: 'Total Earnings',
            },
            tooltip: {
                enabled: true,
                theme: 'dark',
                y: {
                    title: {
                        text: 'Total Earnings',
                    },
                    formatter: (value) => {
                        return `₹ ${value.toLocaleString()}`;
                    },
                },
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    });



    return (
        <>
            <div className='container reports-section'>
                <div className="row">
                    <div className='col-lg-3 col-sm-6 mb-3'>
                        <div class="card order-revenue dashboard-card h-100">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-2">
                                    <div class="avatar me-3">
                                        <span class="avatar-initial rounded bg-label-primary">
                                            <i class="bi bi-truck"></i></span>
                                    </div>
                                    <h4 class="mb-0">₹ 70,238.96</h4>
                                </div>
                                <p class="mb-1">Order Revenue</p>
                                <p class="mb-0">
                                    <span class="text-heading text-success fw-medium me-2">+18.2%</span>
                                    <small class="text-muted">than last week</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-3">
                        <div class="card produts-quantity dashboard-card h-100 border-bottom-0">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-2">
                                    <div class="avatar me-4">
                                        <span class="avatar-initial rounded bg-label-warning"><i class="bi bi-box"></i></span>
                                    </div>
                                    <h4 class="mb-0">8</h4>
                                </div>
                                <p class="mb-1">Products</p>
                                <p class="mb-0">
                                    <span class="text-heading text-danger fw-medium me-2">-8.7%</span>
                                    <small class="text-muted">than last week</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-3">
                        <div class="card dashboard-card customers-card border-bottom-0 h-100">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-2">
                                    <div class="avatar me-4">
                                        <span class="avatar-initial rounded bg-label-info"><i class="bi bi-people ti-28px"></i></span>
                                    </div>
                                    <h4 class="mb-0">13</h4>
                                </div>
                                <p class="mb-1">Customers</p>
                                <p class="mb-0">
                                    <span class="text-heading text-success fw-medium me-2">+5.5%</span>
                                    <small class="text-muted">than last week</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-3">
                        <div class="card dashboard-card review-card border-bottom-0 h-100">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-2">
                                    <div class="avatar me-4">
                                        <span class="avatar-initial rounded bg-label-danger"><i class="bi bi-chat-square-dots ti-28px"></i></span>
                                    </div>
                                    <h4 class="mb-0">27</h4>
                                </div>
                                <p class="mb-1">Review</p>
                                <p class="mb-0">
                                    <span class="text-heading text-success fw-medium me-2">+4.3%</span>
                                    <small class="text-muted">than last week</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-6 mb-3'>
                        <div class="card h-100">
                            <div class="card-header bg-white border-0 px-4 pt-4">
                                <h5 class="card-title mb-0">Customers</h5>
                            </div>
                            <div class="card-body">
                                <div id="Customer_chart">
                                    <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 mb-3'>
                        <div class="card h-100">
                            <div class="card-header bg-white border-0 px-4 pt-4">
                                <h5 class="card-title mb-0">Orders</h5>
                            </div>
                            <div class="card-body">
                                <div id="Orderchart">
                                    <ReactApexChart options={orderstate.options} series={orderstate.series} type="area" height={350} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-12'>
                        <div class="card h-100">
                            <div class="card-header bg-white border-0 px-4 pt-4">
                                <h5 class="card-title mb-0">Sales Report</h5>
                            </div>
                            <div class="row card-body">
                                <div className='col-md-6 col-sm-12 mb-3'>
                                    <div id="Saleschart">
                                        <ReactApexChart options={salesstate.options} series={salesstate.series} type="bar" height={450} />
                                    </div>
                                </div>
                                <div className='col-md-6 col-sm-12 mb-3'>
                                    <div id="TotalEarningchart">
                                        <ReactApexChart options={totalearning.options} series={totalearning.series} type="donut" height={350} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='card p-4 col-md-12'>
                        <div class="card-header bg-white border-0 px-1 mb-2">
                            <h5 class="card-title mb-0">Recent Orders</h5>
                        </div>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Customer</th>
                                        <th>Amount</th>
                                        <th>Payment Method</th>
                                        <th>Payment Status</th>
                                        <th>Status</th>
                                        <th>Create at</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link>#1234</Link></td>
                                        <td>John Doe</td>
                                        <td>₹ 1200</td>
                                        <td>Credit Card</td>
                                        <td><span class="badge bg-label-success me-1">Compeleted</span></td>
                                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                                        <td>01-01-2023</td>
                                    </tr>
                                    <tr>
                                        <td><Link>#1234</Link></td>
                                        <td>John Doe</td>
                                        <td>₹ 1200</td>
                                        <td>Credit Card</td>
                                        <td><span class="badge bg-label-warning me-1">Pending</span></td>
                                        <td><span class="badge bg-label-danger me-1">Inactive</span></td>
                                        <td>01-01-2023</td>
                                    </tr>
                                    <tr>
                                        <td><Link>#1234</Link></td>
                                        <td>John Doe</td>
                                        <td>₹ 1200</td>
                                        <td>Credit Card</td>
                                        <td><span class="badge bg-label-success me-1">Compeleted</span></td>
                                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                                        <td>01-01-2023</td>
                                    </tr>
                                    <tr>
                                        <td><Link>#1234</Link></td>
                                        <td>John Doe</td>
                                        <td>₹ 1200</td>
                                        <td>Credit Card</td>
                                        <td><span class="badge bg-label-warning me-1">Pending</span></td>
                                        <td><span class="badge bg-label-danger me-1">Inactive</span></td>
                                        <td>01-01-2023</td>
                                    </tr>
                                    <tr>
                                        <td><Link>#1234</Link></td>
                                        <td>John Doe</td>
                                        <td>₹ 1200</td>
                                        <td>Credit Card</td>
                                        <td><span class="badge bg-label-success me-1">Compeleted</span></td>
                                        <td><span class="badge bg-label-primary me-1">Active</span></td>
                                        <td>01-01-2023</td>
                                    </tr>
                                    <tr>
                                        <td><Link>#1234</Link></td>
                                        <td>John Doe</td>
                                        <td>₹ 1200</td>
                                        <td>Credit Card</td>
                                        <td><span class="badge bg-label-warning me-1">Pending</span></td>
                                        <td><span class="badge bg-label-danger me-1">Inactive</span></td>
                                        <td>01-01-2023</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
