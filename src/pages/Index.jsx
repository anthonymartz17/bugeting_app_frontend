import React from "react";
import TableTransaction from "../components/TableTransaction";
export default function Index({ setModalOpen }) {

	
	return (
		<div>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<TableTransaction setModalOpen={setModalOpen} />
			</div>
		</div>
	);
}
