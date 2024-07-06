import React from "react";
import { Link } from "react-router-dom";

export default function Transaction({ transaction }) {
	return (
		<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
			<th
				scope="row"
				className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
			>
				{transaction.item_name}
			</th>
			<td className="px-6 py-4">{transaction.date}</td>
			<td className="px-6 py-4">${transaction.amount}</td>
			<td className="px-6 py-4 flex gap-1">
				<Link to={`/transactions/${transaction.id}`}>
					<span className="material-symbols-outlined text-green-500">
						visibility
					</span>
				</Link>
				<Link to={`/transactions/${transaction.id}`}>
					<span className="material-symbols-outlined text-yellow-300">
						edit
					</span>
				</Link>

				<span className="material-symbols-outlined text-red-500">delete</span>
			</td>
		</tr>
	);
}
