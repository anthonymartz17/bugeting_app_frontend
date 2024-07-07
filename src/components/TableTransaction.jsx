

import Transaction from "./RowTransaction";
export default function TableTransactions({ onTryDelete,transactions }) {


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
					{transactions.length > 0 ? (
						transactions.map((tranx) => (
							<Transaction
								transaction={tranx}
								key={tranx.id}
								onTryDelete={onTryDelete}
							/>
						))
					) : (
						<tr>
							<td className="text-center">There are no transactions</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
}
