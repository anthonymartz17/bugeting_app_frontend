import React from "react";
const transaction = {
	id: 5,
	item_name: "Savings Deposit",
	amount: 500,
	date: "2024-07-05",
	from: "Bank",
	category: "Savings",
};

export default function TransactionDetail() {
	return (
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
					<td className="px-6 py-4">Date:</td>
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						{transaction.date}
					</th>
				</tr>
				<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
					<td className="px-6 py-4">From:</td>
					<th
						scope="row"
						className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						{transaction.from}
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
	);
}
