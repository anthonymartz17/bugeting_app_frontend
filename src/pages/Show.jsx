import React from "react";
import DetailTransaction from "../components/DetailTransaction";
export default function Show({ onConfirmBeforeDelete }) {
	return (
		<div>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<h2 className="text-xl font-bold tracking-tight  sm:text-xl">
					Transaction Detail
				</h2>

				<DetailTransaction onConfirmBeforeDelete={onConfirmBeforeDelete} />
			</div>
		</div>
	);
}
