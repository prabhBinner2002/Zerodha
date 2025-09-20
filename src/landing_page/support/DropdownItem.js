import React from "react";

function DropdownItem({ id, icon, title, links }) {
	return (
		<div className="accordion-item">
			<h2 className="accordion-header">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#collapse-${id}`}
					aria-expanded="false"
					aria-controls={`collapse-${id}`}>
					<i className={`me-2 ${icon}`} aria-hidden="true"></i>
					{title}
				</button>
			</h2>
			<div
				id={`collapse-${id}`}
				className="accordion-collapse collapse"
				data-bs-parent="#accordionExample">
				<div className="accordion-body">
					<ul className="list-unstyled m-0">
						{links.map((link, index) => (
							<li key={index}>
								<a
									href={link.href}
									className="text-decoration-none d-block py-1">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default DropdownItem;
