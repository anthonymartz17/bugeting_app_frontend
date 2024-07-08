import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchTransactionById } from "../services/transactions.service";

const API = import.meta.env.VITE_APP_BUDGET_API;

export default function DetailTransaction({ onConfirmBeforeDelete }) {
	const [transaction, setTransaction] = useState({});
	const { id } = useParams();

	async function getTransactionById(id) {
		try {
			const transaction = await fetchTransactionById(id);
			setTransaction(transaction);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		getTransactionById(id);
	}, []);
	return (
		<div>
			<div className="flex justify-end">
				<Link to={`/transactions/${id}/edit`}>
					<button className="text-white bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800">
						Edit
					</button>
				</Link>
				<button
					onClick={() => onConfirmBeforeDelete(id)}
					className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
				>
					Delete
				</button>
			</div>
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<tbody>
					<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<td className="px-6 py-4">Name:</td>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{transaction.item_name}
						</th>
					</tr>
					<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<td className="px-6 py-4">Category:</td>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{transaction.category}
						</th>
					</tr>
					<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<td className="px-6 py-4">Date:</td>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{transaction.date}
						</th>
					</tr>
					<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<td className="px-6 py-4">Merchant:</td>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{transaction.merchant}
						</th>
					</tr>
					<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
						<td className="px-6 py-4">Amount:</td>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{transaction.amount}
						</th>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
