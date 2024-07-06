import React from "react";
import TransactionsTable from "../components/TransactionsTable";
export default function Index() {
	return (
		<div>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<TransactionsTable />
			</div>
		</div>
	);
}
