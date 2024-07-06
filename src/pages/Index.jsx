import React from "react";
import TransactionsTable from "../components/TransactionsTable";
export default function Index({ setModalOpen }) {
	return (
		<div>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<TransactionsTable setModalOpen={setModalOpen} />
			</div>
		</div>
	);
}
