import React from "react";

function LeftSection({
	imageUrl,
	productName,
	productDescription,
	tryDemo,
	learnMore,
	googlePlay,
	AppStore,
}) {
	return (
		<div className="container py-5">
			<div className="row px-5">
				<div className="col-md-7 text-center">
					<img
						className="img-fluid"
						src={imageUrl}
						alt={productName}
					/>
				</div>
				<div className="col-md-5 d-flex flex-column justify-content-center">
					<h1 className="fs-3 fw-normal mb-3">{productName}</h1>
					<p className="lh-lg mb-4">{productDescription}</p>
					<div className="mb-4">
						<a
							className="text-decoration-none fw-semibold me-4"
							href={tryDemo}>
							Try Demo{" "}
							<i
								className="fa fa-long-arrow-right"
								aria-hidden="true"></i>
						</a>
						<a
							className="text-decoration-none fw-semibold"
							href={learnMore}>
							Learn More{" "}
							<i
								className="fa fa-long-arrow-right"
								aria-hidden="true"></i>
						</a>
					</div>
					<div>
						<a href={googlePlay}>
							<img
								src="media/googlePlayBadge.svg"
								alt="Google Play"
							/>
						</a>
						<a className="ms-4" href={AppStore}>
							<img
								src="media/appstoreBadge.svg"
								alt="App Store"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftSection;
