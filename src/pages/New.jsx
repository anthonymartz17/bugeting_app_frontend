import React from "react";
import FormTransaction from "../components/ FormTransaction";
export default function New({
	categories,
	onSetCategories,
	onSetTransactions,
}) {
	return (
		<div>
			<div className="mx-auto max-w-2xl py-32 sm:py-25 lg:py-35 px-2">
				<FormTransaction
					categories={categories}
					onSetCategories={onSetCategories}
					onSetTransactions={onSetTransactions}
				/>
			</div>
		</div>
	);
}
