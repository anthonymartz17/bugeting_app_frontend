import React from "react";
import FormTransaction from "../components/ FormTransaction";
export default function New({ categories, onSetCategories }) {
	console.log(categories, "av ");
	return (
		<div>
			<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
				<FormTransaction
					categories={categories}
					onSetCategories={onSetCategories}
				/>
			</div>
		</div>
	);
}
