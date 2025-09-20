import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

// Test Suite
describe("Hero Component", () => {
	test("renders hero image", () => {
		render(<Hero />);
		const heroImage = screen.getByAltText("Hero Image");
		expect(heroImage).toBeInTheDocument();
		expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
	});

	test("renders heading", () => {
		render(<Hero />);
		expect(
			screen.getByRole("heading", { name: /invest in everything/i }),
		).toBeInTheDocument();
	});

	test("renders description text", () => {
		render(<Hero />);
		expect(
			screen.getByText(/online platform to invest in stocks/i),
		).toBeInTheDocument();
	});

	test("renders sign-up button", () => {
		render(<Hero />);
		const button = screen.getByRole("button", {
			name: /sign up for free/i,
		});
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass("btn-primary");
	});
});
