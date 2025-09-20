import React from "react";

function Hero() {
	return (
		<section className="container-fluid py-5" id="supportHero">
			<div
				className="d-flex justify-content-between align-items-center px-5 mb-5"
				id="supportWrapper">
				<h4 className="mb-0">Support Portal</h4>
				<a href="#" className="btn btn-light ">
					Track Tickets
				</a>
			</div>

			<div className="row px-5">
				<div className="col-lg-6 mb-4">
					<h1 className="fs-2 mb-4">
						Search for an answer or browse help topics to create a
						ticket
					</h1>
					<input
						type="text"
						placeholder="Eg: How do I activate F&O, why is my order getting rejected..."
						className="form-control mb-3"
					/>
					<div className="d-flex flex-wrap gap-2">
						<a href="#" className="support-link">
							Track account opening
						</a>
						<a href="#" className="support-link">
							Track segment activation
						</a>
						<a href="#" className="support-link">
							Intraday margins
						</a>
						<a href="#" className="support-link">
							Kite user manual
						</a>
					</div>
				</div>

				<div className="col-lg-1"></div>

				<div className="col-lg-5">
					<h1 className="fs-2 mb-4">Featured</h1>
					<ol className="ps-3">
						<li>
							<a href="#" className="support-link">
								Current Takeovers and Delisting - January 2026
							</a>
						</li>
						<li>
							<a href="#" className="support-link">
								Latest Intraday leverages - MIS & CO
							</a>
						</li>
					</ol>
				</div>
			</div>
		</section>
	);
}

export default Hero;
