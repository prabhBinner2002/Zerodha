import React from "react";

function Brokerage() {
	return (
		<div className="container">
			<div className="row p-5 mt-5 text-center border-top">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className="nav-link active"
							id="equity-tab"
							data-bs-toggle="tab"
							data-bs-target="#equity"
							type="button"
							role="tab"
							aria-controls="equity"
							aria-selected="true">
							Equity
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="currency-tab"
							data-bs-toggle="tab"
							data-bs-target="#currency"
							type="button"
							role="tab"
							aria-controls="currency"
							aria-selected="false">
							Currency
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="commodity-tab"
							data-bs-toggle="tab"
							data-bs-target="#commodity"
							type="button"
							role="tab"
							aria-controls="commodity"
							aria-selected="false">
							Commodity
						</button>
					</li>
				</ul>

				<div className="tab-content mt-4" id="myTabContent">
					<div
						className="tab-pane fade show active"
						id="equity"
						role="tabpanel"
						aria-labelledby="equity-tab">
						<table className="table table-striped table-bordered">
							<thead className="table-light">
								<tr>
									<th scope="col"></th>
									<th scope="col">Equity Delivery</th>
									<th scope="col">Equity Intraday</th>
									<th scope="col">F&O - Futures</th>
									<th scope="col">F&O - Options</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Brokerage</th>
									<td>Zero Brokerage</td>
									<td>
										0.03% or Rs. 20/executed order whichever
										is lower
									</td>
									<td>
										0.03% or Rs. 20/executed order whichever
										is lower
									</td>
									<td>Flat Rs. 20 per executed order</td>
								</tr>
								<tr>
									<th scope="row">STT/CTT</th>
									<td>0.1% on buy & sell</td>
									<td>0.025% on the sell side</td>
									<td>0.02% on the sell side</td>
									<td>
										<ul className="text-start mb-0">
											<li>
												0.125% of the intrinsic value on
												options that are bought and
												exercised
											</li>
											<li>
												0.1% on sell side (on premium)
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<th scope="row">Transaction charges</th>
									<td>
										<ul className="text-start mb-0">
											<li>NSE: 0.00297%</li>
											<li>BSE: 0.00375%</li>
										</ul>
									</td>
									<td>
										<ul className="text-start mb-0">
											<li>NSE: 0.00297%</li>
											<li>BSE: 0.00375%</li>
										</ul>
									</td>
									<td>
										<ul className="text-start mb-0">
											<li>NSE: 0.00173%</li>
											<li>BSE: 0</li>
										</ul>
									</td>
									<td>
										<ul className="text-start mb-0">
											<li>NSE: 0.03503% (on premium)</li>
											<li>BSE: 0.0325% (on premium)</li>
										</ul>
									</td>
								</tr>
								<tr>
									<th scope="row">GST</th>
									<td colSpan="4">
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
								</tr>
								<tr>
									<th scope="row">SEBI charges</th>
									<td colSpan="4">₹10 / crore</td>
								</tr>
								<tr>
									<th scope="row">Stamp charges</th>
									<td>0.015% or ₹1500 / crore on buy side</td>
									<td>0.003% or ₹300 / crore on buy side</td>
									<td>0.002% or ₹200 / crore on buy side</td>
									<td>0.003% or ₹300 / crore on buy side</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div
						className="tab-pane fade"
						id="currency"
						role="tabpanel"
						aria-labelledby="currency-tab">
						<table className="table table-striped table-bordered">
							<thead className="table-light">
								<tr>
									<th scope="col"></th>
									<th scope="col">Currency Futures</th>
									<th scope="col">Currency Options</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Brokerage</th>
									<td>
										0.03% or ₹20/executed order whichever is
										lower
									</td>
									<td>₹20/executed order</td>
								</tr>
								<tr>
									<th scope="row">STT/CTT</th>
									<td>No STT</td>
									<td>No STT</td>
								</tr>
								<tr>
									<th scope="row">Transaction charges</th>
									<td>
										<ul className="text-start mb-0">
											<li>NSE: 0.00035%</li>
											<li>BSE: 0.00045%</li>
										</ul>
									</td>
									<td>
										<ul className="text-start mb-0">
											<li>NSE: 0.0311%</li>
											<li>BSE: 0.001%</li>
										</ul>
									</td>
								</tr>
								<tr>
									<th scope="row">GST</th>
									<td colSpan="2">
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
								</tr>
								<tr>
									<th scope="row">SEBI charges</th>
									<td colSpan="2">₹10 / crore</td>
								</tr>
								<tr>
									<th scope="row">Stamp charges</th>
									<td colSpan="2">
										0.0001% or ₹10 / crore on buy side
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div
						className="tab-pane fade"
						id="commodity"
						role="tabpanel"
						aria-labelledby="commodity-tab">
						<table className="table table-striped table-bordered">
							<thead className="table-light">
								<tr>
									<th scope="col"></th>
									<th scope="col">Commodity Futures</th>
									<th scope="col">Commodity Options</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Brokerage</th>
									<td>
										0.03% or ₹20/executed order whichever is
										lower
									</td>
									<td>₹20/executed order</td>
								</tr>
								<tr>
									<th scope="row">STT/CTT</th>
									<td>0.01% on sell side (Non-Agri)</td>
									<td>0.05% on sell side</td>
								</tr>
								<tr>
									<th scope="row">Transaction charges</th>
									<td>
										<ul className="text-start mb-0">
											<li>MCX: 0.0021%</li>
											<li>NSE: 0.0001%</li>
										</ul>
									</td>
									<td>
										<ul className="text-start mb-0">
											<li>MCX: 0.0418%</li>
											<li>NSE: 0.001%</li>
										</ul>
									</td>
								</tr>
								<tr>
									<th scope="row">GST</th>
									<td colSpan="2">
										18% on (brokerage + SEBI charges +
										transaction charges)
									</td>
								</tr>
								<tr>
									<th scope="row">SEBI charges</th>
									<td>
										<ul className="text-start mb-0">
											<li>Agri: ₹1 / crore</li>
											<li>Non-agri: ₹10 / crore</li>
										</ul>
									</td>
									<td>₹10 / crore</td>
								</tr>
								<tr>
									<th scope="row">Stamp charges</th>
									<td>0.002% or ₹200 / crore on buy side</td>
									<td>0.003% or ₹300 / crore on buy side</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Brokerage;
