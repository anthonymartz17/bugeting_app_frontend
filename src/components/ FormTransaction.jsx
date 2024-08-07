import React, { useEffect } from "react";
import { useState } from "react";
import DropdownAddOption from "./DropdownAddOption";
import { Link, useNavigate } from "react-router-dom";
import {
	createTransaction,
	updateTransaction,
	fetchTransactionById,
} from "../services/transactions.service";

export default function FormTransaction({
	id,
	categories,
	onSetCategories,
	onUpdateTransaction,
	onSetTransactions,
}) {
	const navigate = useNavigate();
	const [transactionData, setTransactionData] = useState({
		item_name: "",
		amount: "",
		date: "",
		merchant: "",
		category: "",
	});
	const [isDeposit, setIsDeposit] = useState(true);

	const [validation, setValidation] = useState({
		error: false,
		amount: { isInValid: false },
	});
	function validate() {
		console.log(transactionData,'transactionData.amount')
		if (isNaN(transactionData.amount) || String(transactionData.amount).trim() === "") {
			setValidation((prev) => ({
				...prev,
				error: true,
				amount: { isInValid: true },
			}));
			return false;
		}
		setValidation((prev) => ({
			...prev,
			error: false,
			amount: { isInValid: false },
		}));
		return true;
	}
	function handleFormData(e) {
		e.preventDefault();
		console.log(e.target.checked);
		const { id, value } = e.target;
		setTransactionData((prev) => ({
			...prev,
			[id]: value,
		}));
	}
	function handleIsDeposit() {
		setIsDeposit((prev) => !prev);
	}

	async function handleFormSubmission(e) {
		e.preventDefault();

		if (!validate()) return;

		if (id) {
			try {
				const updatedTransaction = await updateTransaction({
					...transactionData,
					isDeposit,
				});
				onUpdateTransaction(updatedTransaction);
				navigate(`/transactions/${id}`);
			} catch (error) {
				console.log(error);
			}
		} else {
			try {
				const newTransaction = await createTransaction({
					...transactionData,
					isDeposit,
				});
				onSetTransactions((prev) => [...prev, newTransaction]);
				navigate(`/transactions`);
			} catch (error) {
				console.log(error);
			}
		}
	}
	async function setTransactionDataById(id) {
		try {
			const transaction = await fetchTransactionById(id);
			setTransactionData((prev) => ({ ...prev, ...transaction }));
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (id) {
			setTransactionDataById(id);
		}
	}, []);

	return (
		<form
			className="max-w-md mx-auto dark:bg-gray-700 p-2 border rounded"
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

				{validation.amount.isInValid && (
					<small
						key={validation.amount.isInValid}
						className="text-red-500 absolute"
					>
						Enter a valid number
					</small>
				)}
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
					className="shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
					required
				/>
			</div>

			<div className="flex items-center mb-4">
				<input
					onChange={handleIsDeposit}
					id="isDeposit"
					type="checkbox"
					checked={isDeposit}
					className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label
					htmlFor="isDeposit"
					className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>
					Deposit
				</label>
			</div>

			<div className="flex justify-end gap-1">
				<button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
					{id ? "Update" : "Submit"}
				</button>
				<Link to="/transactions">
					<button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-800">
						Cancel
					</button>
				</Link>
			</div>
		</form>
	);
}
