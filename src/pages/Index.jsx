import React from "react";
import TableTransaction from "../components/TableTransaction";
export default function Index({ onConfirmBeforeDelete, transactions }) {
	return (
		<div>
			<div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 px-2">
				<TableTransaction
					onConfirmBeforeDelete={onConfirmBeforeDelete}
					transactions={transactions}
				/>
			</div>
		</div>
	);
}
