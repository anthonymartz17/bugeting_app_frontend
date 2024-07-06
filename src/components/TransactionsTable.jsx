import React from "react";
const transactions = [
	{
		id: 1,
		item_name: "Salary",
		amount: 5000,
		date: "2024-07-01",
		from: "Employer",
		category: "Income",
	},
	{
		id: 2,
		item_name: "Groceries",
		amount: 150,
		date: "2024-07-02",
		from: "Grocery Store",
		category: "Food",
	},
	{
		id: 3,
		item_name: "Rent",
		amount: 1200,
		date: "2024-07-03",
		from: "Landlord",
		category: "Housing",
	},
	{
		id: 4,
		item_name: "Cat Food",
		amount: 40,
		date: "2024-07-04",
		from: "Pet Store",
		category: "Pets",
	},
	{
		id: 5,
		item_name: "Savings Deposit",
		amount: 500,
		date: "2024-07-05",
		from: "Bank",
		category: "Savings",
	},
];
import Transaction from "./TransactionRow";

export default function TransactionsTable() {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Date
						</th>

						<th scope="col" className="px-6 py-3">
							Price
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((tranx) => (
						<Transaction transaction={tranx} key={tranx.id} />
					))}
				</tbody>
			</table>
		</div>
	);
}
