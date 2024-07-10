import React from "react";
import logo from "../assets/budget_logo.png";
import { NavLink } from "react-router-dom";
import { formatCurrency } from "../utils/formatCurrency";
function Navbar({ currentBalance }) {
	function styleActive({ isActive }) {
		return {
			color: isActive ? "#22c55e" : "",
		};
	}
	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<NavLink
					to="/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img src={logo} className="h-10" alt="Budget Logo" />
				</NavLink>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div className="hidden w-full md:block md:w-auto" id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<NavLink
								style={styleActive}
								to="/"
								className="block py-2 px-3 text-white rounded md:p-0 "
								aria-current="page"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								style={styleActive}
								to="/transactions"
								className="block py-2 px-3 text-white rounded md:p-0 "
							>
								Transactions
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/transactions/new"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
							>
								+ Create Transaction
							</NavLink>
						</li>
					</ul>
				</div>
				<p className="text-white">{formatCurrency(currentBalance)}</p>
			</div>
		</nav>
	);
}

export default Navbar;
