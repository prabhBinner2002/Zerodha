import React from "react";
import DropdownItem from "./DropdownItem";

function CreateTicket() {
	const sections = [
		{
			id: "account",
			icon: "fa fa-plus-circle",
			title: "Account Opening",
			links: [
				{ label: "Resident Individual", href: "#" },
				{ label: "Minor", href: "#" },
				{ label: "Non Resident Indian(NRI)", href: "#" },
				{ label: "Company, Partnership, HUF and LLP", href: "#" },
				{ label: "Glossary", href: "#" },
			],
		},
		{
			id: "zerodha",
			icon: "fa fa-user",
			title: "Your Zerodha Account",
			links: [
				{ label: "Your Profile", href: "#" },
				{ label: "Account modification", href: "#" },
				{
					label: "Client Master Report (CMR) and Depository Participant (DP)",
					href: "#",
				},
				{ label: "Nomination", href: "#" },
				{ label: "Transfer and conversion of securities", href: "#" },
			],
		},
		{
			id: "kite",
			icon: "fa fa-paper-plane",
			title: "Kite",
			links: [
				{ label: "IPO", href: "#" },
				{ label: "Trading FAQs", href: "#" },
				{
					label: "Margin Trading Facility (MTF) and Margins",
					href: "#",
				},
				{ label: "Charts and orders", href: "#" },
				{ label: "Alerts and Nudges", href: "#" },
				{ label: "General", href: "#" },
			],
		},
		{
			id: "funds",
			icon: "fa fa-inr",
			title: "Funds",
			links: [
				{ label: "Add funds", href: "#" },
				{ label: "Withdraw funds", href: "#" },
				{ label: "Add bank accounts", href: "#" },
				{ label: "eMandates", href: "#" },
			],
		},
		{
			id: "console",
			icon: "fa fa-bar-chart",
			title: "Console",
			links: [
				{ label: "Portfolio", href: "#" },
				{ label: "Corporate actions", href: "#" },
				{ label: "Funds statement", href: "#" },
				{ label: "Reports", href: "#" },
				{ label: "Profile", href: "#" },
				{ label: "Segments", href: "#" },
			],
		},
		{
			id: "coin",
			icon: "fa fa-clock-o",
			title: "Coin",
			links: [
				{ label: "Mutual funds basics", href: "#" },
				{ label: "National Pension Scheme (NPS)", href: "#" },
				{ label: "Fixed Deposit (FD)", href: "#" },
				{ label: "Features on Coin", href: "#" },
				{ label: "Payments and Orders", href: "#" },
				{ label: "General", href: "#" },
			],
		},
	];

	return (
		<div className="container">
			<div className="row p-5 mb-5 mt-5">
				<h1 className="fs-2 mb-5">
					To create a ticket, select a relevant topic:
				</h1>

				<div className="col-12">
					<div className="accordion" id="accordionExample">
						{sections.map((section) => (
							<DropdownItem
								key={section.id}
								id={section.id}
								icon={section.icon}
								title={section.title}
								links={section.links}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateTicket;
