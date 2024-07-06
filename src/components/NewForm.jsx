import React from "react";
import { useState } from "react";
import DropdownAddOption from "../components/DropdownAddOption";
export default function New() {
	const [isOpen, setIsOpen] = useState(false);
	const [newTransaction, setNewTransaction] = useState({
		item_name: "",
		amount: "",
		date: "",
		from: "",
		category: "",
	});

	function handleFormData(e) {
		const { id, value } = e.target;
		setNewTransaction((prev) => ({ ...prev, [id]: value }));
	}

	function handleFormSubmition(e) {
		e.preventDefault();
		console.log(newTransaction);
	}
	return (
		<form
			className="max-w-sm mx-auto dark:bg-gray-700 p-2 border rounded"
			onSubmit={handleFormSubmition}
		>
			<div className="mb-5">
				<label
					htmlFor="item_name"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Transaction name
				</label>
				<input
					onChange={handleFormData}
					type="text"
					id="item_name"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					placeholder="Enter transaction"
					required
				/>
			</div>

			<div className="mb-5">
				<label
					htmlFor="category"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Category
				</label>
				<DropdownAddOption
					options={["test", "test2"]}
					handleFormData={handleFormData}
				/>
			</div>
			<div className="mb-5">
				<label
					htmlFor="amount"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Amount
				</label>

				<input
					onChange={handleFormData}
					type="text"
					id="amount"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					required
				/>
			</div>
			<div className="mb-5">
				<label
					htmlFor="from"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					From
				</label>

				<input
					onChange={handleFormData}
					type="text"
					id="from"
					placeholder="100"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					required
				/>
			</div>
			<div className="mb-5">
				<label
					htmlFor="date"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Date
				</label>

				<input
					onChange={handleFormData}
					type="date"
					id="date"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					required
				/>
			</div>

			<button
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				Submit
			</button>
		</form>
	);
}
