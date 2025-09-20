import React from "react";

function RightSection({
	imageUrl,
	productName,
	productDescription,
	learnMore,
}) {
	return (
		<div className="container py-5">
			<div className="row px-5">
				<div className="col-md-5 d-flex flex-column justify-content-center">
					<h1 className="fs-3 fw-normal mb-3">{productName}</h1>
					<p className="lh-lg mb-4">{productDescription}</p>
					<a
						className="text-decoration-none fw-semibold"
						href={learnMore}>
						Learn More{" "}
						<i
							className="fa fa-long-arrow-right"
							aria-hidden="true"></i>
					</a>
				</div>
				<div className="col-md-7 text-center">
					<img
						className="img-fluid"
						src={imageUrl}
						alt={productName}
					/>
				</div>
			</div>
		</div>
	);
}

export default RightSection;
