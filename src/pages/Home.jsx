import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
	return (
		<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				Manage Your Finances with Ease
			</h1>
			<p className="mt-6 text-lg leading-8 text-gray-600">
				Welcome to Budgeting App, where managing your finances has never been
				simpler. Track your expenses, monitor your savings, and stay on top of
				your financial goals effortlessly. Whether you're budgeting for everyday
				expenses or planning for the future, our intuitive app helps you take
				control of your money.
			</p>
			<div className="mt-10 flex items-center justify-center gap-x-6">
				<Link
					to="/transactions/new"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				>
					Create Transaction
				</Link>
				<Link
					to="/transactions"
					className="text-sm font-semibold leading-6 text-gray-900"
				>
					View Transactions <span aria-hidden="true">→</span>
				</Link>
			</div>
		</div>
	);
}
