import React, { useEffect } from "react";
import { useState } from "react";
import DropdownAddOption from "./DropdownAddOption";
const API = import.meta.env.VITE_APP_BUDGET_API;

export default function FormTransaction({ id, categories, onSetCategories }) {
	const [transactionData, setTransactionDate] = useState({
		item_name: "",
		amount: "",
		date: "",
		merchant: "",
		category: "",
	});

	function handleFormData(e) {
		e.preventDefault();
		const { id, value } = e.target;
		setTransactionDate((prev) => ({ ...prev, [id]: getProperType(id, value) }));
	}
	function getProperType(key, value) {
		switch (key) {
			case "item_name":
				return String(value);
			case "amount":
				return Number(value);
			case "date":
				return String(value);
			case "merchant":
				return String(value);
			case "category":
				return String(value);
		}
	}

	function handleFormSubmission(e) {
		e.preventDefault();
		if (id) {
			//update

			fetch(`${API}/transactions/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(transactionData),
			})
				.then((res) => res.json())
				.then((res) => {});
		} else {
			//create
		}
	}

	useEffect(() => {
		if (id) {
			fetch(`${API}/transactions/${id}`)
				.then((res) => res.json())
				.then((data) => {
					setTransactionDate((prev) => ({ ...prev, ...data }));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, []);

	return (
		<form
			className="max-w-sm mx-auto dark:bg-gray-700 p-2 border rounded"
			onSubmit={handleFormSubmission}
		>
			<div className="mb-5">
				<label
					htmlFor="item_name"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Transaction name
				</label>
				<input
					value={transactionData.item_name}
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
					categories={categories}
					selectedCategory={transactionData.category}
					onSetCategories={onSetCategories}
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
					value={transactionData.amount}
					type="text"
					id="amount"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					required
				/>
			</div>
			<div className="mb-5">
				<label
					htmlFor="merchant"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					merchant
				</label>

				<input
					onChange={handleFormData}
					value={transactionData.merchant}
					type="text"
					id="merchant"
					placeholder="Entity name"
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
					value={transactionData.date}
					type="date"
					id="date"
					className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					required
				/>
			</div>

			<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				{id ? "Update" : "Submit"}
			</button>
		</form>
	);
}
