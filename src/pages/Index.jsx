import React from "react";
import TableTransaction from "../components/TableTransaction";
export default function Index({ onconfirmBeforeDelete, transactions }) {

	return (
		<div>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<TableTransaction
					onconfirmBeforeDelete={onconfirmBeforeDelete}
					transactions={transactions}
				/>
			</div>
		</div>
	);
}
