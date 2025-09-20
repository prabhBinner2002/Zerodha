import React from "react";

function Team() {
	return (
		<div className="container">
			<div className="row p-3 border-top">
				<h1 className="fs-2 text-center mt-5">People</h1>
			</div>
			<div
				className="row p-5 text-muted fs-6"
				style={{ lineHeight: "1.8rem", fontSize: "1.2em" }}>
				<div className="col-6 p-5 text-center">
					<img
						style={{ width: "60%", borderRadius: "100%" }}
						src="media/founder.jpg"
						alt="Founder"
					/>
					<h4 className="mt-5">Prabh Binner</h4>
					<h6>Founder, CEO</h6>
				</div>
				<div className="col-6 p-5 mt-5">
					<p>
						Prabh Binner bootstrapped his journey into web
						development armed with React, three cups of coffee, and
						an unreasonable number of Chrome tabs. Today, he’s busy
						convincing browsers to bend reality, turning side
						projects into mini-universes that occasionally work on
						the first try.
					</p>
					<p>
						He experiments relentlessly, developing interactive
						interfaces and launching creative side projects that
						fuel his vision for larger ventures.
					</p>
					<p>
						Connect on{" "}
						<a
							href="https://www.linkedin.com/in/prabhjot-singh-binner-030a0719b"
							style={{ textDecoration: "none" }}
							target="_blank">
							LinkedIn
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Team;
